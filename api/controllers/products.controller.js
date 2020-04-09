const ProductModel = require('../models/products.model')
const { handleError } = require('../utils')

module.exports = {
  getProducts,
  createProduct
}

function getProducts (req, res) {
  // const query = {}
  // if ( req.query.search ) query.name = req.query.name

  const query = req.query.search
  if (query === undefined) {
    ProductModel
      .find()
      .then(products => res.json(products))
      .catch(err => handleError(err, res))
  } else {
    ProductModel
      .find({ $or: [{ category: { $regex: query, $options: 'i' } }, { name: { $regex: query, $options: 'i' } }] })
      .then(products => res.json(products))
      .catch(err => handleError(err, res))
  }
}

function createProduct (req, res) {
  ProductModel.create(req.body)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(403).json({ error: err })
    })
}
