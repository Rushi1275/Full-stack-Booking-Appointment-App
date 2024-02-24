const Sequelize = require ('sequelize');

const sequelize =  new Sequelize('node-complete', 'root','Rushi@0717',{
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;
