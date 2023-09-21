const Product = require('../models/productModel');
const ApiFeatures = require('../utils/ApiFeatures');
const { createOne } = require('./handlerFactory');

exports.createNewProduct = createOne(Product);

exports.getAllProducts = async (req, res) => {
  const features = new ApiFeatures(Product.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const product = await features.query;

  res.status(200).json({
    status: 'success',

    result: product.length,

    data: {
      product,
    },
  });
};

exports.getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
};

exports.updateProduct = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({
    status: 'success',
    data: {
      product: updatedProduct,
    },
  });
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);

  res.status(204).json({ status: 'success' });
};

exports.getProductStatistics = async (req, res) => {
  const stats = await Product.aggregate([
    {
      $match: { price: { $gte: 99 } },
    },

    {
      $group: {
        _id: { $toUpper: '$category' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
        avgPrice: { $avg: '$price' },
        avgRating: { $avg: '$ratingsAverage' },
        numProduct: { $sum: 1 },
      },
    },
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      stats,
    },
  });
};

exports.getBestProduct = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';

  next();
};

exports.getProductBelow = async (req, res) => {
  const price = req.params.below * 1;

  const products = await Product.find({ price: { $lte: price } });

  res.status(200).json({
    status: 'success',
    result: products.length,
    data: {
      products,
    },
  });
};
