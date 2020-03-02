const express = require("express");

const app = express();

const port = process.env.PORT || 2000;

const productItem = require("../model/product");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// get customer login
app.get("/login", async (req, res) => {
    res.render("login");
})

module.exports = { app, port, express };
