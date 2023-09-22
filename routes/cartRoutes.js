const express = require('express');
const {
  getAllCarts,
  addItemToCart,
  updateCart,
  getCart,
  deleteCart
} = require('../controllers/cartController');

const router = express.Router();

router
  .route('/')
  .get(getAllCarts)
  .post(addItemToCart);

router
  .route('/id')
  .patch(updateCart)
  .get(getCart)
  .delete(deleteCart);

module.exports = router;
