import { Request, Response } from 'express';
import { EmployeesService } from '../services/EmployeesService';

const employeesService: EmployeesService = new EmployeesService();

export class EmployeesController {
  async getAllEmployees(req: Request, res: Response) {
    try {
      const employees = await employeesService.getAllEmployees();
      res.json(employees);
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

  async getEmployeeById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const employees = await employeesService.getEmployeeById(parseInt(id));
      if (employees) {
        res.json(employees);
      } else {
        res.status(404).json({ message: 'Employees not found' });
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

  async createEmployee(req: Request, res: Response) {
    const employeeData = req.body;
    try {
      const newEmployee = await employeesService.createEmployee(employeeData);
      res.status(201).json(newEmployee);
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

  async updateEmployee(req: Request, res: Response) {
    const { id } = req.params;
    const employeeData = req.body;
    try {
      const updatedEmployee = await employeesService.updateEmployee(
        parseInt(id),
        employeeData
      );
      if (updatedEmployee) {
        res.json(updatedEmployee);
      } else {
        res.status(404).json({ message: 'Employee not found' });
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

  async deleteEmployee(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deleteEmployee = await employeesService.deleteEmployee(
        parseInt(id)
      );
      if (deleteEmployee) {
        res.json(deleteEmployee);
      } else {
        res
          .status(404)
          .json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
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
