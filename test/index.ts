import {app, route} from "../src";
import {z} from "zod";
import {Response} from "../src/response";

route.post("/test", {
    body: z.object({
        test: z.string()
    }),
})
    .use((input, _) => {
        return Date.now() % 2 === 0 ? Response.ok({
            message: input.body.test.toLowerCase()
        }) : undefined;
    })
    .handle((req) => {
        return Response.ok({
            result: req.body.test.toUpperCase()
        })
    })

app.listen(2000)