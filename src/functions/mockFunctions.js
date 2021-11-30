const url = require('url')
const fs = require('fs')
const { CONFIG } = require('../../config')

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

function manageResponse(req, res) {
    let counter = 0
    fs.readdirSync(CONFIG.JSON_RESPONSES_FOLDER).forEach(file => {
        let rawdata = fs.readFileSync(CONFIG.JSON_RESPONSES_FOLDER + '\\' + file)
        let data = JSON.parse(rawdata)
        if (!verifyRequest(req, data).includes(false)) {
            counter++
            res.statusCode = data.response.status !== undefined ? data.response.status : 200
            res.send(data.response.jsonBody)
        }
    })
    if (counter === 0) {
        let obj = {
            urlPath: req.url,
            headers: req.headers,
            jsonBody: req.body
        }
        console.log(obj)
        res.send({
            message: "No match found..."
        })
    }
}

module.exports = {
    manageResponse
}