import { request } from "@/services/request";
import { returnArray } from "@/utils/common";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const useGetCompaniesCount = (
  params?: Record<string, any>,
  queryOptions?: Partial<UseQueryOptions<any, any>>
) => {
  const state = useQuery({
    queryKey: ["companies/count"],
    queryFn: () => request.get("/companies/count"),
    ...queryOptions,
  });

  const preparedData = state.data?.data || {};

  const services = returnArray(preparedData?.companyCountsByService);

  return {
    ...state,
    services,
    preparedData,
  };
};

export default useGetCompaniesCount;
