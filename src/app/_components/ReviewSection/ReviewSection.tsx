import Button from "@/components/Button";
import Container from "@/components/Container";
import ReviewView from "@/components/ReviewView";
import { ArrowUpRightIcon } from "@/components/SvgIcons";
import Link from "next/link";
import React from "react";

const ReviewSection = () => {
  return (
    <div className="py-24 bg-gray-50 border border-gray-300">
      <Container className="flex flex-col gap-y-12">
        <div className="flex justify-between">
          <h2 className="text-gray-900 text-d-lg-semibold">
            Explore the latest reviews
          </h2>
          <Link href="#">
            <Button
              endIcon={
                <ArrowUpRightIcon />
              }
              color='secondary-gray'
              className='rounded-full'
              size='lg'
            >
              View all companies
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-x-8 gap-y-8">
          {new Array(8).fill({}).map((a, i) => (
            <ReviewView key={i} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ReviewSection;
