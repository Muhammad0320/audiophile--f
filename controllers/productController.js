const Product = require('../models/productModel');

exports.createNewProduct = async (req, res) => {
  const newUser = await Product.create(req.body);

  console.log(req.body);

  res.status(201).json({
    status: 'success',
    results: newUser.length,
    data: {
      newUser,
    },
  });
};
