const express = require("express")
const app = express()
const queries = require("./queries")
const bodyParser = require("body-parser")
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

module.exports = app