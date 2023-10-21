const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');
const AppError = require('../utils/appError');
const crypto = require('crypto');

const { promisify } = require('util');

const sendMail = require('../utils/email');
const RevokedToken = require('../models/revokedTokenModel');

const signJwt = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const getToken = req => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  return token;
};

const sendJwt = (res, user, req) => {
  const token = signJwt(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: true
    // sameSite: 'Lax'
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

exports.logout = catchAsync(async (req, res, next) => {
  const token = getToken(req);

  // Add fresh token to the revoked ones

  await RevokedToken.create({ token });

  res.status(200).json({
    status: 'success',
    message: 'Logged out successfully'
  });
});

exports.verifyToken = catchAsync(async (req, res, next) => {
  const token = getToken(req);

  // Checks if there is a token

  if (!token) {
    return next(
      new AppError('You are not logged in! Login to gain access', 401)
    );
  }

  // Checks if the curent user's token is revoked

  const checkRevokedToken = await RevokedToken.findOne({ token });

  if (checkRevokedToken) {
    return next(new AppError('Invalid token! Login again to gain access', 401));
  }

  next();
});

exports.protect = catchAsync(async (req, res, next) => {
  const token = getToken(req);

  // Extract a unique id from the jwt

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(
      new AppError('The user belonging to this token no longer exists', 404)
    );
  }

  // Checkes if user changed password after the token is issued

  if (!currentUser.passwordChagedAfter(decoded.iat)) {
    return next(new AppError('You recently changed your password', 400));
  }

  req.user = currentUser;

  next();
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new AppError('Please provide us with valid email!'));
  }

  const user = await User.findOne({ email });

  if (!user) {
    return next(new AppError('There is no user with this email!'));
  }

  const token = user.generatePasswordResetToken();

  await user.save({ validateBeforeSave: false });

  const reqUrl = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/resetPassword/${token}`;

  const message = `Forget your password? send a PATCH request to this url: ${reqUrl} with your new password and passwordConfirm, If you did not forget your kindly ignore this email`;

  try {
    await sendMail({
      email: user.email,
      message,
      subject: `Your password reset token (valid for just 10 minutes)`
    });

    res.status(200).json({
      status: 'success',
      message: 'Token successsfully sent to email'
    });
  } catch (error) {
    user.passwordResetExpires = undefined;
    user.passwordResetToken = undefined;

    await user.save({ validateBeforeSave: false });

    res.status(500).json({
      status: 'success',
      message: 'Something went very wrong while trying to send the mail 😐'
    });
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  const { token } = req.params;

  const hasedToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hasedToken,
    passwordResetExpires: { $gte: Date.now() }
  });

  if (!user) {
    return next(new AppError('Token is invalid or has expired', 403));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;

  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();

  sendJwt(res, user, req);
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You are not authorized to perform this action', 401)
      );
    }
    next();
  };
};

exports.updateCurrentUserPassword = catchAsync(async (req, res, next) => {
  const { password, passwordConfirm, currentPassword } = req.body;

  const currentUser = await User.findById(req.user.id).select('+password');

  if (!currentPassword) {
    return next(new AppError('Please provide your current password', 400));
  }

  if (
    !(await currentUser.checkPasswordCorrect(
      currentPassword,
      currentUser.password
    ))
  ) {
    return next(new AppError('Incorrect current password', 400));
  }

  currentUser.password = password;
  currentUser.passwordConfirm = passwordConfirm;

  await currentUser.save();

  res.status(200).json({
    status: 'success',
    data: {
      updatedUser: currentUser
    }
  });
});
