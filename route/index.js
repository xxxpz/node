const express = require("express");
const router = express.Router();
const { getQuery, addQuery } = require("../mysql/method");

router.get("/", function(req, res, next) {
  res.send("xxxpz");
});

router.get("/user", function(req, res, next) {
  console.log("xxpz");
  getQuery();
  res.send("user");
});

router.get("/add", function(req, res, next) {
  addQuery();
  res.send("add");
});

module.exports = router;
