const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "remotemysql.com",
  user: "wPhckpQKIj",
  password: "Bs9qCztzDr",
  database: "wPhckpQKIj"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
