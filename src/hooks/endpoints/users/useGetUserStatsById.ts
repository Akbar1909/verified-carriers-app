import { request } from "@/services/request";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const useGetUserStatsById = (
  params: { id: string },
  options?: Partial<UseQueryOptions<any, any>>
) => {
  const url = `/users/${params.id}/stats`;
  const queryKey = [url, params];

  const state = useQuery({
    queryKey,
    queryFn: () => request.get(url),
    select:res=>res.data,
    ...options,
  });

  

  return state
};

export default useGetUserStatsById;
