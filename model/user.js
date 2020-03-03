const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    email: String,
    password: String
})

const userInfo = mongoose.model("userInfo", schema)

module.exports = userInfo;
