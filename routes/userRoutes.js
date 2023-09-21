const express = require('express');
const {
  signUp,
  login,
  forgotPassword,
  resetPassword
} = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(signUp);

router.route('/forgotPassword').post(forgotPassword);

router.route('/passwordReset/:token').patch(resetPassword);

router.route('/login').post(login);

module.exports = router;
