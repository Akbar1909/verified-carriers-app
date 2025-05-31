"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import ReviewView from "@/components/ReviewView";
import { ArrowUpRightIcon } from "@/components/SvgIcons";
import Link from "next/link";
import React from "react";
import ReviewSlide from "./ReviewSlide";
import useTabletOrMobile from "@/hooks/helpers/useTabletOrMobile";

const ReviewSection = () => {
  const { isTabletOrMobile } = useTabletOrMobile();
  return (
    <div className="py-16 lg:py-24 bg-gray-50 border border-gray-300">
      <Container className="flex flex-col mb-12">
        <div className="flex justify-center lg:justify-between">
          <h2 className="text-gray-900 text-center lg:text-start text-d-sm-semibold lg:text-d-lg-semibold">
            Explore the latest reviews
          </h2>
          <Link href="/companies" className="hidden lg:block">
            <Button
              endIcon={<ArrowUpRightIcon />}
              color="secondary-gray"
              className="rounded-full"
              size="lg"
            >
              View all companies
            </Button>
          </Link>
        </div>
      </Container>

      <Container fluid={isTabletOrMobile} className="flex flex-col gap-y-12">
        <div className="lg:grid grid-cols-4 gap-x-8 gap-y-8 hidden">
          {new Array(8).fill({}).map((a, i) => (
            <ReviewView key={i} />
          ))}
        </div>

        <div className="block lg:hidden">
          <ReviewSlide />
        </div>
      </Container>
    </div>
  );
};

export default ReviewSection;
