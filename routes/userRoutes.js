const express = require('express');
const {
  signUp,
  login,
  forgotPassword,
  resetPassword,
  updateCurrentUserPassword
} = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(signUp);

router.route('/forgotPassword').post(forgotPassword);

router.route('/passwordReset/:token').patch(resetPassword);

router.route('/login').post(login);

router.route('/updatePassword').patch(updateCurrentUserPassword);

module.exports = router;
