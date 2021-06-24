const Sequelize = require('sequelize');

const sequelize = new Sequelize('internship', 'root', 'user@12', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;