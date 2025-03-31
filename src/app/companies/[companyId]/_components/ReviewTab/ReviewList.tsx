import Pagination from "@/components/Pagination"
import ReviewCard from "./ReviewCard"

const ReviewList = () => {
  return (
    <div className="flex flex-col gap-6">
        {
            new Array(6).fill({}).map((_,i)=><ReviewCard key={i} />)
        }
        <Pagination totalPages={5}/>
    </div>
  )
}

export default ReviewList