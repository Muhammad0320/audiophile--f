const express = require('express');
const { getAllCarts } = require('../controllers/cartController');

const router = express.Router();

router.route('/').get(getAllCarts);

module.exports = router;
