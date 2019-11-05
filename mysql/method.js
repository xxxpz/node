const connection = require("./index");

const getQuery = function() {
  var sql = "SELECT * FROM xxxpz";
  connection.query(sql, function(error, results, fields) {
    if (error) {
      throw error;
    }
    console.log("数据", results);
  });
};

const uploadQuery = function() {
  debugger;
};

const deleteQuery = function() {
  debugger;
};

const addQuery = function() {
  var sql = "INSERT INTO xxxpz(lijian,xxpz) VALUES(?,?)";
  var addSqlParams = ["322", "224"];
  connection.query(sql, addSqlParams, function(error, results, fields) {
    if (error) {
      throw error;
    }
    console.log("数据", results);
  });
};

module.exports = {
  getQuery,
  addQuery
};
