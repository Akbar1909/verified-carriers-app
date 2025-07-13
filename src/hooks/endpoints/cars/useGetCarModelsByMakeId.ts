import { request } from "@/services/request";
import { returnArray } from "@/utils/common";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const useGetCarModelsByMakeId = (
  params: { makeId: number; search: string },
  queryOptions?: Partial<UseQueryOptions>
) => {
  const { makeId, ...computedParams } = params;
  const url = `/cars/make/${makeId}/models`;

  const queryKey = [url, computedParams];

  const state = useQuery({
    queryKey,
    queryFn: () => request.get(url, { params: computedParams }),
    enabled:typeof params.makeId === 'number',
    ...queryOptions,
  });

    const options=returnArray(state.data?.data).map(item=>({label:item.name,value:item.id}))
  
  return {
    ...state,
    options
  };
};

export default useGetCarModelsByMakeId;
