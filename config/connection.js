const mysql = require("mysql");
require("dotenv").config();
var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        PORT: 3306,
        user: "root",
        password: "blu3snak3",
        database: "burgers_db"
    });
};

connection.connect(function(err){
    if(err){
        console.log("error", err)
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;