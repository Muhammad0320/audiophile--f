const express = require('express');
const {
  createNewProduct,
  getAllProducts,
  updateProduct,
  getProduct,
  deleteProduct,
  getProductStatistics,
  getBestProduct,
  getProductBelow,
  getProductDetail,
  uploadProductImages,
  resizeProductImages
} = require('../controllers/productController');

const cartRouter = require('./cartRoutes');

const reviewRouter = require('./reviewRoutes');

const {
  protect,
  restrictTo,
  verifyToken
} = require('../controllers/authController');

const router = express.Router();

router.route('/get-product-stats').get(getProductStatistics);

router.route('/top-5-cheap').get(getBestProduct, getAllProducts);

router.route('/products-below/:price').get(getProductBelow);

router.route('/slug/:slug').get(getProductDetail);

router.use('/:productId/cart', cartRouter);

router.use('/:productId/review', reviewRouter);

router
  .route('/')
  .post(verifyToken, protect, restrictTo('admin'), createNewProduct)
  .get(getAllProducts);

router
  .route('/:id')
  .patch(
    verifyToken,
    protect,

    restrictTo('admin'),
    uploadProductImages,
    resizeProductImages,
    updateProduct
  )
  .get(getProduct)
  .delete(verifyToken, protect, restrictTo('admin'), deleteProduct);

module.exports = router;
