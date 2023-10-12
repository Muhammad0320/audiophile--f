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

  const cartId = currentUserCart.map(item => item.product._id);

  const checkoutItems = currentUserCart.map(item => {
    return {
      quantity: item.quantity,
      price_data: {
        currency: 'usd',
        unit_amount: item.totalPrice * 100,
        product_data: {
          name: `${item.product.name} Tour`,
          description: item.product.description,
          images: [item.product.image]
        }
      }
    };
  });

  const cartIdString = JSON.stringify(cartId);

  const currentUserCartStr = JSON.stringify(currentUserCart);

  const successUrl = `${req.protocol}://127.0.0.1:5173/home/?session_data=${currentUserCartStr}`;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],

    mode: 'payment',
    success_url: successUrl,
    cancel_url: `${req.protocol}://127.0.0.1:5173`,
    customer_email: req.user.email,
    client_reference_id: req.user._id, // pass user id here
    metadata: {
      cartData: cartIdString // pass cart data here
    },
    line_items: checkoutItems
  });

  //   console.log(session);

  res.status(200).json({
    status: 'success',
    session
  });
});

exports.createOrderOnSession = catchAsync(async (req, res, next) => {
  const user = req.user._id;

  const cartData = JSON.parse(req.body.product);

  const products = cartData.map(item => {
    return {
      productId: item.product._id,
      quantity: item.quantity,
      price: item.totalPrice
    };
  });

  console.log(products);

  await Order.create({ user, products });

  // res.redirect(req.originalUrl.split('?')[0]);

  res.status(201).json({
    status: 'success',
    data: 'Order created successfully'
  });
});

exports.createOrder = createOne(Order);

exports.updateOrder = updateOne(Order);

exports.getAllOrders = getAll(Order);

exports.getOrder = getOne(Order);

exports.deleteOrder = deleteOne(Order);
