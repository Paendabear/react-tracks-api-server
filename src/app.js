/* eslint-disable strict */


require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const errorHandler = require('./error-handler'); 
const validateBearerToken = require('./validate-bearer-token');
const statsRouter = require('./Stats/stats-router');


const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

const whitelist = ['http://localhost:3000', 'http://my-project.com'];
const options = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(morgan(morganOption));
app.use(express.json());
app.use(cors(options));

app.use(helmet());
// app.use(validateBearerToken);

app.use('/', statsRouter)


app.use(errorHandler)


module.exports = app;