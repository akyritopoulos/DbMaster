import express, { Router } from 'express';
import { CustomersController } from '../controllers/CustomersController';

const router: Router = express.Router();
const customersController: CustomersController = new CustomersController();

router.get('/', customersController.getAllCustomers);
router.get('/:id', customersController.getCustomerById);
router.post('/', customersController.createCustomer);
router.put('/:id', customersController.updateCustomer);
router.delete('/:id', customersController.deleteCustomer);

export default router;
