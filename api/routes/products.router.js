const router = require('express').Router()

const {
  searchProductsByCategories
} = require('../controllers/products.controller')

router.post('/', searchProductsByCategories)

module.exports = router
