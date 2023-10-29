import { Request, Response } from 'express';
import { ProductsService } from '../services/ProductsService';

const productsService: ProductsService = new ProductsService();

export class ProductsController {
  async getAllProducts(req: Request, res: Response) {
    try {
      const products = await productsService.getAllProducts();
      res.json(products);
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

  async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const product = await productsService.getProductById(parseInt(id));
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'To προϊόν δεν βρέθηκε' });
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

  async createProduct(req: Request, res: Response) {
    const productData = req.body;
    try {
      const newProduct = await productsService.createProduct(productData);
      res.status(201).json(newProduct);
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

  async updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    const productData = req.body;
    try {
      const updateProduct = await productsService.updateProduct(
        parseInt(id),
        productData
      );
      if (updateProduct) {
        res.json(updateProduct);
      } else {
        res.status(404).json({ message: 'To προϊόν δεν βρέθηκε' });
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

  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deleteProduct = await productsService.deleteProduct(parseInt(id));
      if (deleteProduct) {
        res.json(deleteProduct);
      } else {
        res.status(404).json({ message: 'To προϊόν δεν βρέθηκε' });
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
