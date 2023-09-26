const express = require('express');
const {
  signUp,
  login,
  forgotPassword,
  resetPassword,
  updateCurrentUserPassword,
  protect,
  restrictTo,
  isLoggedIn
} = require('../controllers/authController');
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  getMe,
  deleteMe,
  updateMe
} = require('../controllers/userController');

const router = express.Router();

router.route('/login').post(login);

router.route('/signup').post(signUp);

router.route('/forgotPassword').post(forgotPassword);

router.route('/passwordReset/:token').patch(resetPassword);

router.route('/me').get(isLoggedIn, getMe);

router.use(protect);

router.route('/updatePassword').patch(updateCurrentUserPassword);

router.route('/deleteMe').delete(deleteMe);

router.route('/updateMe').patch(updateMe);

router.use(restrictTo('admin'));

router.route('/').get(getAllUsers);

router
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
