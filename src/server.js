require('dotenv').config({})

const express = require('express')
require('express-async-errors')

const routes = require('./routes')

require('./database')

const app = express()

app.use(express.json())
app.use('/', routes)

app.use(require('./config/errorHandler'))

const morgan = require('morgan')
app.use(morgan('dev'))

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`)
})