import { PoolClient } from 'pg';
import pool from '../services/db-pool';
import { Categories } from './categoriesModel';
import { Company } from './companyModel';

export interface Product {
  id: number;
  product_name: string;
  category_id: number;
  description: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  company_id: number;
  category?: Categories;
  company?: Company;
}

export class ProductsModel {
  static async createProduct(product: Product): Promise<Product | null> {
    const client: PoolClient = await pool.connect();

    try {
      const {
        product_name,
        category_id,
        description,
        size,
        color,
        quantity,
        price,
        company_id,
      } = product;

      const result = await client.query(
        'INSERT INTO products (product_name, category_id, description, size, color, quantity, price, company_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [
          product_name,
          category_id,
          description,
          size,
          color,
          quantity,
          price,
          company_id,
        ]
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

  static async getProductById(id: number): Promise<Product | null> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query(
        'SELECT * FROM products WHERE id = $1',
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

  static async getAllProducts(): Promise<Product[]> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM products');
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async updateProduct(
    id: number,
    productData: Product
  ): Promise<Product | null> {
    const client: PoolClient = await pool.connect();

    try {
      const {
        product_name,
        category_id,
        description,
        size,
        color,
        quantity,
        price,
        company_id,
      } = productData;

      const result = await client.query(
        'UPDATE products SET product_name = $1, category_id = $2, description = $3, size = $4, color = $5, quantity = $6, price = $7, company_id = $8 WHERE id = $9 RETURNING *',
        [
          product_name,
          category_id,
          description,
          size,
          color,
          quantity,
          price,
          company_id,
          id,
        ]
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

  static async deleteProduct(id: number): Promise<Product | null> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query(
        'DELETE FROM products WHERE id = $1 RETURNING *',
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
