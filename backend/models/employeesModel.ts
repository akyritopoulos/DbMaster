import { PoolClient } from 'pg';
import pool from '../services/db-pool';
import { Company } from './companyModel';

export interface Employee {
  id: number;
  role: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  city: string;
  address: string;
  status: string;
  birth_date: Date;
  hire_date: Date;
  termination_date: Date;
  salary: number;
  company_id: number;
  company?: Company;
}

export class EmployeesModel {
  static async createEmployee(employee: Employee): Promise<Employee | null> {
    const client: PoolClient = await pool.connect();

    try {
      const {
        role,
        first_name,
        last_name,
        email,
        phone,
        city,
        address,
        status,
        birth_date,
        hire_date,
        termination_date,
        salary,
        company_id,
      } = employee;

      const result = await client.query(
        'INSERT INTO employees (role, first_name, last_name, email, phone, city, address, status, birth_date, hire_date, termination_date, salary, company_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
        [
          role,
          first_name,
          last_name,
          email,
          phone,
          city,
          address,
          status,
          birth_date,
          hire_date,
          termination_date,
          salary,
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

  static async getEmployeeById(id: number): Promise<Employee | null> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query(
        'SELECT * FROM employees WHERE id = $1',
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

  static async getAllEmployees(): Promise<Employee[]> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query('SELECT * FROM employees');
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async updateEmployee(
    id: number,
    employeeData: Employee
  ): Promise<Employee | null> {
    const client: PoolClient = await pool.connect();

    try {
      const {
        role,
        first_name,
        last_name,
        email,
        phone,
        city,
        address,
        status,
        birth_date,
        hire_date,
        termination_date,
        salary,
        company_id,
      } = employeeData;

      const result = await client.query(
        'UPDATE employees SET role = $1, first_name = $2, last_name = $3, email = $4, phone = $5, city = $6, address = $7, status = $8, birth_date = $9, hire_date = $10, termination_date = $11, salary = $12, company_id = $13 WHERE id = $14 RETURNING *',
        [
          role,
          first_name,
          last_name,
          email,
          phone,
          city,
          address,
          status,
          birth_date,
          hire_date,
          termination_date,
          salary,
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

  static async deleteEmployee(id: number): Promise<Employee | null> {
    const client: PoolClient = await pool.connect();

    try {
      const result = await client.query(
        'DELETE FROM employees WHERE id = $1 RETURNING *',
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
