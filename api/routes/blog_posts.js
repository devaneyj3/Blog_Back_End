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
    await model.postData("blog_post", req);

    const post = await model.getAllFields("blog_post");
    console.log(post);
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
route.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { title, body, created_at } = req.body;
    const obj = {
        title: title,
        body: body,
        created_at: created_at,
    };
    const post = await model.updateData("blog_post", obj, id);
    try {
        if (post) {
            res.status(200).send(req.body);
        } else {
            helper.notFound(res);
        }
    } catch {
        helper.dbError(res);
    }
});
route.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const post = await model.deleteData("blog_post", id);
    try {
        if (post) {
            res.status(200).send(id);
        } else {
            helper.notFound(res);
        }
    } catch {
        helper.dbError(res);
    }
});
module.exports = route;
