const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: String,
  course: String,
  title: String,
  image: String,
  price: Number,
  description: String,
  quantity: Number,
  weeks: Number,
  country: String
});

const productItem = mongoose.model("product", schema);

module.exports = productItem;
