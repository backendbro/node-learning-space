const express = require('express')
const app = express()

app.get('/someUri', function (req,res) {
    res.send("Hello world")
})

app.use("/foo*", function (req,res) {
    res.send("Hello!, I am not the blidee")
})

const port = process.env.PORT || 8000 
const server = app.listen(port, () => {
    console.log(`port started on the localhost:${port}`)
})
