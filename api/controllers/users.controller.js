const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  getUserById,
  deleteUserById,
  updateUserById,
  addProductById,
  getAllBoughtProducts
}

function getUserById (req, res) {
  UserModel
    .findById(req.params.userId)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUserById (req, res) {
  UserModel
    .remove({ _id: req.params.userId })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateUserById (req, res) {
  UserModel
    .findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function addProductById (req, res) {
  const userId = req.params.userId
  const productId = req.params.productId
  UserModel
    .findById(userId)
    .then(user => {
      user.user_cart.push(productId)
      user.save()
        .then(user => res.json(user))
        .catch(err => handleError(err, res))
    })
    .catch(err => handleError(err, res))
}

function getAllBoughtProducts (req, res) {
  UserModel
    .find()
    .then(user => res.json(user.user_cart))
    .catch(err => console.log(err))
}
