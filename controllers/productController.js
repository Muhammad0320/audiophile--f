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
  const allProducts = await Product.find();

  res.status(200).json({
    status: 'success',

    result: allProducts.length,

    data: {
      allProducts,
    },
  });
};
