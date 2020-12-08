const express = require('express')
const app = express()
const morgan = require('morgan')
const indexRouter = require('./routes/index')

app.use(express.json())
app.use(morgan('dev'))

app.use(indexRouter)

module.exports = app