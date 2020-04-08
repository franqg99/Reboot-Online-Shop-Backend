const router = require('express').Router()

const {
  addPurchase
} = require('../controllers/purchases.controller')

// TODO: crear ruta pra ver todas las purchases
// TODO: ver purchase por Id
router.post('/', addPurchase)

module.exports = router
