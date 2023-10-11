const express = require('express');
const {
  getAllOrders,
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  getCheckoutSesion
} = require('../controllers/orderController');
const { protect } = require('../controllers/authController');

const router = express.Router();

router.use(protect);

router.get('/checkout-session', getCheckoutSesion);

router
  .route('/')
  .get(getAllOrders)
  .post(createOrder);

router
  .route('/:id')
  .get(getOrder)
  .patch(updateOrder)
  .delete(deleteOrder);

module.exports = router;
