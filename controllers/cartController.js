const Cart = require('../models/cartModel');
const { createOne, getAll } = require('./handlerFactory');

exports.addItemToCart = createOne(Cart);

exports.getAllCarts = getAll(Cart);
