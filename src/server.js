require('dotenv').config({})

const express = require('express')
const routes = require('./routes')

require('./database')

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(routes)

const morgan = require('morgan')
app.use(morgan('dev'))

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})