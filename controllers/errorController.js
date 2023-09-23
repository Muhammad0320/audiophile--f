const AppError = require('../utils/appError');

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      stats: err.status,
      message: err.message
    });
  } else {
    res.status(err.statusCode).json({
      status: err.status,
      message: 'Something went very wrong'
    });
  }
};

const handleCastError = err => {
  const message = `Invalid product _id: ${err.value}`;

  return new AppError(message, 404);
};

const handleValidationError = err => {
  const values = Object.values(err.errors).map(el => el.message);

  const message = values.join('. ');

  return new AppError(message, 400);
};

const handleDuplicateError = err => {
  const message = `Duplicate value: ${err.keyValue.email}, Please try another value`;

  return new AppError(message, 403);
};

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = JSON.parse(JSON.stringify(err));

    if (error.name === 'CastError') error = handleCastError(error);
    if (error.name === 'ValidationError') error = handleValidationError(error);

    if (error.code === 11000) error = handleDuplicateError(error);

    console.log('Okay', err);

    console.log('alright', error);

    sendErrorProd(error, res);
  }
};

module.exports = globalErrorHandler;
