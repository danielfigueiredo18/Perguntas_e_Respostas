const express = require("express")
const bodyParser = require("body-parser")
const consign = require('consign')

module.exports = ()=>{
    const app = express()
    // Define o express para usar o EJS como View Engine
    app.set('view engine', 'ejs')

    app.use(express.static('assets'))
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
    consign().include('controllers').into(app)
    return app
}