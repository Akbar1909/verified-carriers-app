import Avatar from "@/components/Avatar";
import StarRating from "@/components/Stars";
import { ArrowUpRightIcon, BookmarkIcon, VerifiedIcon } from "@/components/SvgIcons";
import TruncatedText from "@/components/TruncatedText";
import Link from "next/link";
import { twMerge } from "tailwind-merge";


interface CompanyViewProps{
    className?:string;
    saved?:boolean;
}

const CompanyView = ({className, saved}:CompanyViewProps) => {
  return (
    <div className={twMerge("p-6 flex flex-col gap-4 border-t border-gray-300 border-r", className)}>
      <div className="flex gap-4">
        <Avatar
          url="/images/broadway.png"
          className="w-18 h-18 rounded-lg"
          size="2xl"
        />

        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between w-full">
          <h3 className="text-lg-semibold text-gray-900">
            Broadway Auto Transport
          </h3>

          <BookmarkIcon className={twMerge(saved && 'fill-gray-700')} />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-md-medium text-gray-500">4.9</span>
            <StarRating rating={3} size="16px" />
            <span className="text-gray-500 text-sm-medium underline">
              165 reviews
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-1 text-orange-700 text-sm-medium bg-orange-50 rounded-sm">
              Top Rated
            </div>
            <div className="flex items-center gap-0.5">
              <VerifiedIcon />
              <span className="text-sm-medium text-gray-500">
                Verified company
              </span>
            </div>
          </div>
        </div>
      </div>
      <TruncatedText lines={2} className="text-sm text-gray-700">
        Broadway Auto Transport is a top rated car transport management company,
        located in New York. As we have 10-year experience in the field of
        vehicle shipping sphere, we can provide
      </TruncatedText>
      <hr className="text-gray-200" />
      <div className="flex items-center gap-8">
        <Link
          href="/companies/1"
          className="text-sm-semibold text-gray-800 flex items-center gap-2 relative after after:content after:absolute after:h-5 after:w-0.25 after:bg-gray-300 after:-right-4"
        >
          View profile
          <ArrowUpRightIcon />
        </Link>

        <div className="flex items-center gap-4">
          {["Cars", "Motorcycles", "Heavy Equipment", "Boats"].map(
            (item, i) => (
              <div className="bg-gray-100 py-0.5 px-2 text-xs-medium rounded-xl" key={i}>
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyView;
