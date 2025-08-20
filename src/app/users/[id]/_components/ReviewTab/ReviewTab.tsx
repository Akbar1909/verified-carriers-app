import Stats from "../Stats";
import PersonalInfo from "../PersonalInfo";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import useGetReviews from "@/hooks/endpoints/reviews/useGetReviews";
import { ReviewList } from "@/components/Review";

interface ReviewTabProps {
  userId: string;
}

const ReviewTab = ({ userId }: ReviewTabProps) => {
  const { searchParams } = useAppNavigation();

  const page = Number(searchParams.get("page") ?? 0);

  const { reviews, pagination, inValidateQuery } = useGetReviews({
    userId,
    page: page + 1,
    size: 10,
  });

  return (
    <div className="grid grid-cols-[1fr_352px] gap-8">
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <h2 className="text-xl-medium text-gray-900">Reviews</h2>
            <span className="text-xl-medium text-gray-400">({pagination?.totalCount})</span>
          </div>
        </div>

         <ReviewList
          pagination={{
            totalPages: pagination.totalPages,
          }}
          inValidateQuery={inValidateQuery}
          list={reviews}
        />
      </section>
      <section>
        <aside className="flex flex-col gap-6">
          <Stats userId={userId} />
          <PersonalInfo userId={userId} />
        </aside>
      </section>
    </div>
  );
};

export default ReviewTab;
