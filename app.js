const express = require("express");
const path = require("path");
const indexRouter = require("./route/index");
const connection = require("./mysql/index");

const app = express();

// 允许跨域访问该服务器
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use("/", indexRouter);

module.exports = app;
