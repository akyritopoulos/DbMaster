import express, { Express } from 'express';
import path from 'path';
import indexRouter from './routes/index';
import companyRouter from './routes/CompanyRouter'

const app: Express = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

if (process.env.NODE_ENV === 'development') {
  const cors = require('cors');
  app.use(
    cors({
      origin: ['http://localhost:3001'],
      methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
      credentials: true,
    })
  );
}
app.use('/', indexRouter);
app.use('/companies', companyRouter)

export default app;
