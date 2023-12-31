const express = require('express');
const {
  signUp,
  login,
  forgotPassword,
  resetPassword,
  updateCurrentUserPassword,
  protect,
  restrictTo,
  logout,
  verifyToken
} = require('../controllers/authController');
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  getMe,
  deleteMe,
  updateMe,
  uploadUserImage,
  resizeUserImage
} = require('../controllers/userController');

const router = express.Router();

router.route('/login').post(login);

router.route('/signup').post(signUp);

router.route('/forgotPassword').post(forgotPassword);

router.route('/passwordReset/:token').patch(resetPassword);

router.use(verifyToken, protect);

router.route('/logout').post(logout);

router.route('/me').get(getMe);
router.route('/updatePassword').patch(updateCurrentUserPassword);

router.route('/deleteMe').delete(deleteMe);

router.route('/updateMe').patch(uploadUserImage, resizeUserImage, updateMe);

router.use(restrictTo('admin'));

router.route('/').get(getAllUsers);

router
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
