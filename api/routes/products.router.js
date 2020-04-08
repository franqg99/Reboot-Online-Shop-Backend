const router = require('express').Router()

const {
  getProducts,
  createProduct
} = require('../controllers/products.controller')

router.get('/', getProducts)
router.post('/', createProduct)

module.exports = router
