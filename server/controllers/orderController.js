const Cart = require('../models/cartModel');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');
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

  const productIds = currentUserCart.map(el => el.product);

  console.log(productIds);

  const products = await Product.find({ _id: { $in: productIds } });

  console.log(products);
});

exports.createOrder = createOne(Order);

exports.updateOrder = updateOne(Order);

exports.getAllOrders = getAll(Order);

exports.getOrder = getOne(Order);

exports.deleteOrder = deleteOne(Order);
