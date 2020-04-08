const router = require('express').Router()

const {
  addPurchase
  // createProduct
} = require('../controllers/purchases.controller')

router.post('/', addPurchase)
// router.post('/', createProduct)

module.exports = router
