const express = require('express');

const cookieParser = require('cookie-parser');

const morgan = require('morgan');
const productRoutes = require('./routes/productRoutes');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api/v1/products', productRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} route on this server `));
});

app.use(globalErrorHandler);

module.exports = app;
