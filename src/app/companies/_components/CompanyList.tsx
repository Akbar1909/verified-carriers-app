"use client";
import CompanyView from "@/components/CompanyView";
import Container from "@/components/Container";
import useGetCompanies from "@/hooks/endpoints/companies/useGetCompanies";
import useTabletOrMobile from "@/hooks/helpers/useTabletOrMobile";
import dynamic from "next/dynamic";
import {  useRef } from "react";
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
  const selectedServiceIds=jsonParse(searchParams.get('serviceIds')) || [];

  const filterDto = {
    ...(selectedExperience && { experience: selectedExperience }),
    ...(selectedServiceIds.length > 0 && {serviceIds:selectedServiceIds})
  };

  const { companies , total} = useGetCompanies(filterDto);
  useGetCompaniesCount();
  useGetServices()

 
  return (
    <section className="bg-gray-50 pt-16 pb-24">
      <Container fluid={isTabletOrMobile}>
        <MobileDrawer total={total} />
        <FilterTags total={total} />

        <div className="flex border-t relative border-gray-300 overflow-auto">
          <Filter total={total} className="w-100 pr-4 sticky top-0 left-0 hidden lg:block" />
          <div ref={scrollableDivRef} className="flex-1 flex flex-col">
            {companies.map((company, i) => (
              <div key={i} className="py-6 px-4 border-b border-gray-300">
                <CompanyView
                  company={company}
                  className="border-r-0 lg:border-r-0 first:border-t-0 p-0 lg:p-6"
                  key={i}
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
