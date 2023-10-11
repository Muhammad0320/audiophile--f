const Order = require('../models/orderModel');
const { createOne } = require('./handlerFactory');

exports.createOrder = createOne(Order);
