import Avatar from "@/components/Avatar";
import StarRating from "@/components/Stars";
import {
  ArrowUpRightIcon,
  BookmarkIcon,
  GlobIcon,
  VerifiedIcon,
} from "@/components/SvgIcons";
import { CompanyModel } from "@/data/companies/company-model";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Show from "../Show";
import { returnArray } from "@/utils/common";
import Button from "../Button";
import useTabletOrMobile from "@/hooks/helpers/useTabletOrMobile";

interface CompanyViewProps {
  className?: string;
  saved?: boolean;
  company: CompanyModel;
}

const CompanyView = ({ className, saved, company = {} }: CompanyViewProps) => {
  const companyLogo = returnArray(company.companyLogos).at(0);
  const {isTabletOrMobile} = useTabletOrMobile()


  return (
    <div
      className={twMerge(
        "p-6 flex flex-col gap-4 lg:border-t lg:border-gray-300 lg:border-r",
        className
      )}
    >
      <div className="flex gap-4">
        <Avatar
          url={`${process?.env?.NEXT_PUBLIC_API_URL}/files/download/${companyLogo?.file?.id}`}
          className="w-18 h-18 rounded-lg"
          size="2xl"
        />

        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-lg-semibold text-gray-900">{company.name}</h3>

            <BookmarkIcon className={twMerge(saved && "fill-gray-700")} />
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
            <Show when={company.isVerified}>
              <div className="flex items-center gap-0.5">
                <VerifiedIcon />
                <span className="text-sm-medium text-gray-500">
                  Verified company
                </span>
              </div>
            </Show>
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: company?.aboutCompany }}></div>
      <hr className="text-gray-200" />
      <div className="flex items-center gap-8">
        <Link
          href={`/companies/${company.id}`}
          className="hidden text-sm-semibold text-gray-800 lg:flex items-center gap-2 relative after after:content after:absolute after:h-5 after:w-0.25 after:bg-gray-300 after:-right-4"
        >
          View profile
          <ArrowUpRightIcon />
        </Link>

        <div className="flex items-center gap-4 flex-wrap">
          {returnArray(company.services).map((service, i) => (
            <div
              className="bg-gray-100 py-0.5 px-2 text-xs-medium rounded-xl"
              key={i}
            >
              {service?.serviceName}
            </div>
          ))}
        </div>
      </div>
      <hr className="text-gray-200 block lg:hidden" />
      <div className="flex lg:hidden w-full items-center justify-between gap-4">
          <Button className="flex-1" endIcon={<GlobIcon/>} color='secondary-gray'>Visit website</Button>
          <Button className="flex-1" endIcon={<ArrowUpRightIcon className="[&_path]:stroke-white" />}>View profile</Button>
      </div>
    </div>
  );
};

export default CompanyView;
