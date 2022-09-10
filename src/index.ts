import {z, ZodType} from "zod"
import polka from "polka";
import {Response} from "./response";
import {json} from "body-parser";

export type HttpMethod = "get" | "put" | "post" | "delete";

export const app = polka()

/**
 * The main point of functionality
 */
class Router {
    /**
     * Building an endpoint
     * @param method The HTTP-Method the endpoint shall respond to
     * @param path The path, the endpoint shall respond to
     * @param input The input that the endpoint requires to run successfully
     * @private
     */
    private makeFn<T extends ZodType,
        Q extends ZodType,
        A extends ZodType>(method: HttpMethod, path: string, input: { body: T, query: Q, headers: A }) {

        const inputType = z.object({
            body: input.body,
            query: input.query,
            headers: input.headers
        })

        // List of all the functions that will be run on request to the path
        let executionList: polka.Middleware[] = []

        const result = {

            /**
             * This adds the polka handler, which then validates the inputs, and then runs the
             * provided callback
             * @param callback The callback that will be run once the type validation is done
             */
            handle: (callback: (_: z.infer<typeof inputType>) => Response) => {
                executionList.push((req, res) => {
                    const result = inputType.safeParse({
                        body: req.body,
                        query: req.query,
                        headers: req.headers
                    })

                    let data: string
                    let status: number

                    // When the validation succeeds, the callback will be executed
                    // if not, we will return a Bad-Request.
                    if (!result.success) {
                        status = 400;
                        data = JSON.stringify({message: "Bad request."});
                    } else {
                        const response = callback(result.data)

                        status = response.status || 200;
                        data = response.body || "";
                    }

                    res.writeHead(status, {
                        "content-type": "application/json;charset=utf-8",
                        "content-length": Buffer.byteLength(data)
                    })
                    res.end(data)
                })

                app[method](path, ...executionList)
            },

            /**
             * Adds a middleware
             * @param middleware The middleware function that'll get executed
             */
            use: (middleware: polka.Middleware) => {
                executionList.push(middleware)
                return result
            }
        }

        return result
    }

    /**
     * Creating an endpoint that responds to GET-calls at path
     * @param path the endpoint path
     * @param input types for the body, query, and headers
     */
    public get<T extends ZodType,
        Q extends ZodType,
        A extends ZodType>(path: string, input: { body?: T, query?: Q, headers?: A }) {

        return this.makeFn("get", path, {
            body: (input.body ?? z.any()) as T,
            query: (input.query ?? z.any()) as Q,
            headers: (input.headers ?? z.any()) as A
        })
    }

    /**
     * Creating an endpoint that responds to PUT-calls at path
     * @param path the endpoint path
     * @param input types for the body, query, and headers
     */
    public put<T extends ZodType,
        Q extends ZodType,
        A extends ZodType>(path: string, input: { body?: T, query?: Q, headers?: A }) {

        return this.makeFn("put", path, {
            body: (input.body ?? z.any()) as T,
            query: (input.query ?? z.any()) as Q,
            headers: (input.headers ?? z.any()) as A
        })
    }


    /**
     * Creating an endpoint that responds to POST-calls at path
     * @param path the endpoint path
     * @param input types for the body, query, and headers
     */
    public post<T extends ZodType,
        Q extends ZodType,
        A extends ZodType>(path: string, input: { body?: T, query?: Q, headers?: A }) {

        return this.makeFn("post", path, {
            body: (input.body ?? z.any()) as T,
            query: (input.query ?? z.any()) as Q,
            headers: (input.headers ?? z.any()) as A
        })
    }

    /**
     * Creating an endpoint that responds to DELETE-calls at path
     * @param path the endpoint path
     * @param input types for the body, query, and headers
     */
    public delete<T extends ZodType,
        Q extends ZodType,
        A extends ZodType>(path: string, input: { body?: T, query?: Q, headers?: A }) {

        return this.makeFn("delete", path, {
            body: (input.body ?? z.any()) as T,
            query: (input.query ?? z.any()) as Q,
            headers: (input.headers ?? z.any()) as A
        })
    }

}

// This will allow us to access the body
app.use(json())

export const route = new Router();