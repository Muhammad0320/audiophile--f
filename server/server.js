const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

process.on('uncaughtException', err => {
  console.log(err.name, err.message);

  console.log('UNCAUGHT EXCEPTION!  🔥🔥', 'Shutting down...');

  process.exit(1);
});

const port = process.env.PORT || 8000;

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DB connection successful'));

const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 🔥🔥. Shutting down...');

  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
