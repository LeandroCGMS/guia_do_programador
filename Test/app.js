var http = require('http');

http.createServer(function(req, res) {
    res.end("Olah vindo do servidor.");
}).listen(8081);

console.log('O servidor está rodando.');