import { request } from "@/services/request";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const useGetCurrentCompany = (options?:Partial<UseQueryOptions<any,any>>) => {
  
  const url = "/companies/me";
  const queryKey = [url];


  const state = useQuery({
    queryKey,
    queryFn: () => request.get(url),
    select:res=>res?.data,
    ...options
  });

  const company=state.data || {}



  return {
    ...state,
    company
  };
};

export default useGetCurrentCompany;
