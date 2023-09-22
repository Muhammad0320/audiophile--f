const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const { getAll, getOne, updateOne } = require('./handlerFactory');

exports.getAllUsers = getAll(User);

exports.getUser = getOne(User);

exports.updateUser = updateOne(User);

exports.getMe = catchAsync(async (req, res, next) => {
  const currentUser = await User.findById(req.user.id);

  if (!currentUser) {
    return next(
      new AppError('You are not logged in! Log in to gain access', 401)
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      user: currentUser
    }
  });
});
