const express = require('express');
const {
  createNewProduct,
  getAllProducts,
  updateProduct,
  getProduct,
  deleteProduct,
  getProductStatistics,
  getBestProduct,
  getProductBelow
} = require('../controllers/productController');

const cartRouter = require('./cartRoutes');

const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router.route('/get-product-stats').get(getProductStatistics);

router.route('/top-5-cheap').get(getBestProduct, getAllProducts);

router.route('/products-below/:below').get(getProductBelow);

router.use('/:productId/cart', cartRouter);

router
  .route('/')
  .post(protect, restrictTo('admin'), createNewProduct)
  .get(getAllProducts);

router
  .route('/:id')
  .patch(protect, restrictTo('admin'), updateProduct)
  .get(getProduct)
  .delete(protect, restrictTo('admin'), deleteProduct);

module.exports = router;
