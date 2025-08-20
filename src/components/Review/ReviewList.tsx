import Pagination from "@/components/Pagination";
import ReviewCard from "./ReviewCard";
import Show from "../Show";

interface ReviewListProps {
  list: Array<any>[];
  pagination: {
    totalPages: number;
  };
  inValidateQuery: () => void;
}

const ReviewList = ({ list, pagination, inValidateQuery }: ReviewListProps) => {
  return (
    <div className="flex flex-col gap-6">
      {list.map((review, i) => (
        <ReviewCard inValidateQuery={inValidateQuery} review={review} key={i} />
      ))}
      <Show when={list.length > 0}>
        <Pagination totalPages={pagination.totalPages} />
      </Show>
    </div>
  );
};

export default ReviewList;
