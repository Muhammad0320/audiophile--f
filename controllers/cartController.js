const Cart = require('../models/cartModel');
const { createOne, getAll, getOne, updateOne } = require('./handlerFactory');

exports.addItemToCart = createOne(Cart);

exports.getAllCarts = getAll(Cart);

exports.getCart = getOne(Cart);

exports.updateCart = updateOne(Cart);
