const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    default: 1
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'A cart must belong to a user']
  },

  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: [true, 'A product must be added to cart']
  },

  createdAt: {
    type: Date,
    default: Date.now()
  }
});

cartSchema.pre(/^find/, function(next) {
  this.populate({ path: 'user', select: 'name photo' }).populate({
    path: 'product',
    select: 'name price category discountPrice'
  });

  next();
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
