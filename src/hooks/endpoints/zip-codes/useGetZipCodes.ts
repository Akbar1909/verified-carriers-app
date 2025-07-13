import { request } from "@/services/request";
import { returnArray } from "@/utils/common";
import { useQuery } from "@tanstack/react-query";

const useGetZipCodes = (params: { q: string }) => {
  const url = "/zip-codes/search";

  const queryKey = [url, params];

  const state = useQuery({
    queryKey,
    queryFn: () => request.get(url, { params }),
    select: (res) => res.data,
  });

  const options = returnArray(state.data).map((z) => ({
    label: `${z.name} — ${z.primary_city}, ${z.state}${
      z.county ? ` (${z.county})` : ""
    }`,
    value: z.id, // or z.id
  }));

  return {
    options,
    ...state,
  };
};

export default useGetZipCodes;
