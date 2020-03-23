const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	// _id: String,
	title: String,
	image: String,
	price: Number,
	description: String,
	quantity: Number,
	weekone: Number,
	weektwo: Number,
	weekthree: Number,
	weekfour: Number,
	country: { type: String, },
	date: { type: Date, default: Date.now }
});

const productItem = mongoose.model("product", schema);

module.exports = productItem;
