import { PoolClient } from 'pg';
import pool from '../services/db-pool';
import { Company } from './companyModel';

export interface Categories {
  id: number;
  product_id: number;
  category_name: string;
  description: string;
  company_id: number;
  company?: Company;
}

export class CategoriesModel {
  static async createCategory(
    categories: Categories
  ): Promise<Categories | null> {
    const client: PoolClient = await pool.connect();

    try {
      const { product_id, category_name, description, company_id } = categories;

      const result = await client.query(
        'INSERT INTO categories (product_id, category_name, description, company_id) VALUES ($1, $2, $3, $4) RETURNING *',
        [product_id, category_name, description, company_id]
      );

      if (result.rows.length > 0) {
        return result.rows[0];
      } else {
        return null;
      }
    } finally {
      client.release();
    }
  }

  static async getCategoryById(id: number): Promise<Categories | null> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query(
        'SELECT * FROM categories WHERE id = $1',
        [id]
      );

      if (result.rows.length > 0) {
        return result.rows[0];
      } else {
        return null;
      }
    } finally {
      client.release();
    }
  }

  static async getAllCategories(): Promise<Categories[]> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM categories');
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async updateCategory(
    id: number,
    categoriesData: Categories
  ): Promise<Categories | null> {
    const client: PoolClient = await pool.connect();

    try {
      const { product_id, category_name, description, company_id } =
        categoriesData;

      const result = await client.query(
        'UPDATE categories SET product_id = $1, category_name = $2, description = $3, company_id = $4 WHERE id = $5 RETURNING *',
        [product_id, category_name, description, company_id, id]
      );

      if (result.rows.length > 0) {
        return result.rows[0];
      } else {
        return null;
      }
    } finally {
      client.release();
    }
  }

  static async deleteCategory(id: number): Promise<Categories | null> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query(
        'DELETE FROM categories WHERE id = $1 RETURNING *',
        [id]
      );

      if (result.rows.length > 0) {
        return result.rows[0];
      } else {
        return null;
      }
    } finally {
      client.release();
    }
  }
}
