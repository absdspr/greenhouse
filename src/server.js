require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')

const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})
app.listen(port, () => console.log(`Listening at 0.0.0.0:${port}`))