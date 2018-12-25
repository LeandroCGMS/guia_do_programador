const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
// Config
    // Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
// Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
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
    res.send('Título:' + req.body.titulo + "; Conteúdo: " + req.body.conteudo);
})


app.listen(80, function() {
    console.log("Servidor Rodando na url http://localhost.");
});