const express = require('express');
const {
  signUp,
  login,
  forgotPassword,
  resetPassword,
  updateCurrentUserPassword
} = require('../controllers/authController');
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const router = express.Router();

router.route('/signup').post(signUp);

router.route('/forgotPassword').post(forgotPassword);

router.route('/passwordReset/:token').patch(resetPassword);

router.route('/login').post(login);

router.route('/updatePassword').patch(updateCurrentUserPassword);

router.route('/').get(getAllUsers);

router
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
