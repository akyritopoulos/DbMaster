import express, { Router } from 'express';
import { OrdersController } from '../controllers/OrdersController';

const router: Router = express.Router();
const ordersController: OrdersController = new OrdersController();

router.get('/', ordersController.getAllOrders);
router.get('/:id', ordersController.getOrderById);
router.post('/', ordersController.createOrder);
router.put('/:id', ordersController.updateOrder);
router.delete('/:id', ordersController.deleteOrder);

export default router;
