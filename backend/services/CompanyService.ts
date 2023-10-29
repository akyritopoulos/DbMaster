import { CompanyModel, Company } from '../models/companyModel';

export class CompanyService {
  async getAllCompanies(): Promise<Company[]> {
    return await CompanyModel.getAllCompanies();
  }

  async getCompanyById(id: number): Promise<Company | null> {
    return await CompanyModel.getCompanyById(id);
  }

  async createCompany(companyData: Company): Promise<Company | null> {
    return await CompanyModel.createCompany(companyData);
  }

  async updateCompany(
    id: number,
    companyData: Company
  ): Promise<Company | null> {
    return await CompanyModel.updateCompany(id, companyData);
  }

  async deleteCompany(id: number): Promise<Company | null> {
    return await CompanyModel.deleteCompany(id);
  }
}
