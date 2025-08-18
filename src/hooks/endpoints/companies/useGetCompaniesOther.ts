import { CompanyModel } from "@/data/companies/company-model";
import { request } from "@/services/request";
import { returnArray } from "@/utils/common";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useGetCompaniesOther = (params: { companyId: string }) => {
  const queryClient = useQueryClient();
  const url = `/companies/${params.companyId}/other-reviews`;

  const queryKey = [url, params];

  const state = useQuery({
    queryKey,
    queryFn: () => request.get(url),
    select: (res) => res?.data,
  });


  const companies = returnArray(state.data) as CompanyModel[];


  const inValidateQuery = () => queryClient.invalidateQueries({ queryKey });

  return {
    ...state,
    inValidateQuery,
    companies,
  };
};

export default useGetCompaniesOther;
