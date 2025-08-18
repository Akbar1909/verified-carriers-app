import Pagination from "@/components/Pagination";
import ReviewCard from "./ReviewCard";

interface ReviewListProps {
  list: Array<any>[];
  pagination: {
    totalPages: number;
  };
  inValidateQuery:()=>void;
}

const ReviewList = ({ list, pagination, inValidateQuery }: ReviewListProps) => {
  return (
    <div className="flex flex-col gap-6">
      {list.map((review, i) => (
        <ReviewCard inValidateQuery={inValidateQuery} review={review} key={i} />
      ))}
      <Pagination totalPages={pagination.totalPages} />
    </div>
  );
};

export default ReviewList;
