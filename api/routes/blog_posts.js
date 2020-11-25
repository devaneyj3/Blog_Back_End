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

route.get("/:id", async (req, res) => {
    try {
        const response = await model.getFieldById("blog_post", req.params.id);
        if (response) {
            res.status(200).send(response);
        } else {
            helper.notFound(res);
        }
    } catch {
        helper.dbError(res);
    }
});
route.post("/", async (req, res) => {
    const post = await model.postData("blog_post", req);
    try {
        if (post) {
            res.status(201).send(post);
        } else {
            helper.notFound(res);
        }
    } catch {
        helper.dbError(res);
    }
});

module.exports = route;
