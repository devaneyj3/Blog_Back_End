var express = require("express");
var logger = require("morgan");

const postRoute = require("./api/routes/blog_posts");

var app = express();

app.use("api/post", postRoute);

app.use(logger("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("API is ready");
});

module.exports = app;
