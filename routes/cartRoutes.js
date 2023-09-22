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

router.use(protect);

router.route('/myCart').get(getMyCart);
router
  .route('/')
  .get(restrictTo('admin'), getAllCarts)
  .post(addItemToCart);

router.use(restrictTo('admin', 'user'));

router
  .route('/:id')
  .get(getCart)
  .patch(updateCart)
  .delete(deleteCart);

module.exports = router;
