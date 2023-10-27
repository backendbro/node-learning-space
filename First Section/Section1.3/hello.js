const express = require("express")

const app = express()

const port = process.env.PORT || 3000 

app.get("/", function(request, response){
    response.send("Hello world")
})

const server = app.listen(port, () => {
    console.log(`port started on localhost:${port}`)
})