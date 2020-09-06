var mysql = require("mysql");
var con;
if (process.env.MJX) {
    con = mysql.createConnection(process.env.MJX);
} else {
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