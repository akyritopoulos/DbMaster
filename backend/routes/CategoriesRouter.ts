import express, { Router, Request, Response } from 'express';
import { CategoriesController } from '../controllers/CategoriesController';

const router: Router = express.Router();
const categoriesController: CategoriesController = new CategoriesController();

router.get('/', categoriesController.getAllCategories);
router.get('/:id', categoriesController.getCategoryById);
router.post('/', categoriesController.createCategory);
router.put('/:id', categoriesController.updateCategory);
router.delete('/:id', categoriesController.deleteCategory);

export default router;
