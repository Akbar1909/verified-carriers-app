import { request } from "@/services/request";
import {
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

const useGetQuoteById = (
  params: { id: string },
  queryOptions?: Partial<UseQueryOptions>
) => {
  
  const url = `/quotes/${params.id}`;

  const state = useQuery({
    queryKey: [url, params],
    queryFn: () => request.get(url),
    select: (res) => res?.data,
    enabled:typeof params.id === 'string',
    ...queryOptions
  });

  return {
    ...state
  }
};

export default useGetQuoteById;
