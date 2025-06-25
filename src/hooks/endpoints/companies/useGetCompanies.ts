import { CompanyModel } from "@/data/companies/company-model";
import { request } from "@/services/request";
import { returnArray } from "@/utils/common";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useGetCompanies = (filterDto: {
  experience?: number;
  page: number;
  size: number;
}) => {
  const queryClient=useQueryClient()
  
  const queryKey=[ ["companies", filterDto]]

  const state = useQuery({
    queryKey,
    queryFn: () => request.get("/companies", { params: filterDto }),
    select: (res) => res?.data,
  });

  const companies = returnArray(state.data?.data) as CompanyModel[];
  const pagination=state.data?.pagination || {};
  const total = pagination?.totalCount || 0;


  const inValidateQuery=()=>queryClient.invalidateQueries({queryKey})


  return {
    ...state,
    inValidateQuery,
    pagination,
    total,
    companies,
  };
};

export default useGetCompanies;
