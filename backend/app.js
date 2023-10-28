const express = require('express');
let pool = require('./services/db-pool');
let path = require('path');

let app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

if (process.env.NODE_ENV === 'development') {
  const cors = require('cors');
  app.use(
    cors({
      origin: ['http://localhost:3001'],
      methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
      credentials: true,
    })
  );

  console.info('app running at port 3000...');
  module.exports = app;
}
