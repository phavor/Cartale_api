const express = require('express')
const bodyParser = require('body-parser')

const defaultRoute = require('./Routes/default')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// use routes
app.use('/', defaultRoute)

app.listen(port, () => console.log(`App is running on port ${port}`))