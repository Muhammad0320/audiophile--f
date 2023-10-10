const sharp = require('sharp');
const multer = require('multer');
const path = require('path');
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

const multerStorage = multer.memoryStorage();

const multerfilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(
      new AppError('Invalid file upload, please upload only image file', 400),
      false
    );
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerfilter
});

exports.uploadUserImage = upload.single('photo');

exports.resizeUserImage = catchAsync(async (req, res, next) => {
  console.log(req.file);
  if (!req.file) return next();

  req.file.filename = `user-${req.user._id}-${Date.now()}.jpeg`;

  const outputPath = path.join(
    __dirname,
    '..',
    '..',
    'client/public/assets/users',
    req.file.filename
  );

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 85 })
    .toFile(outputPath);

  next();
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

  const filteredBody = filteredObj(req.body, 'name', 'email');

  if (req.file) filteredBody.photo = req.file.filename;

  const user = await User.findByIdAndUpdate(req.user._id, filteredBody, {
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
