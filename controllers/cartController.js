const Cart = require('../models/cartModel');
const { createOne } = require('./handlerFactory');

exports.addItemToCart = createOne(Cart);
