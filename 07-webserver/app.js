const express = require('express')
const app = express()
const PORT = 8081

app.use(express.static('public2'))

app.get('/prueba', (req, res) => {
    res.send('Hello World')
})

app.get('*', (req, res) => {
    res.send('404 | Page not found')
})

app.listen(PORT)