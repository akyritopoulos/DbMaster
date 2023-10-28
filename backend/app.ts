import express, { Express } from 'express';
import pool from './services/db-pool';
import path from 'path';
import indexRouter from './routes/index';

const app: Express = express();

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

  app.use('/', indexRouter);
}

export default app;
