const Product = require('../models/productModel');

exports.createNewProduct = async (req, res) => {
  const newUser = await Product.create(req.body);

  res.status(200).json({
    status: 'success',
    results: newUser.length,
    data: {
      newUser,
    },
  });
};
