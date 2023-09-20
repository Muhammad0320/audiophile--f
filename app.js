const express = require('express');

const productRoutes = require('./routes/productRoutes');

const app = express();

app.use((req, res, next) => {
  console.log('Hello');
});

app.use('/api/v1/products', productRoutes);

module.exports = app;
