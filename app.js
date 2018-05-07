const express = require("express")
const app = express()
const queries = require("./queries")
const bodyParser = require("body-parser")
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

app.get('/information', (req, res) => {
    queries.list().then(info => {
        response.json({ info })
    }).catch(console.error)
})

module.exports = app