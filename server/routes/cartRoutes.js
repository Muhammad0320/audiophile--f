const express = require('express');
const {
  getAllCarts,
  addItemToCart,
  updateCart,
  getCart,
  deleteCart,
  getMyCart,
  addProductUserIds,
  checkForDuplicateProduct,
  sendBulkDataFromClient
} = require('../controllers/cartController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(protect);

router.route('/myCart').get(getMyCart);

router
  .route('/')
  .get(restrictTo('admin'), getAllCarts)
  .post(addProductUserIds, checkForDuplicateProduct, addItemToCart);

router.route('/bulkSend').post(addProductUserIds, sendBulkDataFromClient);

router.use(restrictTo('admin', 'user'));

router
  .route('/:id')
  .get(getCart)
  .patch(updateCart)
  .delete(deleteCart);

module.exports = router;
