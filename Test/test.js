const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'usuario1', '12345678', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso.");
}).catch(function(erro){
    console.log("Falha ao conectar. Erro: " + erro);
});