const Order = require('../models/orderModel');
const { createOne, updateOne, getAll, getOne } = require('./handlerFactory');

exports.createOrder = createOne(Order);

exports.updateOrder = updateOne(Order);

exports.getAllOrders = getAll(Order);

exports.getOrder = getOne(Order);
