require('dotenv').config();

const MONGO_URI_DEV = 'mongodb://localhost:27017/moviesdb';

const { NODE_ENV, MONGO_URI } = process.env;
const { PORT = 3000 } = process.env;

module.exports = {
  MONGO_URI_DEV,
  NODE_ENV,
  MONGO_URI,
  PORT,
};
