// const describe = require("mocha").describe;
// const request = require("supertest");

// Admin Logic \\

// describe("reach and post to /admin/welcome", () => {
//     let adminRouter;

//     beforeEach(() => {
//         adminRouter = require("../router/adminRouter");
//     });

//     it("should reach /admin/welcome", (done) => {
//         request(adminRouter)
//         .get("/admin/welcome")
//         .expect(200)
//         .end((err) => {
//             if (err) return done(err);
//             done();
//         });
//     });
// });