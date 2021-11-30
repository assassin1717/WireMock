const express = require('express')
const { manageResponse } = require('../functions/mockFunctions')
const router = express.Router()

router
    .route('/*')
    .get((req, res) => {
        manageResponse(req, res)
    })
    .post((req, res) => {
        manageResponse(req, res)
    })
    .patch((req, res) => {
        manageResponse(req, res)
    })
    .put((req, res) => {
        manageResponse(req, res)
    })
    .delete((req, res) => {
        manageResponse(req, res)
    })

module.exports = router