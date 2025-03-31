import Avatar from "@/components/Avatar";
import CompanyShortView from "@/components/CompanyShortView";
import StarRating from "@/components/Stars";
import { VerifiedIcon } from "@/components/SvgIcons";
import Link from "next/link";
import React from "react";

const SimilarCompanies = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl-medium text-gray-900 mb-4">
        People who looked at this company also looked at
      </h3>

      <div className="flex flex-col gap-4">
        {new Array(4).fill({}).map((_, i) => (
          <CompanyShortView key={i} />
        ))}
      </div>
    </div>
  );
};

export default SimilarCompanies;
