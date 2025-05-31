"use client";
import useGetCurrentCompany from "@/hooks/endpoints/companies/useGetCurrentCompany";

interface CompanyLayoutProps {
  children: any;
}

const CompanyLayout = ({ children }: CompanyLayoutProps) => {
  useGetCurrentCompany();

  return <>{children}</>;
};

export default CompanyLayout;
