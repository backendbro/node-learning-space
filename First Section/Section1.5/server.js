'use strict';
const tls = require('tls');
const fs = require('fs');

const PORT = 1337;
const HOST = '127.0.0.1'

const options = {
 key: fs.readFileSync('private-key.pem'),
 cert: fs.readFileSync('public-cert.pem')
};

const server = tls.createServer(options, function(socket) {
    socket.write("I am the server sending you a message.");
    socket.on('data', function(data) {
        
    console.log('Received: %s [it is %d bytes long]',
    data.toString().replace(/(\n)/gm,""),
    data.length);
    });
 
    socket.on('end', function() {
    console.log('EOT (End Of Transmission)');
    });
});


server.listen(PORT, HOST, function() {
 console.log("I'm listening at %s, on port %s", HOST, PORT);
});

server.on('error', function(error) {
 console.error(error);
 server.destroy();
});
