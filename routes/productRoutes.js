const express = require('express');
const { createNewProduct } = require('../controllers/productController');

const router = express.Router();

router.route('/').post(createNewProduct);

module.exports = router;
