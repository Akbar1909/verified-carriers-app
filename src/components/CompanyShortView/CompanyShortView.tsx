
import Avatar from "../Avatar";
import StarRating from "../Stars";
import Link from "next/link";
import { VerifiedIcon } from "../SvgIcons";

const CompanyShortView = () => {
  return (
    <article
    
      className="bg-white px-6 flex rounded-lg flex-col py-4 shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)]"
    >
      <Avatar
        className="w-20 h-20 rounded-sm mb-2"
        url="/images/broadway.png"
      />
      <p className="text-md-semibold text-gray-900 mb-1.5">
        Broadway Auto Transport
      </p>
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-md-medium text-gray-500">4.9</span>
        <StarRating size="16px" rating={4} />
        <Link className="text-sm-medium text-gray-500" href="#">
          165 reviews
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="px-3.5 py-1 text-orange-700 text-sm-medium bg-orange-50 rounded-sm">
          Top Rated
        </div>
        <div className="flex items-center gap-0.5">
          <VerifiedIcon />
          <span className="text-sm-medium text-gray-500">Verified company</span>
        </div>
      </div>
    </article>
  );
};

export default CompanyShortView;
