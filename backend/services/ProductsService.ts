import { ProductsModel, Product } from '../models/productsModel';

export class ProductsService {
  async getAllProducts(): Promise<Product[]> {
    return await ProductsModel.getAllProducts();
  }

  async getProductById(id: number): Promise<Product | null> {
    return await ProductsModel.getProductById(id);
  }

  async createProduct(productData: Product): Promise<Product | null> {
    return await ProductsModel.createProduct(productData);
  }

  async updateProduct(
    id: number,
    productData: Product
  ): Promise<Product | null> {
    return await ProductsModel.updateProduct(id, productData);
  }

  async deleteProduct(id: number): Promise<Product | null> {
    return await ProductsModel.deleteProduct(id);
  }
}
