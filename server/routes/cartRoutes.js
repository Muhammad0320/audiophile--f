const express = require('express');
const {
  getAllCarts,
  addItemToCart,
  updateCart,
  getCart,
  deleteCart,
  getMyCart,
  addProductUserIds,
  sendBulkDataFromClient,
  deleteCartOnCheckout
} = require('../controllers/cartController');
const {
  protect,
  restrictTo,
  verifyToken
} = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(verifyToken, protect);

router.route('/myCart').get(getMyCart);

router
  .route('/')
  .get(restrictTo('admin'), getAllCarts)
  .post(addProductUserIds, addItemToCart);

router.route('/bulkSend').post(addProductUserIds, sendBulkDataFromClient);

router.route('/deleteCartCheckout').delete(deleteCartOnCheckout);

router.use(restrictTo('admin', 'user'));

router
  .route('/:id')
  .get(getCart)
  .patch(updateCart)
  .delete(deleteCart);

module.exports = router;
