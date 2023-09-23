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
