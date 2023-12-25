var connection = require('./connection')
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res){
    res.sendFile(__dirname+'/edit-or-cancel.html');
})

// app.post('/', function(req,res){
//     var contact = req.body.contact;
// connection.connect(function(err) {
//     var sql = "SELECT * FROM loginuser WHERE user_mob values ('"+contact+"')'";
//     connection.query(sql, function(error, result){
//         if (error) throw error;
//         console.log(result);
//      });
//   });
// });
app.post('/',function(req,res){
    var name = req.body.name;
var contact = req.body.contact;
connection.query(`select * from loginuser where (user_name, user_mob) = (?,?)`, [name,contact], (err,res)=>{
    return console.log(res);
});
});

app.listen(5000);