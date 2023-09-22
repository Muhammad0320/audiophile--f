const Cart = require('../models/cartModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne
} = require('./handlerFactory');

exports.addTourUserIds = (req, res, next) => {
  console.log(req.params);
  console.log(req.user);
  console.log(req.user);

  if (!req.body.proudct) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user.id;

  next();
};

exports.addItemToCart = createOne(Cart);

exports.getAllCarts = getAll(Cart);

exports.getCart = getOne(Cart);

exports.updateCart = updateOne(Cart);

exports.deleteCart = deleteOne(Cart);

exports.getMyCart = catchAsync(async (req, res, next) => {
  const myCart = await Cart.find({ user: req.user.id });

  if (!myCart) {
    return next(
      new AppError(
        'You do not have any item in your cart, start by adding item that catch your attention',
        404
      )
    );
  }

  res.status(200).json({
    status: 'success',
    result: myCart.length,
    data: {
      cart: myCart
    }
  });
});
