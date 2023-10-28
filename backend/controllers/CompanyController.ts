import { Request, Response } from 'express';
import { CompanyService } from '../services/CompanyService';

const companyService: CompanyService = new CompanyService();

export class CompanyController {
    async getAllCompanies(req: Request, res: Response) {
      try {
        const companies = await companyService.getAllCompanies();
        res.json(companies);
      } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ message: error.message });
        } else {
          res.status(500).json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
        }
      }
    }

  async getCompanyById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const company = await companyService.getCompanyById(parseInt(id));
      if (company) {
        res.json(company);
      } else {
        res.status(404).json({ message: 'Company not found' });
      }
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ message: error.message });
        } else {
          res.status(500).json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
        }
      }
    }

  async createCompany(req: Request, res: Response) {
    const companyData = req.body;
    try {
      const newCompany = await companyService.createCompany(companyData);
      res.status(201).json(newCompany);
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ message: error.message });
        } else {
          res.status(500).json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
        }
      }
    }

  async updateCompany(req: Request, res: Response) {
    const { id } = req.params;
    const companyData = req.body;
    try {
      const updatedCompany = await companyService.updateCompany(parseInt(id), companyData);
      if (updatedCompany) {
        res.json(updatedCompany);
      } else {
        res.status(404).json({ message: 'Company not found' });
      }
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ message: error.message });
        } else {
          res.status(500).json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
        }
      }
    }

  async deleteCompany(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedCompany = await companyService.deleteCompany(parseInt(id));
      if (deletedCompany) {
        res.json(deletedCompany);
      } else {
        res.status(404).json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
      }
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ message: error.message });
        } else {
          res.status(500).json({ message: 'Σφάλμα κατά την επεξεργασία του αιτήματος' });
        }
      }
    }
}
