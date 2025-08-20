import Select from "@/components/Select";
import ReviewList from "@/components/Review/ReviewList";
import AboutCompany from "./AboutCompany";
import Services from "./Services";
import OtherReviews from "./OtherReviews";
import SimilarCompanies from "./SimilarCompanies";
import useGetReviews from "@/hooks/endpoints/reviews/useGetReviews";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import Show from "@/components/Show";
import Empty from "@/components/Empty";

interface ReviewTabProps {
  companyId: string;
}

const ReviewTab = ({ companyId }: ReviewTabProps) => {
  const { searchParams } = useAppNavigation();
  const { router } = useAppNavigation();

  const page = Number(searchParams.get("page") ?? 0);

  const { reviews, pagination, inValidateQuery, isSuccess } = useGetReviews({
    companyId,
    page: page + 1,
    size: 10,
  });

  return (
    <div className="grid grid-cols-[1fr_352px] gap-8">
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <h2 className="text-xl-medium text-gray-900">Reviews</h2>
            <span className="text-xl-medium text-gray-400">
              ({pagination.totalCount})
            </span>
          </div>
          <Select options={[]} rootClassName="w-40" />
        </div>

        <ReviewList
          pagination={{
            totalPages: pagination.totalPages,
          }}
          inValidateQuery={inValidateQuery}
          list={reviews}
        />

        <Show when={isSuccess && reviews.length === 0}>
          <Empty
            actionLabel="Write a review"
            onAction={() => {
              router.push(`/review/${companyId}`);
            }}
          />
        </Show>
      </section>
      <section>
        <aside className="flex flex-col gap-6">
          <AboutCompany companyId={companyId} />
          <Services companyId={companyId} />
          <OtherReviews companyId={companyId} />
          <SimilarCompanies companyId={companyId} />
        </aside>
      </section>
    </div>
  );
};

export default ReviewTab;
