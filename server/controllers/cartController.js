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

exports.addProductUserIds = (req, res, next) => {
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user._id;

  next();
};

exports.checkForDuplicateProduct = catchAsync(async (req, res, next) => {
  const isDuplicateProduct = await Cart.findOne({ product: req.body.product });

  if (isDuplicateProduct) {
    const cartUpdate = await Cart.findByIdAndUpdate(isDuplicateProduct._id, {
      quantity: isDuplicateProduct.quantity + req.body.quantity
    });

    return res.status(200).json({
      status: 'success',

      data: {
        cart: cartUpdate
      }
    });
  }

  next();
});

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

const sendBulkDataFromServer = catchAsync(async (req, res, next) => {
  const { changes } = req.body;
});
