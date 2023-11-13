const express = require('express');
const {
  getAllOrders,
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  getCheckoutSesion,
  getMyOrders
} = require('../controllers/orderController');
const { protect, verifyToken } = require('../controllers/authController');

const router = express.Router();

router.use(verifyToken, protect);

router.get('/checkout-session', getCheckoutSesion);

router.route('/my-order').get(getMyOrders);

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
