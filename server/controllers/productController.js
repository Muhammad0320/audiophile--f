const path = require('path');

const multer = require('multer');
const sharp = require('sharp');

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

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(
      new AppError('Invalid file upload, uploaded file must be an image', 400),
      false
    );
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadProductImages = upload.fields([
  {
    name: 'image',
    maxCount: 1
  },

  {
    name: 'gallery',
    maxCount: 3
  }
]);

exports.resizeProductImages = catchAsync(async (req, res, next) => {
  if (!req.files.image || !req.files.gallery) return next();
  req.body.image = `product-${req.params.id}-${Date.now()}.jpeg`;

  const imagePath = path.join(
    __dirname,
    '..',
    '..',
    'client/public/assets/product',
    req.body.image
  );

  await sharp(req.files.image[0].buffer)
    .resize(2000, 1333)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(imagePath);

  await Promise.all(
    req.files.gallery.map(async (img, i) => {
      req.body.gallery = [];

      const filename = `proudct-${req.params.id}-${Date.now()}-gallery-${i +
        1}.jpeg`;

      const filePath = path.join(
        __dirname,
        '..',
        '..',
        'client/public/assets/product',
        filename
      );

      await sharp(img.buffer)
        .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(filePath);

      req.body.gallery.push(filename);
    })
  );
  next();
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
