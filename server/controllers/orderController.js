const Order = require('../models/orderModel');
const { createOne, updateOne } = require('./handlerFactory');

exports.createOrder = createOne(Order);

exports.updateOrder = updateOne(Order);
