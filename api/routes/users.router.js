const router = require('express').Router()

const {
  getUserById,
  deleteUserById,
  updateUserById,
  addProductById,
  getAllBoughtProducts
} = require('../controllers/users.controller')

router.get('/:userId', getUserById)
router.delete('/:userId', deleteUserById)
router.put('/:userId', updateUserById)
router.post('/:userId/products/:productId', addProductById)
router.get('/', getAllBoughtProducts)

module.exports = router
