const express = require('express')
const { CONFIG } = require('./config')
const app = express()
const cors = require('cors')
const actions = require("./src/routes/actions")
const mocks = require("./src/routes/mocks")

const serverPort = CONFIG.SERVER_PORT
const serverUrl = `http://${CONFIG.SERVER_IP}:${CONFIG.SERVER_PORT}`

const options = {
  inflate: true,
  limit: 20480000
}

app.use(express.json(options))
app.use(cors())

app.use("/", actions)

app.use("/api", mocks)

app.listen(serverPort, () => {
  console.log(`Started server on ${serverUrl}...`)
})

