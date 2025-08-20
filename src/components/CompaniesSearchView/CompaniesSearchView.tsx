import Link from "next/link";
import React from "react";
import Avatar from "../Avatar";
import TruncatedText from "../TruncatedText";
import { CornerUpRightIcon } from "../SvgIcons";
import { joinStrings, returnArray } from "@/utils/common";

interface CompaniesSearchViewProps {
  companies: Array<{
    id: string;
    name: string;
    companyLogos: Array<{ file: { id: string } }>;
    services: Array<any>;
  }>;
  isLoading: boolean;
  isSuccess: boolean;
  search: string;
}

const CompaniesSearchView = ({
  companies,
  isLoading,
  isSuccess,
  search,
}: CompaniesSearchViewProps) => {
  return (
    <div className="w-full rounded-lg bg-white">
      {(isLoading ? new Array(5).fill({}) : companies).map((company, index) => (
        <Link
          href={`/companies/${company.id}`}
          key={index}
          className="p-2 group hover:bg-gray-100 cursor-pointer flex items-center gap-2 border-b border-stone-100"
        >
          <Avatar
            url={`${process?.env?.NEXT_PUBLIC_API_URL}/files/download/${company?.companyLogos?.[0]?.file?.id}`}
            size="md"
          />
          <div className="flex flex-col gap-1.5">
            <TruncatedText
              as="span"
              highlightWords={[search]}
              className="text-lg-semibold group-hover:underline text-gray-900"
            >
              {company.name}
            </TruncatedText>

            <div className="flex items-center gap-4 flex-wrap">
              {returnArray(company.services).map((service, i) => (
                <TruncatedText
                  highlightWords={[search]}
                  className="bg-gray-100 py-0.5 px-2 text-xs-medium rounded-xl"
                  key={i}
                >
                  {service?.service?.serviceLabel}
                </TruncatedText>
              ))}
            </div>
          </div>
        </Link>
      ))}
      {companies?.length === 0 && isSuccess && Boolean(search) && (
        <div className="p-4 text-gray-500">No results found</div>
      )}

      {companies.length === 0 && !isLoading && !Boolean(search) && (
        <div className="p-4 text-gray-500">
          Start typing to search for companies
        </div>
      )}

      <Link
        href="/companies"
        className="text-sm-semibold p-2 text-gray-800 flex items-center gap-2"
      >
        View all companies
        <CornerUpRightIcon />
      </Link>
    </div>
  );
};

export default CompaniesSearchView;
