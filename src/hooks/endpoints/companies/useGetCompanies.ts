import { CompanyModel } from "@/data/companies/company-model";
import { request } from "@/services/request";
import { returnArray } from "@/utils/common";
import { useQuery } from "@tanstack/react-query";

const useGetCompanies = (filterDto: { experience?: number }) => {
  const state = useQuery({
    queryKey: ["companies", filterDto],
    queryFn: () => request.get("/companies", { params: filterDto }),
  });


  const companies = returnArray(state.data?.data?.list) as CompanyModel[];
  const total=state?.data?.data?.total || 0;

  return {
    ...state,
    total,
    companies,
  };
};

export default useGetCompanies;
