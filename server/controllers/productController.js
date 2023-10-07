const Product = require('../models/productModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const {
  createOne,
  getAll,
  getOne,
  deleteOne,
  updateOne
} = require('./handlerFactory');

exports.createNewProduct = createOne(Product);
exports.getAllProducts = getAll(Product);
exports.getProduct = getOne(Product, { path: 'reviews' });
exports.updateProduct = updateOne(Product);
exports.deleteProduct = deleteOne(Product);

exports.getProductDetail = catchAsync(async (req, res, next) => {
  const product = await Product.findOne({ slug: req.params.slug }).populate({
    path: 'reviews'
  });

  if (!product) {
    return next(new AppError('There is no product with such slug', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      product
    }
  });
});

exports.getProductStatistics = async (req, res) => {
  const stats = await Product.aggregate([
    {
      $match: { price: { $gte: 99 } }
    },

    {
      $group: {
        _id: { $toUpper: '$category' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
        avgPrice: { $avg: '$price' },
        avgRating: { $avg: '$ratingsAverage' },
        numProduct: { $sum: 1 }
      }
    }
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      stats
    }
  });
};

exports.getBestProduct = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';

  next();
};

exports.getProductBelow = async (req, res) => {
  const price = req.params.price * 1;

  const products = await Product.find({ price: { $lte: price } });

  res.status(200).json({
    status: 'success',
    result: products.length,
    data: {
      products
    }
  });
};
