import Avatar from "../Avatar";
import StarRating from "../Stars";
import Link from "next/link";
import { VerifiedIcon } from "../SvgIcons";
import { CompanyModel } from "@/data/companies/company-model";
import { returnArray } from "@/utils/common";
import Show from "../Show";

interface CompanyShortViewProps {
  company: CompanyModel;
}

const CompanyShortView = ({ company={} }: CompanyShortViewProps) => {
  const companyLogo = returnArray(company.companyLogos).at(0);


  return (
    <article className="bg-white px-6 flex rounded-lg flex-col py-4 shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)]">
      <Avatar
        className="w-20 h-20 rounded-sm mb-2"
        url={`${process?.env?.NEXT_PUBLIC_API_URL}/files/download/${companyLogo?.file?.id}`}
      />
      <Link href={`/companies/${company.id}`} className="hover:underline text-md-semibold text-gray-900 mb-1.5">{company.name}</Link>
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-md-medium text-gray-500">
          {company.averageRating}
        </span>
        <StarRating size="16px" rating={Math.round(company.averageRating)} />
        <Link className="text-sm-medium text-gray-500" href="#">
          {company.reviewCount} reviews
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Show when={company.isTopRated}>
          <div className="px-3.5 py-1 text-orange-700 text-sm-medium bg-orange-50 rounded-sm">
            Top Rated
          </div>
        </Show>
        <Show when={company.isVerified}>
          <div className="flex items-center gap-0.5">
            <VerifiedIcon />
            <span className="text-sm-medium text-gray-500">
              Verified company
            </span>
          </div>
        </Show>
      </div>
    </article>
  );
};

export default CompanyShortView;
