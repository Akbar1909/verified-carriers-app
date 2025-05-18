import { request } from "@/services/request";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useSession, getSession } from "next-auth/react";

const useGetMe = (options?:Partial<UseQueryOptions<any,any>>) => {
  const session=useSession()
  const url = "/users/me";
  const queryKey = [url];

 


  const state = useQuery({
    queryKey,
    queryFn: () => request.get(url),
    select:res=>res?.data,
    ...options
    // enabled:session?.user?.role === 'user'
  });

  const user=state.data || {}



  return {
    ...state,
    user
  };
};

export default useGetMe;
