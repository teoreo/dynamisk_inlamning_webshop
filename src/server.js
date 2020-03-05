const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const app = express();


const port = process.env.PORT || 2000;

const productItem = require("../model/product");

const user = require("../model/userAccount");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// customer signup
app.get("/customer/signup", async (req, res) => {
    res.render("customer/signup")
})
app.post("/signup", async (req, res) => {
    await new user({
        email: req.body.email, password: req.body.password
    })
        .save((error, success) => {
            if (error) {
                console.log(error);
                res.send(error._message)
            } else {
                res.redirect("/customer/login")
            }
        })
})
app.get("/customer/login", async (req, res) => {
    res.render("customer/login");
})

app.post("/customer/login", async (req, res) => {
})


module.exports = { app, port, express };
