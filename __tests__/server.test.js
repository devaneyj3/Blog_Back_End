const request = require("supertest");

const server = require("../app.js");

describe("server.js", () => {
    describe("home route", () => {
        it("should return a 200 status code", async () => {
            const response = await request(server).get("/");
            expect(response.status).toEqual(200);
        });
    });
});
