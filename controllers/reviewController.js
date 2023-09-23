const Review = require('../models/reviewModel');
const { createOne } = require('./handlerFactory');

exports.createNewRating = createOne(Review);
