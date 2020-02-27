const express = require("express");

const app = express();

const port = process.env.PORT || 2000;

const productItem = require("../model/product");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

module.exports = { app, port, express };
