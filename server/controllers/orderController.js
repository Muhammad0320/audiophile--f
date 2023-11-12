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

  const encodedCartData = encodeURIComponent(currentUserCartStr);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],

    mode: 'payment',
    success_url: `${req.protocol}://${req.get(
      'host'
    )}/success?session_data=${encodedCartData}`,
    cancel_url: `${req.protocol}://${req.get('host')}/home`,
    customer_email: req.user.email,
    client_reference_id: cartIdString,

    line_items: checkoutItems
  });

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

  const newOrder = await Order.create({ user, products });

  if (newOrder) {
    await Cart.find({ user }).deleteMany();
  }

  res.status(201).json({
    status: 'success',
    data: 'Order created successfully'
  });
});

const createNewOrderOnCompletedSession = session => {
  console.dir(session, { depth: null });
};

exports.webHookCheckout = (req, res, next) => {
  const stripeSignature = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      stripeSignature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return res.status(200).send(`Webhook error: ${error.message}`);
  }

  console.log(event);
  if (event.type === 'checkout.session.completed')
    createNewOrderOnCompletedSession(event.data.object);

  res.status(200).json({ received: true });
};

exports.getMyOrders = catchAsync(async (req, res, next) => {
  const user = req.user._id;

  const order = await Order.find({ user }).populate({
    path: 'products.productId',
    select: 'name'
  });

  res.status(200).json({
    status: 'success',
    length: order.length,
    data: {
      order
    }
  });
});

exports.createOrder = createOne(Order);

exports.updateOrder = updateOne(Order);

exports.getAllOrders = getAll(Order);

exports.getOrder = getOne(Order);

exports.deleteOrder = deleteOne(Order);
