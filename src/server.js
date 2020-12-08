require('dotenv').config()
const app = require('./app')

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening at 0.0.0.0:${port}`))