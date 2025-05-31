export interface File {
    id: string;
    createdAt: string;
    originalName: string;
    filename: string;
    path: string;
    mimeType: string;
    size: number;
    userId: string | null;
    companyLogoId: string | null;
    reviewPhotoId: string | null;
  }
  
  export interface CompanyLogo {
    id: string;
    createdAt: string;
    companyId: string;
    file: File;
  }
  
  export interface Service {
    id: string;
    createdAt: string;
    serviceName: string;
    description: string;
    companyId: string;
  }
  
  export interface ContactInformation {
    id: string;
    createdAt: string;
    phone: string;
    email: string;
    officeAddress: string;
    contactType: string;
    companyId: string;
  }
  
  export interface CompanyModel {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    firstName: string;
    lastName: string;
    website: string;
    salesEmail: string;
    contactPhone: string;
    mcNumber: string;
    usdotNumber: string;
    foundingYear: number;
    totalEmployees: number;
    aboutCompany: string;
    workEmail: string;
    password: string;
    registrationStatus: string;
    isVerified: boolean;
    verifiedAt: string | null;
    verifiedBy: string | null;
    companyLogos: CompanyLogo[];
    services: Service[];
    contactInformation: ContactInformation[];
  }