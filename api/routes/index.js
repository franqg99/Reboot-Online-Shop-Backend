const router = require('express').Router()

const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const { authUser } = require('../utils') // Authenticated Route
const productsRouter = require('./products.router')
const purchasesRouter = require('./purchases.router')

router.use('/auth', authRouter)
router.use('/users', authUser, usersRouter)
router.use('/products', productsRouter)
router.use('/purchases', authUser, purchasesRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
