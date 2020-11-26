const request = require("supertest");

const server = require("../app.js");
const model = require("../api/model");

describe("blog_post.js", () => {
    const data = {
        id: 1,
        title: "Hello",
        body: "test",
        created_at: "2017",
    };
    describe("POST /api/post", () => {
        it("should return a 201 created", async () => {
            const response = await request(server).post("/api/post").send(data);
            expect(response.status).toEqual(201);
            expect(response.type).toEqual("application/json");
        });
    });
    describe("GET /api/post", () => {
        it("should return a 200 with data", async () => {
            await request(server).post("/api/post").send(data);
            const response = await request(server).get("/api/post/");
            expect(response.status).toEqual(200);
            expect(response.body).toHaveLength(1);
            expect(response.type).toEqual("application/json");
        });
    });
    describe("GET /api/post/id", () => {
        it("should return a 200 with data", async () => {
            await request(server).post("/api/post").send(data);
            const response = await request(server).get("/api/post/1");
            expect(response.status).toEqual(200);
            expect(response.body).toHaveLength(1);
            expect(response.type).toEqual("application/json");
        });
    });
    describe("PUT /api/post/id", () => {
        it("should return a 200 OK to update data", async () => {
            await request(server).post("/api/post").send(data);
            const response = await request(server)
                .put("/api/post/1")
                .send({ title: "Goodbye", body: "test1", created_at: "2018" });
            expect(response.status).toEqual(200);
            expect(response.type).toEqual("application/json");
        });
    });
    beforeEach(async () => {
        await model.clearDB("blog_post");
    });
});
