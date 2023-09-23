const express = require('express');
const {
  getReview,
  getAllReviews,
  addProductUserIds,
  createNewReview,
  updateReview,
  deleteReview,
  getReviewsOnProduct
} = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getAllReviews)
  .post(addProductUserIds, createNewReview)
  .get(getReviewsOnProduct);

router
  .route('/:id')
  .get(getReview)
  .patch(updateReview)
  .delete(deleteReview);

module.exports = router;
