import Badge from "@/components/Badge";
import Image from "next/image";
import MainLayout from "@/components/Layout/MainLayout";
import Result from "./_components/Result";
import Feedback from "./_components/Feedback";
import EmpowerBusiness from "./_components/EmpowerBusiness";
import Reviews from "./_components/Reviews";
import { Suspense } from "react";
const AboutPage = () => {
  return (
    <MainLayout>
      <div className="bg-orange-50 py-24 pb-0 px-28 flex  flex-col items-center">
        <Badge
          wrapperClassName="bg-orange-100 justify-center pr-1 mb-4"
          badgeClassName="text-sm-medium text-orange-700  bg-orange-100 text-center w-full"
          badgeChildren={"Empowering Your Journey with Transparent Solutions"}
        />
        <h1 className='text-d-lg-semibold text-orange-900 mb-6'>
             Your Trusted Guide in <br/> Vehicle Transportation
        </h1>

        <h3 className='text-xl text-orange-700 mb-12'>
        Whether you're shipping a classic car, motorcycle, yacht, <br/> or excavator we're here to guide you every step of the way.
        </h3>

        <div className='relative w-[80vw] h-[60vh]'>
        <Image alt="Mac" fill className='absolute' src={'/images/macbook.png'} />
        </div>
      </div>

   
      <Result/>
      <Feedback/>
      <EmpowerBusiness/>
      <Reviews/>
    
    </MainLayout>
  );
};

export default AboutPage;
