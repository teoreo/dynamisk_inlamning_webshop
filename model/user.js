const mongoose = require("mongoose");

const usSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    address: String,
    zipcode: Number,
    city: String
});

const userSchema = mongoose.model("product", usSchema)

module.exports = userSchema;