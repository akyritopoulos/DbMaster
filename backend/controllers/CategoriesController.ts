import { Request, Response } from 'express';
import { CategoriesService } from '../services/CategoriesService';

const categoriesService: CategoriesService = new CategoriesService();

export class CategoriesController {
  async getAllCategories(req: Request, res: Response) {
    try {
      const categories = await categoriesService.getAllCategories();
      res.json(categories);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res
          .status(500)
          .json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
      }
    }
  }

  async getCategoryById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const categories = await categoriesService.getCategoryById(parseInt(id));
      if (categories) {
        res.json(categories);
      } else {
        res.status(404).json({ message: 'category not found' });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res
          .status(500)
          .json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
      }
    }
  }

  async createCategory(req: Request, res: Response) {
    const categoryData = req.body;
    try {
      const newCategories = await categoriesService.createCategory(
        categoryData
      );
      res.status(201).json(newCategories);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res
          .status(500)
          .json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
      }
    }
  }

  async updateCategory(req: Request, res: Response) {
    const { id } = req.params;
    const categoryData = req.body;
    try {
      const updateCategory = await categoriesService.updateCategory(
        parseInt(id),
        categoryData
      );
      if (updateCategory) {
        res.json(updateCategory);
      } else {
        res.status(404).json({ message: 'Category not found' });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res
          .status(500)
          .json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
      }
    }
  }

  async deleteCategory(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deleteCategory = await categoriesService.deleteCategory(
        parseInt(id)
      );
      if (deleteCategory) {
        res.json(deleteCategory);
      } else {
        res
          .status(404)
          .json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res
          .status(500)
          .json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
      }
    }
  }
}
