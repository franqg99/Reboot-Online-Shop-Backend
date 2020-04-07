const router = require('express').Router()

const {
  searchProductsByCategories
} = require('../controllers/products.controller')

router.get('/', searchProductsByCategories)

module.exports = router
