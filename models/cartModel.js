const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    default: 1
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },

  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product'
  },

  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// cartSchema.pre(/^find/, function(next) {
//   this.populate({ path: 'user', select: 'name photo' }).populate({
//     path: 'product',
//     select: 'name price category discountPrice'
//   });

//   next();
// });

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
