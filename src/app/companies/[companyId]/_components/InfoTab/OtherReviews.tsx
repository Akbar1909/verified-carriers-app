import Avatar from "@/components/Avatar";
import StarRating from "@/components/Stars";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const OtherReviews = () => {
  return (
    <div className="flex flex-col gap-4">
 <h3 className='text-xl-medium text-gray-900 mb-4'>Other reviews</h3>

      <article className="grid grid-cols-3 gap-x-4 gap-y-4">
        {new Array(6).fill({}).map((_, i) => (
          <article
            key={i}
            className={
                twMerge("flex items-center gap-4 p-5 bg-white shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] rounded-lg")
            }
          >
            <Avatar
              url="/images/broadway.png"
              
              className="rounded-none w-[54px] h-[54px]"
            />

            <div className="flex flex-col gap-1.5">
              <h3 className="text-md-semibold text-gray-900">
                Review company name
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-md-medium text-gray-500">4.9</span>
                <StarRating size="16px" rating={4} />
                <Link
                  className="text-sm-medium underline text-gray-500"
                  href="#"
                >
                  165 reviews
                </Link>
              </div>
            </div>
          </article>
        ))}
      </article>
    </div>
  );
};

export default OtherReviews;
