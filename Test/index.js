const express = require('express');
const app = express();
const handlebars = require('express-handlebars');


// Config
    // Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Conexão com o banco de dados MySQL
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'usuario1', '12345678', {
    host: "localhost",
    dialect: 'mysql'
});

// Rotas
app.get('/cad', function(req, res){
    res.render('formulario');
})

app.post('/add', function(req, res){
    res.send('FORMULÁRIO RECEBIDO.');
})


app.listen(80, function() {
    console.log("Servidor Rodando na url http://localhost.");
});