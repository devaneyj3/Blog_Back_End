const express = require("express");

const route = express.Router();
const model = require("../model");
const helper = require("../helper");

route.get("/", async (req, res) => {
    try {
        const response = await model.getAllFields("blog_post");
        if (response) {
            res.status(200).send(response);
        } else {
            helper.notFound(res);
        }
    } catch {
        helper.dbError(res);
    }
});

module.exports = route;
