const ProductModel = require('../models/products.model')
const { handleError } = require('../utils')

module.exports = {
  searchProductsByName,
  searchProductByCategory,
  searchProductBySubcategory
}

function searchProductsByName (req, res) {
  const query = req.query.search
  ProductModel
    .find({ name: { $regex: query, $options: 'i' } })
    .then(nameResult => res.json({ name: nameResult }))
    .catch(err => handleError(err, res))
}

function searchProductByCategory (req, res) {
  const category = req.params.category
  ProductModel
    .find({ category: { $regex: category, $options: 'i' } })
    .then(categoryResult => res.json({ category: categoryResult }))
    .catch(err => handleError(err, res))
}

function searchProductBySubcategory (req, res) {
  const category = req.params.category
  const subcategory = req.params.subcategory
  ProductModel
    .find({ category: { $regex: category, $options: 'i' }, subcategory: { $regex: subcategory, $options: 'i' } })
    .then(subcategoryResult => res.json(subcategoryResult))
    .catch(err => handleError(err, res))
}
