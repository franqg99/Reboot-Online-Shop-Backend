const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String
  },
  cateogry: {
    type: String
  },
  sub_category: {
    type: String
  },
  img: {
    type: String
  },
  price: {
    type: Number
  },
  size: {
    type: String
  },
  description: {
    type: String
  }
})

const productModel = mongoose.model('product', productSchema)
module.exports = productModel
