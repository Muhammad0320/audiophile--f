const Product = require('../models/productModel');
const ApiFeatures = require('../utils/ApiFeatures');

exports.createNewProduct = async (req, res) => {
  const newUser = await Product.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      newUser,
    },
  });
};

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
