import { PoolClient } from 'pg';
import pool from '../services/db-pool';
import { Company } from './companyModel';

export interface Customer {
  id: number;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  city: string;
  address: string;
  company_id: number;
  company?: Company;
}

export class CustomersModel {
  static async createCustomer(customer: Customer): Promise<Customer | null> {
    const client: PoolClient = await pool.connect();

    try {
      const {
        username,
        password,
        first_name,
        last_name,
        email,
        phone,
        city,
        address,
        company_id,
      } = customer;

      const result = await client.query(
        'INSERT INTO customers (username, password, first_name, last_name, email, phone, city, address, company_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [
          username,
          password,
          first_name,
          last_name,
          email,
          phone,
          city,
          address,
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

  static async getCustomerById(id: number): Promise<Customer | null> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query(
        'SELECT * FROM customers WHERE id = $1',
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

  static async getAllCustomers(): Promise<Customer[]> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM customers');
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async updateCustomer(
    id: number,
    customerData: Customer
  ): Promise<Customer | null> {
    const client: PoolClient = await pool.connect();

    try {
      const {
        username,
        password,
        first_name,
        last_name,
        email,
        phone,
        city,
        address,
        company_id,
      } = customerData;

      const result = await client.query(
        'UPDATE customers SET username = $1, password = $2, first_name = $3, last_name = $4, email = $5, phone = $6, city = $7, address = $8, company_id = $9 WHERE id = $10 RETURNING *',
        [
          username,
          password,
          first_name,
          last_name,
          email,
          phone,
          city,
          address,
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

  static async deleteCustomer(id: number): Promise<Customer | null> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query(
        'DELETE FROM customers WHERE id = $1 RETURNING *',
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
