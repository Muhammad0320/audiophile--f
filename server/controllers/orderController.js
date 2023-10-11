const stripe = require('stripe')(process.env.stripe_secret_key);

const Cart = require('../models/cartModel');
const Order = require('../models/orderModel');

const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const {
  createOne,
  updateOne,
  getAll,
  getOne,
  deleteOne
} = require('./handlerFactory');

exports.getCheckoutSesion = catchAsync(async (req, res, next) => {
  const currentUserCart = await Cart.find({ user: req.user._id });

  if (!currentUserCart.length) {
    return next(
      new AppError(
        'Your cart is empty, please add some items before checkout',
        400
      )
    );
  }

  const checkoutItems = currentUserCart.map(item => {
    return {
      quantity: item.quantity,
      price_data: {
        currency: 'usd',
        unit_amount: item.product.price * 100,
        product_data: {
          name: `${item.product.name} Tour`,
          description: item.product.description,
          images: [item.product.image]
        }
      }
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],

    mode: 'payment',
    success_url: `${req.protocol}://${req.get('host')}`,
    cancel_url: `${req.protocol}://${req.get('host')}`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourId,
    line_items: checkoutItems
  });

  res.status(200).json({
    status: 'success',
    data: 'Thank you'
  });
});

exports.createOrder = createOne(Order);

exports.updateOrder = updateOne(Order);

exports.getAllOrders = getAll(Order);

exports.getOrder = getOne(Order);

exports.deleteOrder = deleteOne(Order);
