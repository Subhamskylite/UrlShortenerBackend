const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 5000 ;
const connectToDatabase = require('./database/connection')
connectToDatabase()
const REACT_APP_BASE_URL="http://localhost:3000" ;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.redirect({REACT_APP_BASE_URL})
})

app.use('/short', require('./routes/shortUrl'))
app.use('/', require('./routes/visitUrl'))

app.listen(port, () => {
    console.log(`URL Shortner listening on http://localhost:${port}`)
})