const Order = require('../models/orderModel');
const {
  createOne,
  updateOne,
  getAll,
  getOne,
  deleteOne
} = require('./handlerFactory');

exports.createOrder = createOne(Order);

exports.updateOrder = updateOne(Order);

exports.getAllOrders = getAll(Order);

exports.getOrder = getOne(Order);

exports.deleteOrder = deleteOne(Order);
