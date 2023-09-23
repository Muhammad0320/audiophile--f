const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [true, 'Products name should have at least 4 chars'],
    trim: true,
    required: [true, 'A product must have a name']
  },

  image: {
    type: String,
    required: [true, 'A product must have an image']
  },

  category: {
    type: String,
    required: [true, 'A product must belong to a category'],
    enum: ['earphones', 'headphones', 'speakers', 'wired-earphones']
  },

  categoryImage: {
    type: String,
    required: [true, 'A product must have a category image']
  },

  createdAt: {
    type: Date,
    default: Date.now()
  },

  new: {
    type: Boolean
  },

  price: {
    type: Number,
    required: [true, 'A product must have a price']
  },

  discountPrice: {
    type: Number,
    validate: {
      validator: function(val) {
        return this.price > val;
      },

      message: 'Discount price should be less than regular prices'
    }
  },

  description: {
    type: String,
    trim: true,
    required: [true, 'A product must have a description']
  },

  includes: [
    {
      quality: {
        type: Number,
        min: [1, 'An item must have at least one quantity']
      },

      item: {
        type: String,
        trim: true,
        maxlength: [40, 'Item characters must be less or equal than 40']
      }
    }
  ],

  features: {
    type: String,
    trim: true,
    required: [
      true,
      'A product have to possess some features, if not what is the point of your sales'
    ]
  },

  gallery: {
    first: String,
    second: String,
    third: String
  },

  slug: {
    type: String,
    trim: true
  },

  others: [
    {
      slug: {
        type: String,
        trim: true
      },

      name: {
        type: String,
        required: true
      },

      image: String
    }
  ],

  ratingsAverage: {
    type: Number,
    default: 4.5,
    max: [5, 'RatingAverage should not be above 5'],
    min: [1, 'RatingsAverage should not be below 1 ']
  },

  ratingsQuantity: {
    type: Number,
    default: 0
  }
});

productSchema.virtual('discountPercent').get(function() {
  return (this.discountPrice / this.price) * 100;
});

productSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'product'
});

productSchema.set('toJSON', { getters: true, virtuals: true });
productSchema.set('toObject', { getters: true, virtuals: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
