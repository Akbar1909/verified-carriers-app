import { request } from "@/services/request";
import { returnArray } from "@/utils/common";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const useGetCarMakes = (params:{search?:string}, queryOptions?: Partial<UseQueryOptions>) => {
  const url = "/cars/make";

  const queryKey = [url, params];

  const state = useQuery({
    queryKey,
    queryFn: () => request.get(url, {params}),
    ...queryOptions,
  });


  const options=returnArray(state.data?.data).map(item=>({label:item.name,value:item.id}))


  return {
    ...state,
    options
  };
};

export default useGetCarMakes;
