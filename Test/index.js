const express = require('express');
const app = express();
var titulo = "Bem Vindo ao Nosso Site";
codigoBasico = "<!DOCTYPE html>" +
"<html lang='pt-br'>" +
"<head>" +
    "<meta charset='UTF-8'>" + 
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" +
    "<title>" + titulo + "</title>" +
    "<script type='text/javascript' src=''></script>" +
    "<script type='text/javascript' src='js/cpf.js'></script>" +
"</head>" +
"<body>" +
    "<h1>Seja Bem Vindo ao Meu App.</h1>" +
"</body>" +
"</html>";

app.get('/', function(req, res){
    res.send(codigoBasico);
});

app.get("/sobre", function(req, res){
    res.send("<title>Sobre O Site</title><h1>Informações Sobre O Nosso Site</h1>");
});

app.get("/blog", function(req, res) {
    res.send("<title>Bem Vindo ao Nosso Blog</title><h1>Bem Vindo ao Nosso Blog</h1>");
});

app.get('/ola/:cargo/:nome/:cor', function(req, res){
    var parametros = req.params;
    res.send("<h1>Olá " + parametros.nome + ", seu cargo atual é: " + parametros.cargo +
    " e sua cor preferida é: " + parametros.cor + ".</h1>");
});

app.listen(80, function() {
    console.log("Servidor Rodando na url http://localhost:8081.");
});