const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post')
// Config
    // Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
// Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Rotas
app.get('/cad', function(req, res){
    res.render('formulario');
})

app.get('/', function(req, res) {
    Post.all({order: [['id', 'DESC']]}).then(function(posts){
        console.log(posts)
        res.render('home', {posts: posts})
    })
})

app.get('/css/main.css', function(req, res){
    res.sendFile(__dirname + "/views/layouts/css/main.css");
})

app.post('/add', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function() {
        res.redirect('/')
    }).catch(function(erro) {
        res.send("Falha ao cirar Post. Erro: " + erro)
    })
})


app.listen(80, function() {
    console.log("Servidor Rodando na url http://localhost.");
});