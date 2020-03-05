const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },
    firstname: String,
    lastname: String,
    address: String,
    zipcode: Number,
    city: String,
    isAdmin: Boolean

})

const userAccount = mongoose.model("userAccount", schema)

module.exports = userAccount;
