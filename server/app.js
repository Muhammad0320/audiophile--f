const express = require('express');

const cookieParser = require('cookie-parser');

const sanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const helmet = require('helmet');
const xss = require('xss-clean');

const cors = require('cors');

const morgan = require('morgan');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(sanitize());

app.use(xss());

app.use(cors());

app.use(
  hpp({
    whitelist: [
      'duration',
      'discountPrice',
      'price',
      'ratingsAverage',
      'ratingsQuantity',
      'category'
    ]
  })
);

app.use(helmet());

app.use(
  '/api',
  rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP'
  })
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/carts', cartRoutes);
app.use('/api/v1/reviews', reviewRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} route on this server `));
});

app.use(globalErrorHandler);

module.exports = app;
