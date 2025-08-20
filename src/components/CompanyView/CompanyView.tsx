import Avatar from "@/components/Avatar";
import StarRating from "@/components/Stars";
import {
  ArrowUpRightIcon,
  BookmarkIcon,
  CircleCloseIcon,
  GlobIcon,
  VerifiedIcon,
} from "@/components/SvgIcons";
import { CompanyModel } from "@/data/companies/company-model";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Show from "../Show";
import { returnArray } from "@/utils/common";
import Button from "../Button";
import useAppMutation from "@/hooks/helpers/useAppMutation";
import { request } from "@/services/request";
import Skeleton from "../Skeleton";

interface CompanyViewProps {
  className?: string;
  company: CompanyModel;
  inValidateQuery?: () => void;
  isLoading?: boolean;
}

const CompanyView = ({
  className,
  isLoading = false,
  inValidateQuery,
  company = {},
}: CompanyViewProps) => {
  const companyLogo = returnArray(company.companyLogos).at(0);

  const { mutate: saveMutate, isPending: isSaving } = useAppMutation({
    mutationFn: () => request.post(`/saved-companies/${company.id}`),
    onSuccess: () => {
      if (typeof inValidateQuery === "function") {
        inValidateQuery();
      }
    },
  });

  const { mutate: unSaveMutate, isPending: isUnSaving } = useAppMutation({
    mutationFn: () => request.delete(`/saved-companies/${company.id}`),
    onSuccess: () => {
      if (typeof inValidateQuery === "function") {
        inValidateQuery();
      }
    },
  });

  return (
    <div
      className={twMerge(
        "p-6 flex flex-col gap-4 lg:border-t lg:border-gray-300 lg:border-r",
        className
      )}
    >
      <div className="flex gap-4">
        <Skeleton isLoading={isLoading} width={72} height={72}>
          <Avatar
            url={`${process?.env?.NEXT_PUBLIC_API_URL}/files/download/${companyLogo?.file?.id}`}
            className="w-[72px] h-[72px]"
          />
        </Skeleton>

        <div className="flex flex-col gap-1.5 lg:gap-2 w-full">
          <div className="flex items-center justify-between w-full">
            <Skeleton width={140} isLoading={isLoading}>
              <h3 className="text-lg-semibold text-gray-900">{company.name}</h3>
            </Skeleton>

            <Skeleton isLoading={isLoading} width={30} height={30}>
              <button
                type="button"
                onClick={company.isSaved ? unSaveMutate : saveMutate}
              >
                <BookmarkIcon
                  className={twMerge(
                    (isSaving || isUnSaving) && "opacity-35 cursor-not-allowed",
                    company?.isSaved && "fill-gray-700"
                  )}
                />
              </button>
            </Skeleton>
          </div>

          <div className="flex items-center gap-2">
            <Skeleton isLoading={isLoading} width={16}>
              <span className="text-md-medium text-gray-500">
                {company.averageRating}
              </span>
            </Skeleton>
            <Skeleton width={60} isLoading={isLoading}>
              <StarRating
                rating={Math.round(company.averageRating)}
                size="16px"
              />
            </Skeleton>
            <Skeleton isLoading={isLoading} width={70}>
              <Link href={`/companies/${company.id}?tab=reviews`} className="text-gray-500 text-sm-medium underline hover:text-gray-800 transition-all duration-200">
                {company.reviewCount} reviews
              </Link>
            </Skeleton>
          </div>

          <div className="lg:flex hidden items-center gap-2">
            <Skeleton isLoading={isLoading} width={80}>
              <Show when={company.isTopRated}>
                <div className="px-3.5 py-1 text-orange-700 text-sm-medium bg-orange-50 rounded-sm">
                  Top Rated
                </div>
              </Show>
            </Skeleton>
            <Skeleton isLoading={isLoading} width={90}>
              <Show when={company.isVerified}>
                <div className="flex items-center gap-0.5">
                  <VerifiedIcon />
                  <span className="text-sm-medium text-gray-500">
                    Verified company
                  </span>
                </div>
              </Show>
            </Skeleton>
            <Skeleton isLoading={isLoading} width={100}>
              <Show when={!company.isVerified}>
                <div className="flex items-center gap-0.5">
                  <CircleCloseIcon />
                  <span className="text-sm-medium text-gray-500">
                    Unverified company
                  </span>
                </div>
              </Show>
            </Skeleton>
          </div>
        </div>
      </div>

      <div className="flex lg:hidden items-center gap-2">
        <Skeleton isLoading={isLoading} width={60}>
          <Show when={company.isTopRated}>
            <div className="px-3.5 py-1 text-orange-700 text-sm-medium bg-orange-50 rounded-sm">
              Top Rated
            </div>
          </Show>
        </Skeleton>
        <Skeleton isLoading={isLoading} width={70}>
          <Show when={company.isVerified}>
            <div className="flex items-center gap-0.5">
              <VerifiedIcon />
              <span className="text-sm-medium text-gray-500">
                Verified company
              </span>
            </div>
          </Show>
        </Skeleton>
        <Skeleton isLoading={isLoading} width={80}>
          <Show when={!company.isVerified}>
            <div className="flex items-center gap-0.5">
              <CircleCloseIcon />
              <span className="text-sm-medium text-gray-500">
                Unverified company
              </span>
            </div>
          </Show>
        </Skeleton>
      </div>

      <Skeleton isLoading={isLoading} count={7}>
        <div dangerouslySetInnerHTML={{ __html: company?.aboutCompany }} />
      </Skeleton>
      <hr className="text-gray-200" />
      <div className="flex items-center gap-8">
        <Skeleton isLoading={isLoading} width={90}>
          <Link
            href={`/companies/${company.id}`}
            className="hidden text-sm-semibold text-gray-800 lg:flex items-center gap-2 relative after after:content after:absolute after:h-5 after:w-0.25 after:bg-gray-300 after:-right-4"
          >
            View profile
            <ArrowUpRightIcon />
          </Link>
        </Skeleton>

        <div className="flex items-center gap-4 flex-wrap">
          {(isLoading
            ? new Array(4).fill({})
            : returnArray(company.services)
          ).map((service, i) => (
            <Skeleton key={i} isLoading={isLoading} width={50 + 10 * (i )}>
              <div
                className="bg-gray-100 py-0.5 px-2 text-xs-medium rounded-xl"
                key={i}
              >
                {service?.service?.serviceLabel}
              </div>
            </Skeleton>
          ))}
        </div>
      </div>
      <hr className="text-gray-200 block lg:hidden" />
      <div className="flex lg:hidden w-full items-center justify-between gap-4">
        <Skeleton isLoading={isLoading} width={100}>
          <Button
          className="flex-1"
          endIcon={<GlobIcon />}
          color="secondary-gray"
        >
          Visit website
        </Button>
        </Skeleton>
      <Skeleton isLoading={isLoading} width={100}>
           <Button
          className="flex-1"
          endIcon={<ArrowUpRightIcon className="[&_path]:stroke-white" />}
        >
          View profile
        </Button>
      </Skeleton>
      </div>
    </div>
  );
};

export default CompanyView;
