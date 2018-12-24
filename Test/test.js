const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'usuario1', '12345678', {
    host: "localhost",
    dialect: 'mysql'
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

/*
Postagem.create({
    titulo: "UM TÍTULO QUALQUER",
    conteudo: "UM CONTEÚDO QUALQUER"
})
*/

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Victor",
    sobrenome: "Lima",
    idade: 20,
    email: "blablabla@mail.com"
})

//Postagem.sync({force: true})
//Usuario.sync({force: true})

/*
sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso.");
}).catch(function(erro){
    console.log("Falha ao conectar. Erro: " + erro);
});
*/