const Product = require('../models/productModel');

exports.createNewProduct = async (req, res) => {
  const newUser = await Product.create(req.body);

  console.log(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      newUser,
    },
  });
};

exports.getAllProducts = async (req, res) => {
  const product = await Product.find();

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
