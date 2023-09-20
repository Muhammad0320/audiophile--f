const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: [true, 'Products name should have at least 4 chars'],
      required: [true, 'A product must have a name'],
    },

    image: {
      type: String,
      required: [true, 'A product must have an image'],
    },

    category: {
      type: String,
      required: [true, 'A product must belong to a category'],
      enum: {
        values: ['earphones', 'headphones', 'speaker', 'wired-earphone'],
        message:
          'Product category should be either be earpohones, headphones, speakers or wired-earphone',
      },
    },

    categoryImage: {
      type: String,
      required: [true, 'A product must have a category image'],
    },

    createdAt: {
      type: Date,
      default: Date.now(),
    },

    new: {
      type: Boolean,
    },

    price: {
      type: Number,
      required: [true, 'A product must have a price'],
    },

    discountPrice: {
      type: Number,
      validate: {
        validator: function (val) {
          return this.price > val;
        },

        message: [],
      },
    },

    description: {
      tpe: String,
      trim: true,
      required: [true, 'A product must have a description'],
    },

    includes: [
      {
        quality: {
          type: Number,
          min: [1, 'An item must have at least one quantity'],
        },

        item: {
          type: String,
          trim: true,
          maxlength: [40, 'Item characters must be less or equal than 40'],
        },
      },
    ],

    features: {
      type: String,
      trim: true,
      required: [
        true,
        'A product have to possess some features, if not what is the point of your sales',
      ],
    },

    gallery: {
      first: String,
      second: String,
      third: String,
    },

    slug: {
      type: String,
      trim: true,
    },

    others: [
      {
        slug: {
          type: String,

          trim: true,
        },

        name: {
          type: String,
          required: true,
        },

        image: String,
      },
    ],
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
