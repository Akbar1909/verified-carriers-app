import { request } from '@/services/request'
import { returnArray } from '@/utils/common'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

const useGetServices = (queryOptions?:Partial<UseQueryOptions<any,any>>) => {
  const state=useQuery({
    queryKey:['/services'],
    queryFn:()=>request.get('/services'),
    ...queryOptions
  })


  const options=returnArray(state.data?.data).map((option)=>({label:option?.serviceLabel, value:option?.id}));



  return {
    options,
    ...state
  }
}

export default useGetServices