const request = require("supertest");

const server = require("../app.js");

describe("blog_post.js", () => {
    describe("GET /", () => {
        it("should return a 404 status code for no data", async () => {
            const response = await request(server).get("/api/post/");
            expect(response.status).toEqual(404);
        });
    });
});
