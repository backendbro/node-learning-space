const express = require('express')
const app = express()

app.get('/ping', (req,res) => {
    res.send("pong")
})

const port = process.env.PORT || 3000 
const server = app.listen(port, 'localhost')