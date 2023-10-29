import { CustomersModel, Customer } from '../models/customersModel';

export class CustomersService {
  async getAllCustomers(): Promise<Customer[]> {
    return await CustomersModel.getAllCustomers();
  }

  async getCustomerById(id: number): Promise<Customer | null> {
    return await CustomersModel.getCustomerById(id);
  }

  async createCustomer(customerData: Customer): Promise<Customer | null> {
    return await CustomersModel.createCustomer(customerData);
  }

  async updateCustomer(
    id: number,
    customerData: Customer
  ): Promise<Customer | null> {
    return await CustomersModel.updateCustomer(id, customerData);
  }

  async deleteCustomer(id: number): Promise<Customer | null> {
    return await CustomersModel.deleteCustomer(id);
  }
}
