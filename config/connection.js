var mysql = require("mysql");
var dotenv = require('dotenv'); 
dotenv.config();
var con;
if (process.env.JAWSDB_URL) {
    console.log('--from env----------------');
    con = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    console.log('----------connecting local---------------');
    con = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgerdb"
    });
};

con.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected:  " + con.threadId);
});

module.exports = con;