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

    data: {
      cart: myCart
    }
  });
});
