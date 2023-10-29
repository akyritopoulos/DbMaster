import { EmployeesModel, Employee } from '../models/employeesModel';

export class EmployeesService {
  async getAllEmployees(): Promise<Employee[]> {
    return await EmployeesModel.getAllEmployees();
  }

  async getEmployeeById(id: number): Promise<Employee | null> {
    return await EmployeesModel.getEmployeeById(id);
  }

  async createEmployee(employeeData: Employee): Promise<Employee | null> {
    return await EmployeesModel.createEmployee(employeeData);
  }

  async updateEmployee(
    id: number,
    employeeData: Employee
  ): Promise<Employee | null> {
    return await EmployeesModel.updateEmployee(id, employeeData);
  }

  async deleteEmployee(id: number): Promise<Employee | null> {
    return await EmployeesModel.deleteEmployee(id);
  }
}
