const express = require('express');
const {
  getAllOrders,
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  getCheckoutSesion,
  createOrderOnSession,
  getMyOrders
} = require('../controllers/orderController');
const { protect } = require('../controllers/authController');

const router = express.Router();

router.use(protect);

router.get('/checkout-session', getCheckoutSesion);

router.post('/create-order', createOrderOnSession);

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
