const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get("/", function(request, response) {
    response.send("Hello world")
})

app.listen(PORT, function() {
    console.log(`Server listening on http://localhost:${PORT}`)
})
