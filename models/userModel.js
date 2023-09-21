const mongoose = require('mongoose');

const validator = require('validator');

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
  }
});

userSchema.set('toJSON', { getters: true, virtuals: true });
userSchema.set('toObject', { getters: true, virtuals: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
