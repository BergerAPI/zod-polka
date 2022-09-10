import {app, route} from "../src";
import {z} from "zod";
import {Response} from "../src/response";

route.get("/test", {
    body: z.any(),
    headers: z.any(),
    query: z.any()
}).handle((req) => {
    return Response.ok("A")
})

app.listen(2000)