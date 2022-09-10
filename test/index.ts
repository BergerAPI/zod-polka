import {app, route} from "../src";
import {z} from "zod";
import {Response} from "../src/response";

route.get("/test", {
    body: z.object({
        test: z.string()
    }),
}).handle((req) => {
    return Response.ok(req.body.test.toUpperCase())
})

app.listen(2000)