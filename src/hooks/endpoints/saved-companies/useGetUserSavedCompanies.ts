import { request } from "@/services/request";
import { returnArray } from "@/utils/common";
import { useQuery, useQueryClient, UseQueryOptions } from "@tanstack/react-query";

const useGetUserSavedCompanies = (
  params: {
    userId: string;
  },
  options?: Partial<UseQueryOptions>
) => {
  const queryClient=useQueryClient()
  const url = `/saved-companies/${params.userId}`;

  const queryKey = [url, params];

  const state = useQuery({
    queryKey,
    queryFn: () => request.get(url),
    select: (res) => res?.data,
    ...options,
  });

  const inValidateQuery=()=>queryClient.invalidateQueries({queryKey})

  const companies=returnArray(state.data);

  return {
    inValidateQuery,
    companies,
    ...state
  }
};

export default useGetUserSavedCompanies;
