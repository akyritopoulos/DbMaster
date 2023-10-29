import { PoolClient } from 'pg';
import pool from '../services/db-pool';
import { Customer } from './customersModel';
import { Company } from './companyModel';

export interface Order {
  id: number;
  order_date: Date;
  customer_id: number;
  total_amount: number;
  company_id: number;
  customer?: Customer;
  company?: Company;
}

export class OrdersModel {
  static async createOrder(order: Order): Promise<Order | null> {
    const client: PoolClient = await pool.connect();

    try {
      const { order_date, customer_id, total_amount, company_id } = order;

      const result = await client.query(
        'INSERT INTO orders (order_date, customer_id, total_amount, company_id) VALUES ($1, $2, $3, $4) RETURNING *',
        [order_date, customer_id, total_amount, company_id]
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

  static async getOrderById(id: number): Promise<Order | null> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM orders WHERE id = $1', [
        id,
      ]);

      if (result.rows.length > 0) {
        return result.rows[0];
      } else {
        return null;
      }
    } finally {
      client.release();
    }
  }

  static async getAllOrders(): Promise<Order[]> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM orders');
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async updateOrder(
    id: number,
    orderData: Order
  ): Promise<Order | null> {
    const client: PoolClient = await pool.connect();

    try {
      const { order_date, customer_id, total_amount, company_id } = orderData;

      const result = await client.query(
        'UPDATE orders SET order_date = $1, customer_id = $2, total_amount = $3, company_id = $4 WHERE id = $5 RETURNING *',
        [order_date, customer_id, total_amount, company_id, id]
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

  static async deleteOrder(id: number): Promise<Order | null> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query(
        'DELETE FROM orders WHERE id = $1 RETURNING *',
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
