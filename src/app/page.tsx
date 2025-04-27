import Button from "@/components/Button";
import Container from "@/components/Container";
import MainLayout from "@/components/Layout/MainLayout";
import { SearchIcon } from "@/components/SvgIcons";
import TextField from "@/components/TextField";
import React from "react";
import Image from "next/image";
import ReviewSection from "./_components/ReviewSection";
import CarrierFinder from "./_components/CarrierFinder";
import TopRatedCompanies from "./_components/TopRatedCompanies";
import Trust from "./_components/Trust";
import Partners from "./_components/Partners";
import Insights from "./_components/Insights";
import Link from "next/link";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="py-24 flex items-center justify-center relative">
        <Image
          alt=""
          src={"/images/comment-1.png"}
          className="absolute bottom-6.5 left-0"
          width={315}
          height={258}
          objectFit="contain"
        />
        <Image
          alt=""
          src={"/images/comment-2.png"}
          className="absolute top-1/2 right-0 -translate-y-1/2"
          width={315}
          height={258}
          objectFit="contain"
        />
        <Container maxWidth="lg">
          <div className="flex items-center flex-col gap-8">
            <h1 className="text-d-lg-semibold  text-gray-900 text-center">
              Ship Smarter, Faster,and <br /> Confidence with Verified Carriers.
            </h1>

            <div className="flex flex-col gap-3">
              <TextField
                className="w-160 h-12"
                startIcon={<SearchIcon />}
                placeholder="Find a trusted company"
              />
            <Link href='/get-quote'>
              
            <Button fullWidth className="h-12 text-md-medium text-white">
                Get a Free Quote
              </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <ReviewSection />
      <CarrierFinder />
      <TopRatedCompanies />
      <Trust />
      <Partners />
      <Insights />
    </MainLayout>
  );
};

export default HomePage;
