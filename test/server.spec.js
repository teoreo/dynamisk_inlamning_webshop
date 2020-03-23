const describe = require("mocha").describe;
const request = require("supertest");

// Customer Logic \\

describe("should test if ecommerce logic works", () => {
    let customerRouter;

    beforeEach(() => {
        customerRouter = require("../router/customerRouter");
    });

    it("should reach main page /", (done) => {
        request(customerRouter)
        .get("/")
        .expect(200, done)
    })
});

// describe("reach and post to /checkout", () => {
//     let customerRouter;

//     beforeEach(() => {
//         customerRouter = require("../router/customerRouter");
//     });

//     let userData = {
//         fname: "Sara",
//         lname: "Andersson",
//         address: "Random address somewhere",
//         zipcode: "123 56",
//         city: "Stockholm",
//         cardno: "274979845297549",
//         ddmm: "0104",
//         cvc: "722"
//     }

//     it("POST /checkout", (done) => {
//         request(customerRouter)
//         .post("/checkout")
//         .type("form")
//         .send(userData)
//         .set("Accept", /application\/json/)
//         .expect(201)
//         .end((err) => {
//             if (err) return done(err);
//             done();
//         });
//     });
// });


// Admin Logic \\

describe("reach and post to /admin/welcome", () => {
    let adminRouter;

    beforeEach(() => {
        adminRouter = require("../router/adminRouter");
    });

    it("should reach /admin/welcome", (done) => {
        request(adminRouter)
        .get("/admin/welcome")
        .expect(200)
        .end((err) => {
            if (err) return done(err);
            done();
        });
    });
});