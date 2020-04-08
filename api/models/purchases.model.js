const mongoose = require('mongoose')

const detailSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

const purchaseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  details: {
    type: [detailSchema]
  },
  purchased_on: {
    type: Date,
    default: new Date()
  }
})

const purchaseModel = mongoose.model('purchase', purchaseSchema)
module.exports = purchaseModel
