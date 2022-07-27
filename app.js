require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');

const { requestLogger, errorLogger } = require('./middlewares/logger');
const cors = require('./middlewares/cors');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const limiter = require('./middlewares/rateLimiter');

const {
  MONGO_URI_DEV,
  NODE_ENV,
  MONGO_URI,
  PORT,
} = require('./utils/constants');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

// mongoose.connect('mongodb://localhost:27017/moviesdb');
mongoose.connect(NODE_ENV === 'production' ? MONGO_URI : MONGO_URI_DEV);

app.use(requestLogger);
app.use(limiter);
app.use(cors);
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
// console.log(process.env.NODE_ENV);
// console.log(process.env.MONGO_URI);
// console.log(process.env.MONGO_URI_DEV);
// console.log(process.env);
