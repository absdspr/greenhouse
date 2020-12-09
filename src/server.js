require('dotenv').config()
require('./services/mqtt').config()
const app = require('./app')
const mongoose = require('mongoose')

const port = process.env.PORT || 3000


mongoose.connect(process.env.MONGO_URL, 
    { useNewUrlParser: true, 
        useUnifiedTopology: true})
        .then(() => console.log(`Connected to mongodb at ${process.env.MONGO_URL}`))
        .catch(err => {
            console.log(`Could not connect to mongo db`)
            process.exit(1)
        })
app.listen(port, () => console.log(`Listening at 0.0.0.0:${port}`))