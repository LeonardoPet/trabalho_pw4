const db = require('./db')

const Post = db.sequelize.define('carros',{
  
        nome: {
            type: db.Sequelize.STRING,
            allowNull: false   
            },
        cor: {
            type: db.Sequelize.STRING,
            allowNull: false
        }

})
module.exports = Post;
//Post.sync({force: true})