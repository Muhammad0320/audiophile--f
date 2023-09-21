const express = require('express');
const {
  signUp,
  login,
  forgotPassword
} = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(signUp);

router.route('/forgotPassword').post(forgotPassword);

router.route('/login').post(login);

module.exports = router;
