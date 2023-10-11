const ApiFeatures = require('../utils/ApiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createOne = Modal =>
  catchAsync(async (req, res) => {
    const doc = await Modal.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        doc
      }
    });
  });

exports.getAll = Modal =>
  catchAsync(async (req, res) => {
    const features = new ApiFeatures(Modal.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const doc = await features.query;

    res.status(200).json({
      status: 'success',

      result: doc.length,

      data: {
        data: doc
      }
    });
  });

exports.getOne = (Modal, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Modal.findById(req.params.id);

    if (popOptions) query = query.populate(popOptions);

    const doc = await query;

    if (!doc) {
      return next(
        new AppError(`There is no document with this ID: ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      status: 'success',
      data: {
        doc
      }
    });
  });

exports.updateOne = Modal =>
  catchAsync(async (req, res) => {
    const updatedProduct = await Modal.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedProduct) {
      return new AppError(
        `There is no document with this ID: ${req.params.id}`,
        404
      );
    }

    res.status(201).json({
      status: 'success',
      data: {
        doc: updatedProduct
      }
    });
  });

exports.deleteOne = Modal =>
  catchAsync(async (req, res) => {
    const deleteProd = await Modal.findByIdAndDelete(req.params.id);

    if (!deleteProd) {
      return new AppError(
        `There is no document with this ID: ${req.params.id}`,
        404
      );
    }

    res.status(204).json({ status: 'success' });
  });
