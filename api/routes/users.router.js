const router = require('express').Router()

const {
  getUserById,
  deleteUserById,
  updateUserById
} = require('../controllers/users.controller')

router.get('/:userId', getUserById)
router.delete('/:userId', deleteUserById)
router.put('/:userId', updateUserById)

module.exports = router
