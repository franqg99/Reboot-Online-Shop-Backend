const ProductModel = require('../models/products.model')
const { handleError } = require('../utils')

module.exports = {
  searchProductsByCategories
}

function searchProductsByCategories (req, res) {
  const query = req.query.search
  ProductModel
    .find({ category: { $regex: query, $options: 'i' } })
    .then(categoryResult => {
      ProductModel
        .find({ subcategory: { $regex: query } })
        .then(subcategoryResult => {
          ProductModel
            .find({ name: { $regex: query } })
            .then(nameResult => res.json({
              category: categoryResult,
              subcategory: subcategoryResult,
              name: nameResult
            }))
        })
    })
    .catch(err => handleError(err, res))
}
