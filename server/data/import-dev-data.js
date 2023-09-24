const fs = require('fs');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/productModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DB connection successful'));

const product = JSON.parse(
  fs.readFileSync(`${__dirname}/product.json`, 'utf-8')
);
// const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
// const reviews = JSON.parse(
//   fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8')
// );

const importData = async () => {
  try {
    await Product.create(product);
    // await User.create(users, { validateBeforeSave: true });
    // await Review.create(reviews);
    console.log('Data successfully loaded');
  } catch (error) {
    console.log(error);
  }

  process.exit();
};

const deleteData = async () => {
  try {
    await Product.deleteMany();
    // await Review.deleteMany();
    // await User.deleteMany();
    console.log('Data successfully deleted');
  } catch (error) {
    console.log(error);
  }

  process.exit();
};

if (process.argv.at(2) === '--import') {
  importData();
} else if (process.argv.at(2) === '--delete') {
  deleteData();
}
