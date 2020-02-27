const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  course: String,
  title: String,
  image: String,
  price: Number,
  description: String,
  quantity: Number,
  weeks: Number
});

const productItem = mongoose.model("product", schema);

module.exports = productItem;
