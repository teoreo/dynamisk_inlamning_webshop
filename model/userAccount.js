const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstname: String,
    lastname: String,
    address: String,
    zipcode: Number,
    city: String,
    isAdmin: Boolean

})

const user = mongoose.model("user", schema)

module.exports = user;
