import { request } from "@/services/request";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const useGetUserOne = (
  params: { id: string },
  options?: Partial<UseQueryOptions<any, any>>
) => {
  const url = `/users/${params.id}`;
  const queryKey = [url, params];

  const state = useQuery({
    queryKey,
    queryFn: () => request.get(url),
    select: (res) => res?.data,
    ...options,
  });

  const user = state.data || {};

  return {
    ...state,
    user,
  };
};

export default useGetUserOne;
