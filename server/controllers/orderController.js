const Order = require('../models/orderModel');
const { createOne, updateOne, getAll } = require('./handlerFactory');

exports.createOrder = createOne(Order);

exports.updateOrder = updateOne(Order);

exports.getAllOrders = getAll(Order);
