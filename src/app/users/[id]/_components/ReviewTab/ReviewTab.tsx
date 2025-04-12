import ReviewList from "./ReviewList";
import Stats from "../Stats";
import PersonalInfo from "../PersonalInfo";


const ReviewTab = () => {
  return (
    <div className="grid grid-cols-[1fr_352px] gap-8">
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <h2 className="text-xl-medium text-gray-900">Reviews</h2>
            <span className="text-xl-medium text-gray-400">(428)</span>
          </div>
        </div>

      
        <ReviewList/>
      </section>
      <section>
        <aside className="flex flex-col gap-6">
          <Stats/>
          <PersonalInfo/>
       
       
   
        </aside>
      </section>
    </div>
  );
};

export default ReviewTab;
