const express = require("express")
const app = express()

// Define o express para usar o EJS como View Engine
app.set('view engine', 'ejs')
app.use(express.static('assets'))

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/perguntar",(req,res)=>{
    res.render("perguntar")
})


app.listen(8080,()=>{
    console.log("Servidor Iniciado!!")
})