const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  brand: String,
  stock: Number,
  image: String,
});

module.exports = mongoose.model('Product', productSchema);
