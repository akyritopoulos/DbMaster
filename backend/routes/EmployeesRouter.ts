import express, { Router, Request, Response } from 'express';
import { EmployeesController } from '../controllers/EmployeesController';

const router: Router = express.Router();
const eployeesController: EmployeesController = new EmployeesController();

router.get('/', eployeesController.getAllEmployees);
router.get('/:id', eployeesController.getEmployeeById);
router.post('/', eployeesController.createEmployee);
router.put('/:id', eployeesController.updateEmployee);
router.delete('/:id', eployeesController.deleteEmployee);

export default router;
