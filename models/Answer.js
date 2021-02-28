const Sequelize = require("sequelize")
const connection = require("../database/dataBase")

const Answer = connection.define('answers',{
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    idQuestion: {
        type: Sequelize.INTEGER,
        allowNull: false 
    }
})

Answer.sync({force:false}).then(()=>{})

module.exports = Answer