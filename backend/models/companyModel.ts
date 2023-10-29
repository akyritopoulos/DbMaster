import { PoolClient } from 'pg';
import pool from '../services/db-pool';

export interface Company {
  id: number;
  company_name: string;
  email: string;
  phone: number;
  status: string;
  start_date: Date;
  city: string;
  address: string;
  zip_code: string;
}

export class CompanyModel {
  static async createCompany(company: Company): Promise<Company | null> {
    const client: PoolClient = await pool.connect();

    try {
      const {
        company_name,
        email,
        phone,
        status,
        start_date,
        city,
        address,
        zip_code,
      } = company;
      const result = await client.query(
        'INSERT INTO company (company_name, email, phone, status, start_date, city, address, zip_code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id, company_name, email, phone, status, start_date, city, address, zip_code;',
        [
          company_name,
          email,
          phone,
          status,
          start_date,
          city,
          address,
          zip_code,
        ]
      );

      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async getCompanyById(id: number): Promise<Company | null> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM company WHERE id = $1', [
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

  static async getAllCompanies(): Promise<Company[]> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM company');
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async updateCompany(
    id: number,
    companyData: Company
  ): Promise<Company | null> {
    const client: PoolClient = await pool.connect();

    try {
      const {
        company_name,
        email,
        phone,
        status,
        start_date,
        city,
        address,
        zip_code,
      } = companyData;
      const result = await client.query(
        'UPDATE company SET company_name = $1, email = $2, phone = $3, status = $4, start_date = $5, city = $6, address = $7, zip_code = $8 WHERE id = $9 RETURNING *',
        [
          company_name,
          email,
          phone,
          status,
          start_date,
          city,
          address,
          zip_code,
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

  static async deleteCompany(id: number): Promise<Company | null> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query(
        'DELETE FROM company WHERE id = $1 RETURNING *',
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
