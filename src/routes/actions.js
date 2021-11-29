const express = require('express')
let router = express.Router()

router
    .route('/health_check')
    .get(async (req, res) => {
        res.send({
            status: "WireNode alive!"
        })
    })

module.exports = router