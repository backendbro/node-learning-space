const express = require("express")
const greetMiddleware = require('./greet/greet')

class GreetingService {
    constructor (greeting = "Hello") {
        this.greeting = greeting 
    }

    createGreeting(name) {
        return `${this.greeting}, ${name}`
    }
}


express().use('/api/v1/service',  greetMiddleware({
    service: new GreetingService('Hello')
}))
.use('/api/v1/name', function (req, res) {
    res.send("Hello world")
})
.listen (3000)