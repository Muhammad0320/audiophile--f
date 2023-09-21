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
} = require('../controllers/productController');

const router = express.Router();

router.route('/get-product-stats').get(getProductStatistics);

router.route('/top-5-cheap').get(getBestProduct, getAllProducts);

router.route('/products-below/:below').get(getProductBelow);

router.route('/').post(createNewProduct).get(getAllProducts);

router.route('/:id').patch(updateProduct).get(getProduct).delete(deleteProduct);

module.exports = router;
