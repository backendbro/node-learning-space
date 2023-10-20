const http = require("http")

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-type":"application/json"
    })

    const userJson = JSON.stringify({
        user:{
            name:"John Doe",
            email:"johndoe@gmail.com",
            phone: "1234-2324-23244"
        }
    })

    response.write(userJson) 

    response.end()
})

const port = process.env.PORT || 8080
server.listen(PORT, () => {
    console.log(`PORT STARTED ON: localhost:${PORT}`)
})