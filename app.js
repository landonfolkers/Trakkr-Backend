require("dotenv").load()
const express = require("express")
const app = express()
const queries = require("./queries")
const morgan = require('morgan')
const bodyParser = require("body-parser")
const cors = require('cors')
const accountSid = 'AC6c7ed4c66b89eb6bc508d17fea90a322'
const client = require('twilio')(accountSid, process.env.AUTHTOKEN)

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/messages', (req, res) => {
    console.log(req.body)
    const options = {
        body: req.body.message,
        from: '+17122019171',
        to: req.body.numbers
    }
    client.messages.create(options, {
    }).then(message => console.log(message.sid))
        .done()
})

app.get('/information', (req, res) => {
    queries.list().then(info => {
        response.json({ info })
    }).catch(console.error)
})

module.exports = app