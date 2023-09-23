const express = require('express');
const {
  getReview,
  getAllReviews,
  addProductUserIds,
  createNewReview,
  updateReview,
  deleteReview,
  getReviewsOnProduct,
  getReviewOnUser
} = require('../controllers/reviewController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(protect);

router.route('/my-reviews').get(getReviewOnUser);

router
  .route('/')
  .post(addProductUserIds, createNewReview)
  .get(getReviewsOnProduct)
  .get(getAllReviews);

router.use(restrictTo('user', 'admin'));

router
  .route('/:id')
  .get(getReview)
  .patch(updateReview)
  .delete(deleteReview);

module.exports = router;
