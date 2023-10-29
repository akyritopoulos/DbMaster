import express, { Router, Request, Response } from 'express';
import { CompanyController } from '../controllers/CompanyController';

const router: Router = express.Router();
const companyController: CompanyController = new CompanyController();

router.get('/', companyController.getAllCompanies);
router.get('/:id', companyController.getCompanyById);
router.post('/', companyController.createCompany);
router.put('/:id', companyController.updateCompany);
router.delete('/:id', companyController.deleteCompany);

export default router;
