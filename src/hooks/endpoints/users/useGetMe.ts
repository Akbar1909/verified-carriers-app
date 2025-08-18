import { request } from "@/services/request";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const useGetMe = (options?: Partial<UseQueryOptions<any, any>>) => {
  const url = "/users/me";
  const queryKey = [url];

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

export default useGetMe;
