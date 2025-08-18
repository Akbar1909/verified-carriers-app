import { request } from "@/services/request";
import { returnArray } from "@/utils/common";
import {
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";

const useGetCompanyById = (
  id: string,
  queryOptions?: Partial<UseQueryOptions>
) => {
  const url = `/companies/${id}`;
  const queryClient = useQueryClient();

  const queryKey = [url, id];

  const state = useQuery({
    queryKey,
    queryFn: () => request.get(url),
    select: (res) => res?.data,
    ...queryOptions,
  });

  const inValidateQuery = () => queryClient.invalidateQueries({ queryKey });

  const company=state.data || {}

    const companyLogo = returnArray(company.companyLogos).at(0);
  

  return {
    ...state,
    companyLogo,
    company,
    inValidateQuery,
  };
};

export default useGetCompanyById;
