const router = require('express').Router()

const {
  searchProductsByName,
  searchProductByCategory,
  searchProductBySubcategory
} = require('../controllers/products.controller')

router.get('/', searchProductsByName)
router.get('/:category', searchProductByCategory)
router.get('/:category/:subcategory', searchProductBySubcategory)

module.exports = router
