const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const { getAll, getOne, updateOne, deleteOne } = require('./handlerFactory');

exports.getAllUsers = getAll(User);

exports.getUser = getOne(User);

exports.updateUser = updateOne(User);

exports.deleteUser = deleteOne(User);

exports.getMe = catchAsync(async (req, res, next) => {
  const currentUser = await User.findById(req.user.id);

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

  const filteredBody = filteredObj(req.body, 'name', 'email', 'photo');

  const user = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });

  if (!user) {
    return next(
      new AppError('You are not logged in, Please login to gain acces')
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  const { currentPassword } = req.body;

  if (!currentPassword) {
    return next(
      new AppError(
        'We need your current password before you can perform this operation! For security purpose ',
        404
      )
    );
  }

  const toBeDeletedUser = await User.findByIdAndUpdate(
    req.user.id,
    { active: false },
    { new: true, runValidators: true }
  ).select('+password');

  if (
    !toBeDeletedUser ||
    !(await toBeDeletedUser.checkPasswordCorrect(
      currentPassword,
      toBeDeletedUser.password
    ))
  ) {
    return next(new AppError('Incorrent current password! try again', 400));
  }

  res.status(204).json({
    status: 'success'
  });
});
