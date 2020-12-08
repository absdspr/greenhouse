const express = require('express')
const app = express()
const morgan = require('morgan')
const indexRouter = require('./routes/index')

app.use(express.json())
app.use(morgan('dev'))

app.use(indexRouter)

app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({"message: ": err.message})
});
module.exports = app