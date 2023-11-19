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
  if (!req.body.user) req.body.user = req.user._id;

  if (!req.body.product) req.body.product = req.params.productId;

  next();
};

exports.addItemToCart = createOne(Cart);

exports.getAllCarts = getAll(Cart);

exports.getCart = getOne(Cart);

exports.updateCart = updateOne(Cart);

exports.deleteCart = deleteOne(Cart);

exports.getMyCart = catchAsync(async (req, res, next) => {
  const myCart = await Cart.find({ user: req.user._id });

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

exports.deleteCartOnCheckout = catchAsync(async (req, res, next) => {
  const user = req.user._id;

  const deleteCart = await Cart.deleteMany({ user });

  if (!deleteCart) return next(new AppError('There is nothing to delete', 404));

  res.status(204).json({
    status: 'success'
  });
});
exports.sendBulkDataFromClient = catchAsync(async (req, res, next) => {
  const { changes } = req.body;

  if (!changes) return next();

  const bulkOps = changes.map(change => {
    if (change.type === 'add') {
      return {
        insertOne: { document: change.item }
      };
    }

    if (change.type === 'delete') {
      return {
        deleteOne: {
          filter: { product: change.itemId }
        }
      };
    }

    if (change.type === 'update') {
      return {
        updateOne: {
          filter: { product: change.item.product._id },
          update: {
            $set: {
              quantity: change.item.quantity,
              totalPrice: change.item.totalPrice
            }
          }
        }
      };
    }

    return {};
  });

  const updatedCart = await Cart.bulkWrite(bulkOps, { ordered: true });

  res.status(201).json({
    status: 'success',

    updatedCart: updatedCart
  });
});
