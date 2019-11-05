const config = require("../config/mysql");
const mysql = require("mysql");

var connection = mysql.createConnection(config.mysql);

connection.connect(function(err) {
  if (err) {
    console.error("err connecting: " + err.stack);
    return;
  }
  console.log("连接成功");
});

module.exports = connection;
