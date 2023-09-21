const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');
const AppError = require('../utils/appError');
const { promisify } = require('util');

const signJwt = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const sendJwt = (res, user, req) => {
  const token = signJwt(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure
  };

  res.cookie('jwt', token, cookieOptions);

  res.status(200).json({
    status: 'success',
    token,

    user
  });
};

exports.signUp = catchAsync(async (req, res) => {
  const { name, email, password, passwordConfirm, role, photo } = req.body;

  const filteredBody = {
    name,
    email,
    password,
    passwordConfirm,
    role,
    photo
  };

  const newUser = await User.create(filteredBody);

  sendJwt(res, newUser, req);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password is specified

  if (!email || !password) {
    return next(new AppError('Please input your email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  // Check if password is correct

  if (!user || !(await user.checkPasswordCorrect(password, user.password))) {
    return next(
      new AppError(
        'Invalid login credentials: Check your email or password',
        400
      )
    );
  }

  // Send jwt to the client

  sendJwt(res, user, req);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  //   } else if (req.cookies.jwt) {
  //     token = req.cookies.jwt;
  //   }

  if (!token) {
    return next(
      new AppError('You are not logged in! Log in to gain access', 400)
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  console.log(decoded);

  next();
});
