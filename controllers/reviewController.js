const Review = require('../models/reviewModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne
} = require('./handlerFactory');

exports.createNewRating = createOne(Review);

exports.getAllRatings = getAll(Review);

exports.getReview = getOne(Review);

exports.updateReview = updateOne(Review);

exports.deleteReview = deleteOne(Review);

exports.getReviewsOnProduct = catchAsync(async (req, res, next) => {
  const productReview = await Review.find({ product: req.params.productId });

  if (!productReview) {
    return next(
      new AppError(
        'This Product has no review , Satrts by adding some reviewa',
        404
      )
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      reviews: productReview
    }
  });
});

exports.getReviewOnUser = catchAsync(async (req, res, next) => {
  const userReview = await Review.find({ user: req.user.id });

  if (!userReview) {
    return next(new AppError(`You haven't written any review yet`, 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      reviews: userReview
    }
  });
});

exports.addProductUserIds = (req, res, next) => {
  if (!req.body.product) req.body.product = req.params.productId;

  if (!req.body.user) req.body.user = req.user.id;

  next();
};
