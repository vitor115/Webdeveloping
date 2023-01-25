const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items = [
        { 
            title: "P",
            message: "ositivamente"
        },
        { 
            title: "A",
            message: "trasando"
        },
        { 
            title: "Z",
            message: "oologicos"
        },
    ]
    const subtitle = "Esse é um site teste para testar as funcionalidades do EJS"
    res.render("pages/index", {
        qualitites: items,
        subtitle: subtitle
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("rodando")