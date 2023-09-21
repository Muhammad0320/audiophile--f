const mongoose = require('mongoose');

const validator = require('validator');

const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'Name must be at least two characters '],
    maxlength: [40, 'Name must be less  or equals 40 characters '],
    required: [true, 'Please tell us your name']
  },

  email: {
    type: String,
    unique: true,
    validate: [validator.isEmail, 'Please input a valid email'],
    required: [true, 'Please provide an email']
  },

  password: {
    type: String,
    minlength: [8, 'password must at least be eight characters long'],
    select: false,
    required: [true, 'Please enter your password']
  },

  passwordConfirm: {
    type: String,
    validate: {
      validator: function(val) {
        return this.password === val;
      },

      message: 'Passwords are not the same'
    },

    required: [true, 'Please confirm your password']
  },

  photo: {
    type: String,
    default: 'default.jpg'
  },

  role: {
    type: String,
    default: 'user',
    enum: {
      values: ['user', 'merchant', 'admin'],
      message: 'Role can either be user, mercant or admin '
    }
  },

  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

userSchema.set('toJSON', { getters: true, virtuals: true });
userSchema.set('toObject', { getters: true, virtuals: true });

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;

  next();
});

userSchema.methods.checkPasswordCorrect = async function(
  password,
  hashedPassword
) {
  return await bcrypt.compare(password, hashedPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
