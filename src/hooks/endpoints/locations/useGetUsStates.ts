import { request } from "@/services/request";
import { returnArray } from "@/utils/common";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const useGetUsStates = (options:Partial<UseQueryOptions<any,any>>) => {
  const url = "/locations/us-states";
  const queryKey = [url];

  const state = useQuery({
    queryKey,
    queryFn: () => request.get(url),
    select: (res) => res?.data,
    ...options
  });

  const usStates = returnArray(state.data);

  return {
    usStates,
    ...state,
  };
};

export default useGetUsStates;
