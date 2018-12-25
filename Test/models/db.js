const Sequelize = require('sequelize');
// Conexão com o banco de dados MySQL
const sequelize = new Sequelize('postapp', 'usuario1', '12345678', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}