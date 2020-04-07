const ProductModel = require('../models/products.model')
const { handleError } = require('../utils')

module.exports = {
  searchProductsByCategories
}

function searchProductsByCategories (req, res) {
  const category = req.body.category
  ProductModel
    .find({ category: category })
    .then(product => res.json(product))
    .catch(err => handleError(err, res))
}
