import { CompanyModel } from "@/data/companies/company-model";
import { request } from "@/services/request";
import { returnArray } from "@/utils/common";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useGetReviews = (filterDto: {
  page: number;
  size: number;
  companyId?:string
}) => {
  const queryClient = useQueryClient();

  const url = "/reviews";

  const queryKey = [url, filterDto];

  const state = useQuery({
    queryKey,
    queryFn: () => request.get(url, { params: filterDto }),
    select: (res) => res?.data,
  });

  const reviews = returnArray(state.data?.data) as CompanyModel[];
  const pagination = state.data?.pagination || {};
  const total = pagination?.totalCount || 0;

  const inValidateQuery = () => queryClient.invalidateQueries({ queryKey });

  return {
    ...state,
    inValidateQuery,
    pagination,
    total,
    reviews,
  };
};

export default useGetReviews;
