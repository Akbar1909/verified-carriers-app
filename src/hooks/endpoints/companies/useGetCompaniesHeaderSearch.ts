import { request } from "@/services/request";
import { returnArray } from "@/utils/common";
import { useQuery } from "@tanstack/react-query";

const useGetCompaniesHeaderSearch = (params: { keyword: string }) => {
  const url = "/companies/header-search";

  const state = useQuery({
    queryKey: [url, params],
    queryFn: () => request.get(url, { params }),
    select: (res) => res?.data,
  });

  const companies=returnArray(state.data);

  return {
    ...state,
    companies
  };
};

export default useGetCompaniesHeaderSearch;
