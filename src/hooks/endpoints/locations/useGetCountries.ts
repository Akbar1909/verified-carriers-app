import { request } from "@/services/request";
import { returnArray } from "@/utils/common";
import { useQuery } from "@tanstack/react-query";

const useGetCountries = () => {
  const url = "/locations/countries";
  const queryKey = [url];

  const state = useQuery({
    queryKey,
    queryFn: () => request.get(url),
    select:res=>res?.data
  });

  console.log(state.data)

  const countries=returnArray(state.data)

  return {
    countries,
    ...state,
  };
};

export default useGetCountries;
