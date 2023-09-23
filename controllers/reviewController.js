const Review = require('../models/reviewModel');
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
