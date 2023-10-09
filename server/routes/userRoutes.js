const express = require('express');
const {
  signUp,
  login,
  forgotPassword,
  resetPassword,
  updateCurrentUserPassword,
  protect,
  restrictTo
} = require('../controllers/authController');
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  getMe,
  deleteMe,
  updateMe,
  uploadUserImage
} = require('../controllers/userController');

const router = express.Router();

router.route('/login').post(login);

router.route('/signup').post(signUp);

router.route('/forgotPassword').post(forgotPassword);

router.route('/passwordReset/:token').patch(resetPassword);

router.use(protect);

router.route('/me').get(getMe);
router.route('/updatePassword').patch(updateCurrentUserPassword);

router.route('/deleteMe').delete(deleteMe);

router.route('/updateMe').patch(uploadUserImage, updateMe);

router.use(restrictTo('admin'));

router.route('/').get(getAllUsers);

router
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
