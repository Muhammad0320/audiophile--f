const ApiFeatures = require('../utils/ApiFeatures');

exports.createOne = Modal => async (req, res) => {
  const newUser = await Modal.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      newUser
    }
  });
};

exports.getAll = Modal => async (req, res) => {
  const features = new ApiFeatures(Modal.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const product = await features.query;

  res.status(200).json({
    status: 'success',

    result: product.length,

    data: {
      product
    }
  });
};

exports.getOne = Modal => async (req, res) => {
  const product = await Modal.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      product
    }
  });
};

exports.updateOne = Modal => async (req, res) => {
  const updatedProduct = await Modal.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  res.status(201).json({
    status: 'success',
    data: {
      product: updatedProduct
    }
  });
};

exports.deleteOne = Modal => async (req, res) => {
  await Modal.findByIdAndDelete(req.params.id);

  res.status(204).json({ status: 'success' });
};
