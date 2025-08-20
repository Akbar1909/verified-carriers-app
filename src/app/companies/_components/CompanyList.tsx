"use client";
import CompanyView from "@/components/CompanyView";
import Container from "@/components/Container";
import useGetCompanies from "@/hooks/endpoints/companies/useGetCompanies";
import useTabletOrMobile from "@/hooks/helpers/useTabletOrMobile";
import dynamic from "next/dynamic";
import { useRef } from "react";
import Filter from "./Filter";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import useGetCompaniesCount from "@/hooks/endpoints/companies/useGetCompaniesCount";
import FilterTags from "./FilterTags";
import useGetServices from "@/hooks/endpoints/services/useGetServices";
import { jsonParse } from "@/utils/common";

const MobileDrawer = dynamic(() => import("./MobileDrawer"), { ssr: false });

const CompanyList = () => {
  const { isTabletOrMobile } = useTabletOrMobile();
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const { searchParams } = useAppNavigation();

  const selectedExperience = searchParams.has("experience")
    ? Number(searchParams.get("experience"))
    : null;
  const selectedRating = searchParams.has("ratings")
    ? jsonParse(searchParams.get("ratings"))
    : null;
  const sortBy=searchParams.has('sortBy')? searchParams.get("sortBy") : null;
  const selectedVerification = searchParams.get("verification");
  const selectedServiceIds = jsonParse(searchParams.get("serviceIds")) || [];

  const topRated = searchParams.has("topRated")
    ? searchParams.get("topRated") === "true"
    : null;
  const isNew = searchParams.has("isNew")
    ? searchParams.get("isNew") === "true"
    : null;

  const filterDto = {
    ...(selectedExperience && { experience: selectedExperience }),
    ...(selectedServiceIds.length > 0 && { serviceIds: selectedServiceIds }),
    ...(typeof topRated === "boolean" && { topRated }),
    ...(typeof isNew === "boolean" && { isNew }),
    ...(selectedVerification === "verified" && {
      isVerified: true,
    }),
    ...(selectedRating && { rating: selectedRating }),
    ...(sortBy && { sortBy }),
  };

  const { companies, total, inValidateQuery, isLoading } = useGetCompanies(filterDto);
  useGetCompaniesCount(filterDto);
  useGetServices();

  return (
    <section className="bg-gray-50 pt-16 pb-24">
      <Container fluid={isTabletOrMobile}>
        <MobileDrawer total={total} />
        <FilterTags total={total} />

        <div className="flex border-t relative border-gray-300 overflow-auto">
          <Filter
            filterDto={filterDto}
            total={total}
            className="w-100 pr-4 sticky top-0 left-0 hidden lg:block"
          />
          <div ref={scrollableDivRef} className="flex-1 flex flex-col">
            {(isLoading ? new Array(8).fill({}):companies).map((company, i) => (
              <div key={i} className="py-6 px-4  border-b border-gray-300 last:border-b-0">
                <CompanyView
                  company={company}
                  isLoading={isLoading}
                  className="border-r-0 lg:border-r-0 first:border-t-0 p-0 lg:p-6"
                  key={i}
                  inValidateQuery={inValidateQuery}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyList;
