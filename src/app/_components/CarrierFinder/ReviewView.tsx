import StarRating from "@/components/Stars";
import TruncatedText from "@/components/TruncatedText";
import React from "react";

const ReviewView = () => {
  return (
    <div className="border flex flex-col border-gray-200 bg-white w-61 h-full shadow-[0_2px_4px_rgba(16,24,40,0.06),0_4px_8px_rgba(16,24,40,0.1)]">
      <StarRating rating={3} className="border-b border-gray-200 p-4 w-full" />

      <div className="p-4">
        <TruncatedText lines={7} className='text-gray-900 text-xs'>
          “Used the company for transportation of two vehicles. They are a
          broker, so communication will always be a struggle since it’s the
          middle man. However, I have successfully used them twice for two
          different vehicles on short notice ...”
        </TruncatedText>
      </div>
    </div>
  );
};

export default ReviewView;
