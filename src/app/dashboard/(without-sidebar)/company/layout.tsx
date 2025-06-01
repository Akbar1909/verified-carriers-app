"use client";
import Container from "@/components/Container";
import useGetCurrentCompany from "@/hooks/endpoints/companies/useGetCurrentCompany";

interface CompanyLayoutProps {
  children: any;
}

const CompanyLayout = ({ children }: CompanyLayoutProps) => {
  useGetCurrentCompany();

  return <Container>{children}</Container>;
};

export default CompanyLayout;
