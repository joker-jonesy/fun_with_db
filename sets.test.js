const request = require("supertest");
const app = require("./index");

describe("API Endpoint for Grabbing All Sets", ()=>{
    it("Return sets from DB", async ()=>{
        const res =await request(app).get("/api/sets");
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true)
    })
})

describe("API Endpoint for Grabbing All Sets", ()=>{
    it("Return sets from DB", async ()=>{
        const res =await request(app).get("/api/dogs");
        expect(res.statusCode).not.toEqual(200);
    })
})