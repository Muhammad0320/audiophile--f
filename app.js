const express = require('express');

const productRoutes = require('./routes/productRoutes');

const morgan = require('morgan');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api/v1/products', productRoutes);

module.exports = app;
