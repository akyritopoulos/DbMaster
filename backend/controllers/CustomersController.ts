import { Request, Response } from 'express';
import { CustomersService } from '../services/CustomersService';

const customersService: CustomersService = new CustomersService();

export class CustomersController {
  async getAllCustomers(req: Request, res: Response) {
    try {
      const customers = await customersService.getAllCustomers();
      res.json(customers);
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

  async getCustomerById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const customer = await customersService.getCustomerById(parseInt(id));
      if (customer) {
        res.json(customer);
      } else {
        res.status(404).json({ message: 'Customer not found' });
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

  async createCustomer(req: Request, res: Response) {
    const customerData = req.body;
    try {
      const newCustomer = await customersService.createCustomer(customerData);
      res.status(201).json(newCustomer);
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

  async updateCustomer(req: Request, res: Response) {
    const { id } = req.params;
    const customerData = req.body;
    try {
      const updatedCustomer = await customersService.updateCustomer(
        parseInt(id),
        customerData
      );
      if (updatedCustomer) {
        res.json(updatedCustomer);
      } else {
        res.status(404).json({ message: 'Customer not found' });
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

  async deleteCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedCustomer = await customersService.deleteCustomer(
        parseInt(id)
      );
      if (deletedCustomer) {
        res.json(deletedCustomer);
      } else {
        res.status(404).json({ message: 'Customer not found' });
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
