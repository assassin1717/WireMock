const url = require('url')

function verifyUrl(reqUrl, fileData) {
    if (fileData.request.urlPath === reqUrl) {
        return true
    }
    return false
}

function verifyMethod(reqMethod, fileData) {
    if (fileData.request.method !== undefined) {
        if (fileData.request.method === reqMethod) {
            return true
        }
        return false
    }
    return true
}

function verifyQueryParams(reqQueryParams, fileData) {
    if (fileData.request.queryParams !== undefined) {
        let paramSize = Object.keys(reqQueryParams).length
        let count = 0

        Object.keys(reqQueryParams).forEach(item => {
            if (fileData.request.queryParams[item] === reqQueryParams[item]) {
                count++
            }
        })
        return paramSize === count ? true : false
    }
    return true
}

function verifyRequest(req, data) {
    let urlQuery = url.parse(req.url, true)
    let verifications = []

    verifications.push(verifyUrl(urlQuery.pathname, data))
    verifications.push(verifyMethod(req.method, data))
    verifications.push(verifyQueryParams(urlQuery.query, data))
    return verifications
}

module.exports = {
    verifyRequest
}