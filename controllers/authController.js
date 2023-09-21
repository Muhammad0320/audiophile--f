const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');

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
