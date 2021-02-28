const customExpress = require('./config/customExpress')
const connection = require("./database/dataBase")
const Question = require("./models/Question")

const app = customExpress()

//DataBase
connection.authenticate().then(()=>{
    console.log("Connected")
}).catch((error)=>{
    console.log(error)
})

app.listen(8080,()=>{
    console.log("Servidor Iniciado!!")
})