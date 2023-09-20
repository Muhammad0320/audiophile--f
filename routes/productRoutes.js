const express = require('express');
const {
  createNewProduct,
  getAllProducts,
  updateProduct,
  getProduct,
  deleteProduct,
} = require('../controllers/productController');

const router = express.Router();

router.route('/').post(createNewProduct).get(getAllProducts);

router.route('/:id').patch(updateProduct).get(getProduct).delete(deleteProduct);

module.exports = router;
