"use client";
import Checkbox from "@/components/Checkbox";
import Collapse from "@/components/Collapse";
import Show from "@/components/Show";
import useGetCompaniesCount from "@/hooks/endpoints/companies/useGetCompaniesCount";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { useState } from "react";
import FilterTags from "./FilterTags";
import { twMerge } from "tailwind-merge";
import { jsonParse, jsonStringify, returnArray } from "@/utils/common";

interface FilterProps {
  className?: string;
  withSort?: boolean;
  withSave?: boolean;
  withFilterTags?: boolean;
  total: number;
  filterDto: Record<string, any>;
}

const Filter = ({
  className,
  withSort,
  withFilterTags = false,
  withSave = false,
  total,
  filterDto,
}: FilterProps) => {
  const { searchParams, pushToRouter, createQueryParams } = useAppNavigation();

  const topRated = searchParams.get("topRated");
  const mostViewed = searchParams.get("mostViewed");
  const isNew = searchParams.get("isNew");
  const selectedExperience = Number(searchParams.get("experience") ?? 0);
  const selectedSortBy = searchParams.get("sortBy");
  const ratings = jsonParse(searchParams.get("ratings")) || [];
  const verification = searchParams.get("verification");
  const serviceIds = jsonParse(searchParams.get("serviceIds")) || [];

  const { preparedData, services } = useGetCompaniesCount(filterDto, {
    enabled: false,
  });

  const { experience, ratingResult } = preparedData;

  const sortByList = [
    {
      label: "Relevancy",
      value: "relevancy",
    },
    {
      label: "Highly Rated",
      value: "highlyRated",
    },
    {
      label: "Most Reviewed",
      value: "mostReviewed",
    },
    {
      label: "Experience",
      value: "experience",
    },
    {
      label: "Verified first",
      value: "verifiedFirst",
    },
  ];

  const ratingList = [
    {
      label: "4.5 & up",
      count: ratingResult?.[4.5] || 0,
      value: 4.5,
    },
    {
      label: "4 & up",
      count: ratingResult?.[4] || 0,
      value: 4,
    },
    {
      label: "3.5 & up",
      count: ratingResult?.[3.5] || 0,
      value: 3.5,
    },
    {
      label: "3 & up",
      count: ratingResult?.[3] || 0,
      value: 3,
    },
  ];

  const stateList = [
    {
      label: "CA",
      count: 56,
    },
    {
      label: "WA",
      count: 80,
    },
    {
      label: "FL",
      count: 112,
    },
    {
      label: "BS",
      count: 175,
    },
    {
      label: "LG",
      count: 175,
    },
    {
      label: "UV",
      count: 175,
    },
  ];

  const experienceList = [
    {
      label: "1 year & up",
      count: experience?.[1] || 0,
      value: 1,
    },
    {
      label: "3 year & up",
      count: experience?.[3] || 0,
      value: 3,
    },
    {
      label: "5 year & up",
      count: experience?.[5] || 0,
      value: 5,
    },
    {
      label: "7 year & up",
      count: experience?.[7] || 0,
      value: 7,
    },
    {
      label: "10 year & up",
      count: experience?.[10] || 0,
      value: 10,
    },
  ];

  const statusList = [
    {
      label: "Top rated",
      count: preparedData?.topRatedCount,
      value: topRated === "true" ? "checked" : "unchecked",
      name: "topRated",
    },
    {
      label: "Most reviewed",
      count: preparedData?.topRatedCount,
      value: mostViewed === "true" ? "checked" : "unchecked",
      name: "mostViewed",
    },
    {
      label: "New",
      count: preparedData?.newCompaniesCount,
      value: isNew === "true" ? "checked" : "unchecked",
      name: "isNew",
    },
  ];

  const truckTypeList = [
    {
      label: "Tanker Transport Solutions",
      count: 56,
    },
    {
      label: "Specialized Transport Solutions",
      count: 80,
    },
    {
      label: "Refrigerated Transport Solutions",
      count: 112,
    },
    {
      label: "Flatbed Transport Solutions",
      count: 175,
    },
    {
      label: "Dump Transport Solutions",
      count: 175,
    },
    {
      label: "Dry Van Transport Solutions",
      count: 175,
    },
  ];

  const loadTypeList = [
    {
      label: "LTL (Less than truckload shipping)",
      count: 56,
    },
    {
      label: "Truckload",
      count: 80,
    },
  ];

  const verificationList = [
    {
      label: "Verified only",
      count: preparedData?.verifiedCount,
      value: "verified",
    },
    {
      label: "All statues",
      count: preparedData?.totalCount,
      value: "all",
    },
  ];

  const onSave = () => {
    const params = createQueryParams();
  };

  return (
    <div className="flex flex-col relative">
      <Show when={withFilterTags}>
        <FilterTags total={total} />
      </Show>
      <div className={twMerge(className, withSave && "pb-8")}>
        <Show when={withSort}>
          <Collapse header="Sort by">
            <div className="pb-4">
              {sortByList.map(({ label, value }, i) => (
                <div className="pr-4 py-2.5 flex items-center gap-3" key={i}>
                  <Checkbox
                    value={selectedSortBy === value ? "checked" : "unchecked"}
                    onChange={() => {
                      // setFilterDto((prev) => ({ ...prev, experience: value }));

                      if (!withSave) {
                        const params = createQueryParams();
                        params.set("sortBy", String(value));
                        pushToRouter(params, { scroll: false });
                      }
                    }}
                    shape="round"
                    size="md"
                  />
                  <span className="text-sm text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </Collapse>
        </Show>

        <Collapse header="Rating">
          <div className="pb-4">
            {ratingList.map(({ label, count, value }, i) => (
              <div className="pr-4 py-2.5 flex items-center gap-3" key={i}>
                <Checkbox
                  size="md"
                  value={ratings.includes(value) ? "checked" : "unchecked"}
                  onChange={() => {
                    const params = createQueryParams();

                    const nextValues = !ratings.includes(value)
                      ? [...ratings, value]
                      : ratings.filter((rating) => rating !== value);

                    params.set("ratings", jsonStringify(nextValues));

                    // setFilterDto(prev=>({...prev, serviceIds:nextValues}))

                    pushToRouter(params, { scroll: false });
                  }}
                />
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-700">{label}</span>
                  <span className="text-gray-400">({count})</span>
                </div>
              </div>
            ))}
          </div>
        </Collapse>
        <Collapse header="Service">
          <div className="pb-4">
            {services.map(({ serviceLabel, companyCount, serviceId }, i) => (
              <div className="pr-4 py-2.5 flex items-center gap-3" key={i}>
                <Checkbox
                  size="md"
                  value={
                    serviceIds.includes(serviceId) ? "checked" : "unchecked"
                  }
                  onChange={() => {
                    const params = createQueryParams();

                    const nextValues = !serviceIds.includes(serviceId)
                      ? [...serviceIds, serviceId]
                      : serviceIds.filter((id) => id !== serviceId);

                    params.set("serviceIds", jsonStringify(nextValues));

                    // setFilterDto(prev=>({...prev, serviceIds:nextValues}))

                    pushToRouter(params, { scroll: false });
                  }}
                />
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-700">{serviceLabel}</span>
                  <span className="text-gray-400">({companyCount})</span>
                </div>
              </div>
            ))}
          </div>
        </Collapse>

        <Collapse header="State">
          <div className="pb-4">
            {stateList.map(({ label, count }, i) => (
              <div className="pr-4 py-2.5 flex items-center gap-3" key={i}>
                <Checkbox size="md" />
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-700">{label}</span>
                  <span className="text-gray-400">({count})</span>
                </div>
              </div>
            ))}
          </div>
        </Collapse>

        <Collapse header="Experience">
          <div className="pb-4">
            {experienceList.map(({ label, count, value }, i) => (
              <div className="pr-4 py-2.5 flex items-center gap-3" key={i}>
                <Checkbox
                  size="md"
                  shape="round"
                  variant="circular"
                  value={selectedExperience === value ? "checked" : "unchecked"}
                  onChange={() => {
                    // setFilterDto((prev) => ({ ...prev, experience: value }));

                    if (!withSave) {
                      const params = createQueryParams();
                      params.set("experience", String(value));
                      pushToRouter(params, { scroll: false });
                    }
                  }}
                />
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-700">{label}</span>
                  <span className="text-gray-400">({count})</span>
                </div>
              </div>
            ))}
          </div>
        </Collapse>

        <Collapse header="Status">
          <div className="pb-4">
            {statusList.map(({ label, count, value, name }, i) => (
              <div className="pr-4 py-2.5 flex items-center gap-3" key={i}>
                <Checkbox
                  size="md"
                  value={value}
                  onChange={() => {
                    const params = createQueryParams();

                    if (value === "checked") {
                      params.delete(name);
                    } else {
                      params.set(name, "true");
                    }

                    pushToRouter(params, { scroll: false });
                  }}
                />
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-700">{label}</span>
                  <span className="text-gray-400">({count})</span>
                </div>
              </div>
            ))}
          </div>
        </Collapse>

        {/* <Collapse header="Truck type">
          <div className="pb-4">
            {truckTypeList.map(({ label, count }, i) => (
              <div className="pr-4 py-2.5 flex items-center gap-3" key={i}>
                <Checkbox size="md" />
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-700">{label}</span>
                  <span className="text-gray-400">({count})</span>
                </div>
              </div>
            ))}
          </div>
        </Collapse> */}

        {/* <Collapse header="Load type">
          <div className="pb-4">
            {loadTypeList.map(({ label, count }, i) => (
              <div className="pr-4 py-2.5 flex items-center gap-3" key={i}>
                <Checkbox size="md" />
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-700">{label}</span>
                  <span className="text-gray-400">({count})</span>
                </div>
              </div>
            ))}
          </div>
        </Collapse> */}

        <Collapse header="Verification">
          <div className="pb-4">
            {verificationList.map(({ label, count, value }, i) => (
              <div className="pr-4 py-2.5 flex items-center gap-3" key={i}>
                <Checkbox
                  size="md"
                  shape="round"
                  value={verification === value ? "checked" : "unchecked"}
                  onChange={() => {
                    // setFilterDto((prev) => ({ ...prev, experience: value }));

                    if (!withSave) {
                      const params = createQueryParams();
                      params.set("verification", String(value));
                      pushToRouter(params, { scroll: false });
                    }
                  }}
                />
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-700">{label}</span>
                  <span className="text-gray-400">({count})</span>
                </div>
              </div>
            ))}
          </div>
        </Collapse>
      </div>

      {/* <Show when={withSave}>
        <Button className="fixed bottom-2 w-[calc(100%-32px)]" size="lg">
          Filter
        </Button>
      </Show> */}
    </div>
  );
};

export default Filter;
