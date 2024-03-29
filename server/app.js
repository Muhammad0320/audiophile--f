const express = require('express');

const cookieParser = require('cookie-parser');

const sanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const helmet = require('helmet');
const xss = require('xss-clean');

const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const orderRoutes = require('./routes/orderRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const { webHookCheckout } = require('./controllers/orderController');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(
  '/api/v1/webhook-checkout',
  express.raw({ type: 'application/json' }),
  webHookCheckout
);

app.set('trust proxy', false);

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.use(sanitize());

app.use(xss());

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// http://127.0.0.1:5173

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://audiophile-f-muhammad0320.vercel.app');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, PUT, POST, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use(
  cors({
    origin: [
      'https://audiophile-f-muhammad0320.vercel.app',
      'http://127.0.0.1:5173'
    ],
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'PATCH', 'DELETE'],
    credentials: true
  })
);

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

// app.use(
//   '/api',
//   rateLimit({
//     max: 200,
//     windowMs: 60 * 60 * 1000,
//     message: 'Too many requests from this IP'
//   })
// );

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/carts', cartRoutes);
app.use('/api/v1/reviews', reviewRoutes);
app.use('/api/v1/orders', orderRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} route on this server `));
});

app.use(globalErrorHandler);

module.exports = app;
