const PurchaseModel = require('../models/purchases.model')
const { handleError } = require('../utils')

module.exports = {
  addPurchase
}

function addPurchase (req, res) {
  const purchase = req.body
  PurchaseModel
    .create(purchase)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}
