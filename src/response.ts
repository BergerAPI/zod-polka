export class Response {
    constructor(public status: number | undefined = undefined,
                public body: any | undefined = undefined,
                public headers: any | undefined = undefined) {
    }


    public static badRequest(): Response
    public static badRequest(body: any): Response
    public static badRequest(body: any = undefined, headers: any = undefined): Response {
        return new Response(400, body, headers)
    }

    public static conflict(): Response
    public static conflict(body: any): Response
    public static conflict(body: any = undefined, headers: any = undefined): Response {
        return new Response(409, body, headers)
    }

    public static expectationFailed(): Response
    public static expectationFailed(body: any): Response
    public static expectationFailed(body: any = undefined, headers: any = undefined): Response {
        return new Response(417, body, headers)
    }

    public static failedDependency(): Response
    public static failedDependency(body: any): Response
    public static failedDependency(body: any = undefined, headers: any = undefined): Response {
        return new Response(424, body, headers)
    }

    public static forbidden(): Response
    public static forbidden(body: any): Response
    public static forbidden(body: any = undefined, headers: any = undefined): Response {
        return new Response(403, body, headers)
    }

    public static gone(): Response
    public static gone(body: any): Response
    public static gone(body: any = undefined, headers: any = undefined): Response {
        return new Response(410, body, headers)
    }

    public static ImATeapot(): Response
    public static ImATeapot(body: any): Response
    public static ImATeapot(body: any = undefined, headers: any = undefined): Response {
        return new Response(418, body, headers)
    }

    public static lengthRequired(): Response
    public static lengthRequired(body: any): Response
    public static lengthRequired(body: any = undefined, headers: any = undefined): Response {
        return new Response(411, body, headers)
    }

    public static locked(): Response
    public static locked(body: any): Response
    public static locked(body: any = undefined, headers: any = undefined): Response {
        return new Response(423, body, headers)
    }

    public static loginTimeOut(): Response
    public static loginTimeOut(body: any): Response
    public static loginTimeOut(body: any = undefined, headers: any = undefined): Response {
        return new Response(440, body, headers)
    }

    public static methodNotAllowed(): Response
    public static methodNotAllowed(body: any): Response
    public static methodNotAllowed(body: any = undefined, headers: any = undefined): Response {
        return new Response(405, body, headers)
    }

    public static misdirectedRequest(): Response
    public static misdirectedRequest(body: any): Response
    public static misdirectedRequest(body: any = undefined, headers: any = undefined): Response {
        return new Response(421, body, headers)
    }

    public static notAcceptable(): Response
    public static notAcceptable(body: any): Response
    public static notAcceptable(body: any = undefined, headers: any = undefined): Response {
        return new Response(406, body, headers)
    }

    public static notFound(): Response
    public static notFound(body: any): Response
    public static notFound(body: any = undefined, headers: any = undefined): Response {
        return new Response(404, body, headers)
    }

    public static payloadTooLarge(): Response
    public static payloadTooLarge(body: any): Response
    public static payloadTooLarge(body: any = undefined, headers: any = undefined): Response {
        return new Response(413, body, headers)
    }

    public static paymentRequired(): Response
    public static paymentRequired(body: any): Response
    public static paymentRequired(body: any = undefined, headers: any = undefined): Response {
        return new Response(402, body, headers)
    }

    public static preconditionFailed(): Response
    public static preconditionFailed(body: any): Response
    public static preconditionFailed(body: any = undefined, headers: any = undefined): Response {
        return new Response(412, body, headers)
    }

    public static preconditionRequired(): Response
    public static preconditionRequired(body: any): Response
    public static preconditionRequired(body: any = undefined, headers: any = undefined): Response {
        return new Response(428, body, headers)
    }

    public static proxyAuthRequired(): Response
    public static proxyAuthRequired(body: any): Response
    public static proxyAuthRequired(body: any = undefined, headers: any = undefined): Response {
        return new Response(407, body, headers)
    }

    public static rangeNotSatisfiable(): Response
    public static rangeNotSatisfiable(body: any): Response
    public static rangeNotSatisfiable(body: any = undefined, headers: any = undefined): Response {
        return new Response(416, body, headers)
    }

    public static requestHeaderFieldsTooLarge(): Response
    public static requestHeaderFieldsTooLarge(body: any): Response
    public static requestHeaderFieldsTooLarge(body: any = undefined, headers: any = undefined): Response {
        return new Response(431, body, headers)
    }

    public static requestTimeout(): Response
    public static requestTimeout(body: any): Response
    public static requestTimeout(body: any = undefined, headers: any = undefined): Response {
        return new Response(408, body, headers)
    }

    public static retryWith(): Response
    public static retryWith(body: any): Response
    public static retryWith(body: any = undefined, headers: any = undefined): Response {
        return new Response(449, body, headers)
    }

    public static tooManyRequests(): Response
    public static tooManyRequests(body: any): Response
    public static tooManyRequests(body: any = undefined, headers: any = undefined): Response {
        return new Response(429, body, headers)
    }

    public static unauthorized(): Response
    public static unauthorized(body: any): Response
    public static unauthorized(body: any = undefined, headers: any = undefined): Response {
        return new Response(401, body, headers)
    }

    public static unavailableForLegalReasons(): Response
    public static unavailableForLegalReasons(body: any): Response
    public static unavailableForLegalReasons(body: any = undefined, headers: any = undefined): Response {
        return new Response(451, body, headers)
    }

    public static unprocessableEntity(): Response
    public static unprocessableEntity(body: any): Response
    public static unprocessableEntity(body: any = undefined, headers: any = undefined): Response {
        return new Response(422, body, headers)
    }

    public static unsupportedMediaType(): Response
    public static unsupportedMediaType(body: any): Response
    public static unsupportedMediaType(body: any = undefined, headers: any = undefined): Response {
        return new Response(415, body, headers)
    }

    public static upgradeRequired(): Response
    public static upgradeRequired(body: any): Response
    public static upgradeRequired(body: any = undefined, headers: any = undefined): Response {
        return new Response(426, body, headers)
    }

    public static uRITooLong(): Response
    public static uRITooLong(body: any): Response
    public static uRITooLong(body: any = undefined, headers: any = undefined): Response {
        return new Response(414, body, headers)
    }

    public static continue(): Response
    public static continue(body: any): Response
    public static continue(body: any = undefined, headers: any = undefined): Response {
        return new Response(100, body, headers)
    }

    public static processing(): Response
    public static processing(body: any): Response
    public static processing(body: any = undefined, headers: any = undefined): Response {
        return new Response(102, body, headers)
    }

    public static switchingProtocols(): Response
    public static switchingProtocols(body: any): Response
    public static switchingProtocols(body: any = undefined, headers: any = undefined): Response {
        return new Response(101, body, headers)
    }

    public static found(): Response
    public static found(body: any): Response
    public static found(body: any = undefined, headers: any = undefined): Response {
        return new Response(302, body, headers)
    }

    public static movedPermanently(): Response
    public static movedPermanently(body: any): Response
    public static movedPermanently(body: any = undefined, headers: any = undefined): Response {
        return new Response(301, body, headers)
    }

    public static multipleChoices(): Response
    public static multipleChoices(body: any): Response
    public static multipleChoices(body: any = undefined, headers: any = undefined): Response {
        return new Response(300, body, headers)
    }

    public static notModified(): Response
    public static notModified(body: any): Response
    public static notModified(body: any = undefined, headers: any = undefined): Response {
        return new Response(304, body, headers)
    }

    public static permanent(): Response
    public static permanent(body: any): Response
    public static permanent(body: any = undefined, headers: any = undefined): Response {
        return new Response(308, body, headers)
    }

    public static seeOther(): Response
    public static seeOther(body: any): Response
    public static seeOther(body: any = undefined, headers: any = undefined): Response {
        return new Response(303, body, headers)
    }

    public static switchProxy(): Response
    public static switchProxy(body: any): Response
    public static switchProxy(body: any = undefined, headers: any = undefined): Response {
        return new Response(306, body, headers)
    }

    public static temp(): Response
    public static temp(body: any): Response
    public static temp(body: any = undefined, headers: any = undefined): Response {
        return new Response(307, body, headers)
    }

    public static useProxy(): Response
    public static useProxy(body: any): Response
    public static useProxy(body: any = undefined, headers: any = undefined): Response {
        return new Response(305, body, headers)
    }

    public static badGateway(): Response
    public static badGateway(body: any): Response
    public static badGateway(body: any = undefined, headers: any = undefined): Response {
        return new Response(502, body, headers)
    }

    public static bandwidthLimitExceeded(): Response
    public static bandwidthLimitExceeded(body: any): Response
    public static bandwidthLimitExceeded(body: any = undefined, headers: any = undefined): Response {
        return new Response(509, body, headers)
    }

    public static gatewayTimeout(): Response
    public static gatewayTimeout(body: any): Response
    public static gatewayTimeout(body: any = undefined, headers: any = undefined): Response {
        return new Response(504, body, headers)
    }

    public static hTTPVersionNotSupported(): Response
    public static hTTPVersionNotSupported(body: any): Response
    public static hTTPVersionNotSupported(body: any = undefined, headers: any = undefined): Response {
        return new Response(505, body, headers)
    }

    public static insufficientStorage(): Response
    public static insufficientStorage(body: any): Response
    public static insufficientStorage(body: any = undefined, headers: any = undefined): Response {
        return new Response(507, body, headers)
    }

    public static internal(): Response
    public static internal(body: any): Response
    public static internal(body: any = undefined, headers: any = undefined): Response {
        return new Response(500, body, headers)
    }

    public static loopDetected(): Response
    public static loopDetected(body: any): Response
    public static loopDetected(body: any = undefined, headers: any = undefined): Response {
        return new Response(508, body, headers)
    }

    public static networkAuthRequired(): Response
    public static networkAuthRequired(body: any): Response
    public static networkAuthRequired(body: any = undefined, headers: any = undefined): Response {
        return new Response(511, body, headers)
    }

    public static notExtended(): Response
    public static notExtended(body: any): Response
    public static notExtended(body: any = undefined, headers: any = undefined): Response {
        return new Response(510, body, headers)
    }

    public static notImplemented(): Response
    public static notImplemented(body: any): Response
    public static notImplemented(body: any = undefined, headers: any = undefined): Response {
        return new Response(501, body, headers)
    }

    public static serviceUnavailable(): Response
    public static serviceUnavailable(body: any): Response
    public static serviceUnavailable(body: any = undefined, headers: any = undefined): Response {
        return new Response(503, body, headers)
    }

    public static variantAlsoNegotiates(): Response
    public static variantAlsoNegotiates(body: any): Response
    public static variantAlsoNegotiates(body: any = undefined, headers: any = undefined): Response {
        return new Response(506, body, headers)
    }

    public static accepted(): Response
    public static accepted(body: any): Response
    public static accepted(body: any = undefined, headers: any = undefined): Response {
        return new Response(202, body, headers)
    }

    public static alreadyReported(): Response
    public static alreadyReported(body: any): Response
    public static alreadyReported(body: any = undefined, headers: any = undefined): Response {
        return new Response(208, body, headers)
    }

    public static created(): Response
    public static created(body: any): Response
    public static created(body: any = undefined, headers: any = undefined): Response {
        return new Response(201, body, headers)
    }

    public static IMUsed(): Response
    public static IMUsed(body: any): Response
    public static IMUsed(body: any = undefined, headers: any = undefined): Response {
        return new Response(229, body, headers)
    }

    public static multiStatus(): Response
    public static multiStatus(body: any): Response
    public static multiStatus(body: any = undefined, headers: any = undefined): Response {
        return new Response(207, body, headers)
    }

    public static noContent(): Response
    public static noContent(body: any): Response
    public static noContent(body: any = undefined, headers: any = undefined): Response {
        return new Response(204, body, headers)
    }

    public static nonAuthoritativeInfo(): Response
    public static nonAuthoritativeInfo(body: any): Response
    public static nonAuthoritativeInfo(body: any = undefined, headers: any = undefined): Response {
        return new Response(203, body, headers)
    }

    public static ok(): Response
    public static ok(body: any): Response
    public static ok(body: any = undefined, headers: any = undefined): Response {
        return new Response(200, body, headers)
    }

    public static partialContent(): Response
    public static partialContent(body: any): Response
    public static partialContent(body: any = undefined, headers: any = undefined): Response {
        return new Response(206, body, headers)
    }

    public static resetContent(): Response
    public static resetContent(body: any): Response
    public static resetContent(body: any = undefined, headers: any = undefined): Response {
        return new Response(205, body, headers)
    }
}