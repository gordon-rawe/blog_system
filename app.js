var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("welcome to our website");
});

app.listen(5555);