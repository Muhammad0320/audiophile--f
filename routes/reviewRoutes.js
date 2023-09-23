const express = require('express');
const {
  getReview,
  getAllReviews,
  addProductUserIds,
  createNewReview,
  updateReview,
  deleteReview
} = require('../controllers/reviewController');

const router = express.Router();

router
  .route('/')
  .get(getAllReviews)
  .post(addProductUserIds, createNewReview);

router
  .route('/:id')
  .get(getReview)
  .patch(updateReview)
  .delete(deleteReview);

module.exports = router;
