const express = require('express');
const {
  getAllCarts,
  addItemToCart,
  updateCart,
  getCart,
  deleteCart,
  getMyCart
} = require('../controllers/cartController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router.route('/myCart').get(getMyCart);

router.use(protect);

router
  .route('/')
  .get(restrictTo('admin', 'user'), getAllCarts)
  .post(addItemToCart);

router.use(restrictTo('admin', 'user'));

router
  .route('/id')
  .patch(updateCart)
  .get(getCart)
  .delete(deleteCart);

module.exports = router;
