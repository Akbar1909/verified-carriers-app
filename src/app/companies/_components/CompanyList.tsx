"use client";
import Checkbox from "@/components/Checkbox";
import Collapse from "@/components/Collapse";
import CompanyView from "@/components/CompanyView";
import Container from "@/components/Container";
import { CloseIcon, XIcon } from "@/components/SvgIcons";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const CompanyList = () => {
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });



 

  const tags = [
    {
      label: "4.0 & up",
    },
    {
      label: "Motorcycles",
    },
    {
      label: "Heavy Equipment",
    },
    {
      label: "WA",
    },
    {
      label: "FL",
    },
    {
      label: "10 year & up",
    },
    {
      label: "All statues",
    },
  ];

  const sortByList = [
    {
      label: "Relevancy",
    },
    {
      label: "Highly Rated",
    },
    {
      label: "Most Reviewed",
    },
    {
      label: "Experience",
    },
    {
      label: "Verified first",
    },
  ];

  const ratingList = [
    {
      label: "4.5 & up",
      count: 56,
    },
    {
      label: "4 & up",
      count: 80,
    },
    {
      label: "3.5 & up",
      count: 122,
    },
    {
      label: "3 & up",
      count: 175,
    },
  ];

  const serviceList = [
    {
      label: "Cars",
      count: 56,
    },
    {
      label: "Motorcycles",
      count: 80,
    },
    {
      label: "Heavy Equipment",
      count: 112,
    },
    {
      label: "Expedited Car Shipping",
      count: 175,
    },
    {
      label: "Door-to-Door Shipping",
      count: 175,
    },
    {
      label: "Boats",
      count: 175,
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
      count: 56,
    },
    {
      label: "3 year & up",
      count: 80,
    },
    {
      label: "5 year & up",
      count: 112,
    },
    {
      label: "7 year & up",
      count: 175,
    },
    {
      label: "10 year & up",
      count: 175,
    },
  ];

  const statusList = [
    {
      label: "Top rated",
      count: 56,
    },
    {
      label: "Most reviewed",
      count: 80,
    },
    {
      label: "New",
      count: 112,
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
      count: 56,
    },
    {
      label: "All statues",
      count: 80,
    },
  ];

  return (
    <section className="bg-gray-50 pt-16 pb-24">
      <Container>
        <header className="flex justify-between items-center pb-4">
          <div className="flex items-center gap-3">
            {tags.map(({ label }, i) => (
              <div
                className="pl-3 text-sm-medium text-gray-700 pr-2.5 py-1 flex items-center gap-1 rounded-2xl bg-gray-100"
                key={i}
              >
                {label}{" "}
                <button type="button">
                  <CloseIcon />
                </button>
              </div>
            ))}
            <div className="pl-3 text-sm-medium text-rose-700 pr-2.5 py-1 flex items-center gap-1 rounded-2xl bg-rose-50">
              Clear all{" "}
              <button type="button">
                <CloseIcon className="[&_path]:stroke-rose-500" />
              </button>
            </div>
          </div>
          <span className="text-sm-medium text-gray-700">237 companies</span>
        </header>

        <div className="flex border-t relative border-gray-300 overflow-auto">
          <div className="w-100 pr-4 sticky top-0 left-0">
            <Collapse header="Sort by">
              <div className="pb-4">
                {sortByList.map(({ label }, i) => (
                  <div className="pr-4 py-2.5 flex items-center gap-3" key={i}>
                    <Checkbox shape="round" size="md" />
                    <span className="text-sm text-gray-700">{label}</span>
                  </div>
                ))}
              </div>
            </Collapse>

            <Collapse header="Rating">
              <div className="pb-4">
                {ratingList.map(({ label, count }, i) => (
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
            <Collapse header="Rating">
              <div className="pb-4">
                {serviceList.map(({ label, count }, i) => (
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

            <Collapse header="State">
              <div className="pb-4">
                {experienceList.map(({ label, count }, i) => (
                  <div className="pr-4 py-2.5 flex items-center gap-3" key={i}>
                    <Checkbox
                      size="md"
                      shape="round"
                      variant="circular"
                      initialState="checked"
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
                {statusList.map(({ label, count }, i) => (
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

            <Collapse header="Truck type">
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
            </Collapse>

            <Collapse header="Load type">
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
            </Collapse>

            <Collapse header="Verification">
              <div className="pb-4">
                {verificationList.map(({ label, count }, i) => (
                  <div className="pr-4 py-2.5 flex items-center gap-3" key={i}>
                    <Checkbox size="md" shape="round" />
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-gray-700">{label}</span>
                      <span className="text-gray-400">({count})</span>
                    </div>
                  </div>
                ))}
              </div>
            </Collapse>

            <div className="py-5" ref={ref}></div>
          </div>
          <div ref={scrollableDivRef} className="flex-1 flex flex-col">
            {new Array(15).fill({}).map((item, i) => (
              <CompanyView className="border-r-0 first:border-t-0" key={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyList;
