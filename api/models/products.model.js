const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L', 'XL']
  },
  description: {
    type: String,
    required: true
  }
})

const productModel = mongoose.model('product', productSchema)
module.exports = productModel
