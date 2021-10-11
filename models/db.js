const Sequelize = require("sequelize");
//conexão com o Mysql
const sequelize = new Sequelize('trabalho_pw4', 'root','',{
    host:'localhost',
    dialect:'mysql',
    query:{raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}