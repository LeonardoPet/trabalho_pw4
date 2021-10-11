const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post')
var i18n = require("i18n");

i18n.configure({
    directory: "./locais.js",
    extension: ".js",
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en", "de"],
    cookie: "lang"
})

app.use(i18n.init);
app.use( (req,res,next)=>{
    console.log(`Idiomas suportados: ${req.acceptsLanguages()}`)
    next();
});

app.get("/", function(req,res){
    
})
//config
    //template engine
    app.engine('handlebars', handlebars({defaultLayout:'main'}))
    app.set('view engine', 'handlebars')
    //body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())



// rota para página Home
app.get('/', function(req,res) {
    Post.findAll().then(function(posts){
        //console.log(posts)
        res.render('home', {posts: posts})
    })   
})

// rota para criar um carro
app.get('/cadastro', function(req,res) {
    res.render('formulario')
})

// Adicionar um carro
app.post('/add', function(req,res) {
   Post.create({
       nome:req.body.nome,
       cor: req.body.cor
   }).then(function(){
       res.redirect('/')
   }).catch(function(erro){
       res.send("Houve um erro: " + erro)
   })
})

// deletar um carro

app.get('/deletar/:id', function(req,res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send('Carro deletado com sucesso')
    }).catch(function(erro){
        res.send("carro não existe")
    })
})

// Conectado na porta 8081
app.listen(80, function(){
    console.log("Bem vindo");
});

