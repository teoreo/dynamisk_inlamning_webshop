const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    country: String {
        title: String,
        image: String,
        price: Number,
        description: String,
        quantity: Number,
        weeks: Number,
        date: { type: Date, default: Date.now }
    }

const schema = new mongoose.Schema({

  title: String,
  image: String,
  price: Number,
  description: String,
  quantity: Number,
  weeks: Number,
  country: { type: String, },
  date: { type: Date, default: Date.now }
});

const productItem = mongoose.model("product", schema);

module.exports = productItem;
