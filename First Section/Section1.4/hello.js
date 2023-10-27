const http = require("http")

const routes = {
    "/":function index (request, response) {
        response.writeHead(200)
        response.end("You are viewing the index page")

    },
    "/foo" : function foo (request, response) {
        response.writeHead(200)
        response.end("You are viewing foo")
    }
}



const server = http.createServer(function (request, response) {
    if (request.url in routes) {
        return routes[request.url](request, response)
    }

  
    response.writeHead(404)
    response.end(http.STATUS_CODES[404])
})

const port = process.env.PORT || 8080
server.listen(port, () => {
    console.log(`Server listening on: localhost${port}`)
})

