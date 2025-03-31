import Select from "@/components/Select";
import Link from "next/link";
import ReviewList from "./ReviewList";
import AboutCompany from "./AboutCompany";
import Services from "./Services";
import OtherReviews from "./OtherReviews";
import SimilarCompanies from "./SimilarCompanies";

const ReviewTab = () => {
  return (
    <div className="grid grid-cols-[1fr_352px] gap-8">
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <h2 className="text-xl-medium text-gray-900">Reviews</h2>
            <span className="text-xl-medium text-gray-400">(428)</span>
          </div>
          <Select options={[]} rootClassName="w-40" />
        </div>

      
        <ReviewList/>
      </section>
      <section>
        <aside className="flex flex-col gap-6">
           <AboutCompany/>
           <Services/>
           <OtherReviews/>
           <SimilarCompanies/>
        </aside>
      </section>
    </div>
  );
};

export default ReviewTab;
