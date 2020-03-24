const describe = require("mocha").describe;
const mongoose = require("mongoose");
const request = require("supertest");
const databaseURL = require("../config/config").databaseURL
const {router, userVIEW, userROUTE }  = require("../router/customerRouter")

// Customer Logic \\

describe("should test if ecommerce logic works", () => {
    let server; 

    before( (done) => {
        mongoose.connect(databaseURL, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
            server = router.listen(8081, () => console.log(`App testing on 8081!`));
            done();
        }); 
    })

    it("should reach main page /", (done) => {
        request(server)
        .get(userROUTE.main)
        .expect(200, done)
    })

    after( (done) => {
        server.close()
        mongoose.disconnect()
        console.log("Finished testing, server is closed")
        done();
    });
});

// describe("reach and post to /checkout", () => {
//     let customerRouter;

//     beforeEach(() => {
//         customerRouter = require("../router/customerRouter");
//     });

//     let userData = ({
//         fname: "Sara",
//         lname: "Andersson",
//         address: "Random address somewhere",
//         zipcode: "123 56",
//         city: "Stockholm",
//         cardno: "274979845297549",
//         ddmm: "0104",
//         cvc: "722"
//     });

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

