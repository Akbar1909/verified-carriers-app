import { CompanyModel } from '@/data/companies/company-model'
import { request } from '@/services/request'
import { returnArray } from '@/utils/common'
import { useQuery } from '@tanstack/react-query'

const useGetCompanies = () => {
  const state=useQuery({
    queryKey:['companies'],
    queryFn:()=>request.get("/companies"),
  })

  const companies=returnArray(state.data?.data) as CompanyModel[];


  return {
    ...state,
    companies
  }
}

export default useGetCompanies