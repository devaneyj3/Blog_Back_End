var express = require("express");
var logger = require("morgan");
require("dotenv").config();

var app = express();

app.use(logger("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("API is ready");
});

module.exports = app;
