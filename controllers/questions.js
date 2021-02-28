const Question = require("../models/Question")

module.exports = app => { 
    //ROUTES
    app.get("/",(req,res)=>{
       Question.findAll({raw: true}).then(questions => {
        res.render("index", {
            questions: questions
        })
       })
       
    })

    app.get("/perguntar",(req,res)=>{
        res.render("perguntar")
    })

    app.post("/saveQuestion", (req,res)=>{
        var titulo = req.body.title
        var question = req.body.question
        Question.create({
            titulo: titulo,
            question: question
        }).then(()=>{
            res.redirect("/")
        }).catch(()=>{
            res.redirect("/perguntar")
        })
    })
}