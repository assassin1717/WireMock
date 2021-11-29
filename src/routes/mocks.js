const express = require('express')
const { CONFIG } = require('../../config')
const { verifyRequest } = require('../functions/mockFunctions')
const router = express.Router()
const fs = require('fs')

router
    .route('/*')
    .get((req, res) => {
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
            res.send({
                message: "No match found..."
            })
        }
    })

module.exports = router