const connection = require('./connection')
const express = require("express");
const bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
})

app.post('/', function(req,res){
    var name = req.body.name;
    var contact = req.body.contact;
       
    var sql = "INSERT INTO loginuser(user_name,user_mob) VALUES(?,?)";
    connection.query(sql,[name, contact] , function(error, result){
        alert("Order Placed and Will deliver shortly !!!")
    })
})

app.listen(3000);