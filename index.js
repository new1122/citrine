var connection = require('./connection')
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.post('/', function(req,res){
    var name = req.body.name;
    var contact = req.body.contact;
    var email = req.body.email;
    var adress = req.body.adress;
    var pincode = req.body.pincode;
    var dataoforder = req.body.dataoforder;
       

    connection.connect(function(error){
      //  if (error) console.log("error")
       
    
    var sql = "INSERT INTO loginuser(user_name,user_mob,user_email,user_adress,user_pincode, user_dataoforder) VALUES(?,?,?,?,?,?)";
    connection.query(sql,[name, contact,email,adress,pincode,dataoforder] , function(error, result){
        if (error) console.log("error")
        res.send('Order Placed !!! Kindly check your email id on : ' + email)
    });
});
});

app.listen(3000);