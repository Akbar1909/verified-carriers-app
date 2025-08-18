import Avatar from "@/components/Avatar";
import StarRating from "@/components/Stars";
import useGetCompaniesOther from "@/hooks/endpoints/companies/useGetCompaniesOther";
import { returnArray } from "@/utils/common";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface OtherReviewsProps {
  companyId: string;
}

const OtherReviews = ({ companyId }: OtherReviewsProps) => {
  const { companies } = useGetCompaniesOther({ companyId });


  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl-medium text-gray-900">Other reviews</h3>

      <article className="w-full gap-4 flex flex-col bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] p-6">
        {companies.map((company, i) => {
          const companyLogo = returnArray(company.companyLogos).at(0);

          return (
            <article
              key={i}
              className={twMerge(
                "flex items-center gap-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0"
              )}
            >
              <Avatar
                url={`${process?.env?.NEXT_PUBLIC_API_URL}/files/download/${companyLogo?.file?.id}`}
                size="md"
                className="rounded-none"
              />

              <div className="flex flex-col gap-1.5">
                <h3 className="text-md-semibold text-gray-900">
                  {company.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-md-medium text-gray-500">
                    {company.averageRating}
                  </span>
                  <StarRating
                    size="16px"
                    rating={Math.round(company.averageRating)}
                  />
                  <Link
                    className="text-sm-medium underline text-gray-500"
                    href="#"
                  >
                    {company.reviewCount} reviews
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </article>
    </div>
  );
};

export default OtherReviews;
