const User = require('../models/userModel');
const { getAll, getOne, updateOne } = require('./handlerFactory');

exports.getAllUsers = getAll(User);

exports.getUser = getOne(User);

exports.updateUser = updateOne(User);
