import { request } from "@/services/request";
import { returnArray } from "@/utils/common";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useGetAllUsers = (params: { page: number; size: number }) => {
  const queryClient = useQueryClient();

  const url = "/users";

  const queryKey = [url, params];

  const state = useQuery({
    queryFn: () => request.get(url, {params}),
    queryKey,
    select:res=>res?.data
  });

  const inValidateQuery = () => queryClient.invalidateQueries({ queryKey });

  const list=returnArray(state?.data?.data);
  const pagination=state.data?.pagination || {};

  console.log({list}, state.data)

  return {
    inValidateQuery,
    pagination,
    list,
    ...state,
  };
};

export default useGetAllUsers;
