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

const filteredObj = (body, ...allowedFields) => {
  const newObj = {};

  Object.keys(body).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = body[el];
  });

  return newObj;
};

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is for updating other user data other than sesitive data like password, kindly navigate to /updateCurrentPassword  to update your password',
        400
      )
    );
  }
});
