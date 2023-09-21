const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
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

const globalErrorHandler = (err, req, res) => {
  err.statusCode = err.statusCode || 500;

  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    const error = structuredClone(err);

    sendErrorProd(error, res);
  }
};

module.exports = globalErrorHandler;
