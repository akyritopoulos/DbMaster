import { CategoriesModel, Categories } from '../models/categoriesModel';

export class CategoriesService {
  async getAllCategories(): Promise<Categories[]> {
    return await CategoriesModel.getAllCategories();
  }

  async getCategoryById(id: number): Promise<Categories | null> {
    return await CategoriesModel.getCategoryById(id);
  }

  async createCategory(categoryData: Categories): Promise<Categories | null> {
    return await CategoriesModel.createCategory(categoryData);
  }

  async updateCategory(
    id: number,
    categoryData: Categories
  ): Promise<Categories | null> {
    return await CategoriesModel.updateCategory(id, categoryData);
  }

  async deleteCategory(id: number): Promise<Categories | null> {
    return await CategoriesModel.deleteCategory(id);
  }
}
