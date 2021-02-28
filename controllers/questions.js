const Question = require("../models/Question")
const Answer = require("../models/Answer")

module.exports = app => { 
    //ROUTES
    app.get("/",(req,res)=>{
       Question.findAll({raw: true, order: [['id','desc']]}).then(questions => {
        res.render("index", {
            questions: questions
        })
       })
       
    })

    app.get("/perguntar",(req,res)=>{
        res.render("perguntar")
    })

    app.get("/pergunta/:id",(req,res)=>{
        var id = req.params.id
        Question.findOne({
            where: {id: id}
        }).then(question=>{
            if(question != undefined){
                Answer.findAll({
                    where: {idQuestion: question.id},
                    order: [['id','DESC']]
                }).then(answers =>{
                    res.render("pergunta.ejs",{
                        question: question, 
                        answers: answers
                    })
                })   
            }else{
                res.redirect("/")
            }
        })
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

    app.post("/saveAnswer", (req,res)=>{
        var body = req.body.body
        var idQuestion = req.body.idQuestion
        if(body != ""){
            Answer.create({
                body: body,
                idQuestion: idQuestion
            }).then(()=>{
                res.redirect("/pergunta/"+idQuestion)
            }).catch(()=>{
                res.redirect("/pergunta/"+idQuestion)
            })
        }
    })
}