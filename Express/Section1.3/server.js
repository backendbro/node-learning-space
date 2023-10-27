const express = require('express')
const app = express()
const doSomething = require('./doSomething/doSomething')

app.get('/someUrl', doSomething.doSomething)

const port = process.env.PORT || 3000 
const server = app.listen (port, () => {
    console.log(`port started on localhost:${port}`)
})