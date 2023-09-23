const express = require('express');
const {
  getReview,
  getAllReviews,
  addProductUserIds,
  createNewReview
} = require('../controllers/reviewController');

const router = express.Router();

router
  .route('/')
  .get(getAllReviews)
  .post(addProductUserIds, createNewReview);

module.exports = router;
