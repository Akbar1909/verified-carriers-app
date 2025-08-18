import CompanyShortView from "@/components/CompanyShortView";
import useGetCompaniesLookedAt from "@/hooks/endpoints/companies/useGetCompaniesLookedAt";
import React from "react";

interface SimilarCompaniesProps{
  companyId:string;
} 

const SimilarCompanies = ({companyId}:SimilarCompaniesProps) => {

  const {companies} = useGetCompaniesLookedAt({companyId})


  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl-medium text-gray-900 mb-4">
        People who looked at this company also looked at
      </h3>

      <div className="flex flex-col gap-4">
        {companies.map((company, i) => (
          <CompanyShortView company={company} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SimilarCompanies;
