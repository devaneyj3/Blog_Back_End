var express = require("express");
var logger = require("morgan");
let cors = require("cors");
let helmet = require("helmet");
const postRoute = require("./api/routes/blog_posts");

var app = express();
app.use(helmet());
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use("/api/post", postRoute);

app.get("/", (req, res) => {
    res.status(200).send("API is ready");
});

module.exports = app;
