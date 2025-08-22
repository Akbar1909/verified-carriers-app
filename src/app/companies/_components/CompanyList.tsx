"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import Container from "@/components/Container";
import CompanyView from "@/components/CompanyView";
import Filter from "./Filter";
import FilterTags from "./FilterTags";

import useTabletOrMobile from "@/hooks/helpers/useTabletOrMobile";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import useGetCompanies from "@/hooks/endpoints/companies/useGetCompanies";
import useGetCompaniesCount from "@/hooks/endpoints/companies/useGetCompaniesCount";
import useGetServices from "@/hooks/endpoints/services/useGetServices";

import { jsonParse } from "@/utils/common";
import { twMerge } from "tailwind-merge";

const MobileDrawer = dynamic(() => import("./MobileDrawer"), { ssr: false });

type Mode = "static" | "fixed" | "absolute";

const CompanyList = () => {
  const { isTabletOrMobile } = useTabletOrMobile();
  const { searchParams } = useAppNavigation();

  const selectedExperience = searchParams.has("experience")
    ? Number(searchParams.get("experience"))
    : null;
  const selectedRating = searchParams.has("ratings")
    ? jsonParse(searchParams.get("ratings"))
    : null;
  const sortBy = searchParams.has("sortBy") ? searchParams.get("sortBy") : null;
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
    ...(selectedVerification === "verified" && { isVerified: true }),
    ...(selectedRating && { rating: selectedRating }),
    ...(sortBy && { sortBy }),
  };

  const { companies, total, inValidateQuery, isLoading } =
    useGetCompanies(filterDto);
  useGetCompaniesCount(filterDto);
  useGetServices();

  // Sticky filter state
  const asideRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const [mode, setMode] = useState<Mode>("static");
  const [absoluteTop, setAbsoluteTop] = useState(0);
  const [fixedLeft, setFixedLeft] = useState(0);
  const [fixedWidth, setFixedWidth] = useState(0);
  const [filterHeight, setFilterHeight] = useState(0);

  // Make filter only activate once hero is fully out
  useEffect(() => {
    const hero = document.querySelector("#hero"); // Ensure hero has id="hero"
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Hero visible → keep static
          setMode("static");
        } else {
          // Hero not visible → allow sticky logic
          setMode("fixed");
        }
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Handle when filter reaches end of aside
  useEffect(() => {
    const handleScroll = () => {
      if (!asideRef.current || !filterRef.current) return;

      const asideRect = asideRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;

      const asideTopDoc = asideRect.top + scrollY;
      const asideBottomDoc = asideTopDoc + asideRef.current.offsetHeight;
      const filterH = filterRef.current.offsetHeight;

      setFilterHeight(filterH);

      if (mode !== "static") {
        if (scrollY + filterH >= asideBottomDoc) {
          setMode("absolute");
          setAbsoluteTop(asideRef.current.offsetHeight - filterH);
        } else if (mode === "absolute" && scrollY + filterH < asideBottomDoc) {
          setMode("fixed");
        }
      }

      setFixedLeft(asideRect.left + window.scrollX);
      setFixedWidth(asideRect.width);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [mode]);

  return (
    <section className="bg-gray-50 pt-16 pb-24 relative">
      <Container fluid={isTabletOrMobile}>
        <MobileDrawer total={total} />
        <FilterTags total={total} />

        <div className="flex border-t border-gray-300 relative">
          {/* Filter column */}
          <div ref={asideRef} className="w-72 pr-4 hidden lg:block relative">
            <div
              ref={filterRef}
              className="transition-all duration-200"
              style={{
                position:
                  mode === "fixed"
                    ? "fixed"
                    : mode === "absolute"
                    ? "absolute"
                    : "static",
                top: mode === "fixed" ? "1rem" : undefined,
                left: mode === "fixed" ? fixedLeft : undefined,
                width: mode === "fixed" ? fixedWidth : undefined,
                bottom: mode === "absolute" ? 0 : undefined,
                zIndex: 40,
              }}
            >
              <Filter filterDto={filterDto} total={total} className="w-full" />
            </div>
            {/* Spacer keeps layout stable */}
            <div style={{ height: filterHeight }} />
          </div>

          <div className="h-full w-2"/>

          {/* Company list */}
          <div className="flex-1 flex flex-col">
            {(isLoading ? new Array(8).fill({}) : companies).map(
              (company, i) => (
                <div
                  key={i}
                  className="border-b border-gray-300 last:border-b-0"
                >
                  <CompanyView
                    company={company}
                    isLoading={isLoading}
                    className={twMerge("border-r-0 lg:border-r-0 first:border-t-0 p-0 lg:p-6", company.isSaved && 'bg-gray-100')}
                    inValidateQuery={inValidateQuery}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyList;
