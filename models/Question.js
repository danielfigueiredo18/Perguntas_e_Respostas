const Sequelize = require("sequelize")
const connection = require("../database/dataBase")

const Question = connection.define('question',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    question:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Question.sync({force: false}).then(()=>{})

module.exports = Question