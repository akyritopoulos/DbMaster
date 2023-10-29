import express from 'express';
import { ProductsController } from '../controllers/ProductsController';

const productsRouter = express.Router();
const controller = new ProductsController();

productsRouter.get('/', controller.getAllProducts.bind(controller));
productsRouter.get('/:id', controller.getProductById.bind(controller));
productsRouter.post('/', controller.createProduct.bind(controller));
productsRouter.put('/:id', controller.updateProduct.bind(controller));
productsRouter.delete('/:id', controller.deleteProduct.bind(controller));

export default productsRouter;
