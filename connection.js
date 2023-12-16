const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "82.180.142.51",
    user: "u360049388_CitrineDB",
    password: "Citrine123@",
    database: "u360049388_CitrineDB"
});

// const connection = mysql.createConnection({
//         host: "127.0.0.1",
//         user: "root",
//         password: "Abhi123@",
//         database: "loginuser"
//     });

connection.connect(function(error){
    if (error) console.log("error")
    else console.log("connnected")
})

module.exports = connection;