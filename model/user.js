const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstname: String,
    lastname: String,
    address: String,
    zipcode: Number,
    city: String,
})

const User = mongoose.model("User", schema)

module.exports = User;
