const express = require('express')

module.exports = function (options = {}) {
    const router = express.Router() 

    const {service} = options 

    router.get("/greet", function (req,res){
        res.end (service.createGreeting(req.query.name || "Stranger"))
    })
    return router 
}