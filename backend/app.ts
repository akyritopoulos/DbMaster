import express, { Express } from 'express';
import path from 'path';
import indexRouter from './routes/index';
import companyRouter from './routes/CompanyRouter';
import employeesRouter from './routes/EmployeesRouter';
import categoriesRouter from './routes/CategoriesRouter';
import productsRouter from './routes/ProductsRouter';
import customersRoutes from './routes/CustomersRoutes';
import ordersRouter from './routes/OrdersRouter';

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
app.use('/companies', companyRouter);
app.use('/employees', employeesRouter);
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);
app.use('/customers', customersRoutes);
app.use('/orders', ordersRouter);

export default app;
