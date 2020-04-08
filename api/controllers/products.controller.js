const ProductModel = require('../models/products.model')
const { handleError } = require('../utils')

module.exports = {
  getProducts,
  createProduct
}

function getProducts (req, res) {
  // const query = req.query.search
  ProductModel
    .find()
    // .find({ name: { $regex: query, $options: 'i' } })
    .then(products => res.json(products))
    .catch(err => handleError(err, res))
}

function createProduct (req, res) {
  ProductModel.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(403).json({ error: err })
    })
}
// function searchProductByCategory (req, res) {
//   const category = req.params.category
//   ProductModel
//     .find({ category: { $regex: category, $options: 'i' } })
//     .then(categoryResult => res.json({ category: categoryResult }))
//     .catch(err => handleError(err, res))
// }

// function searchProductBySubcategory (req, res) {
//   const category = req.params.category
//   const subcategory = req.params.subcategory
//   ProductModel
//     .find({ category: { $regex: category, $options: 'i' }, subcategory: { $regex: subcategory, $options: 'i' } })
//     .then(subcategoryResult => res.json(subcategoryResult))
//     .catch(err => handleError(err, res))
// }
