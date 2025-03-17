import Button from "@/components/Button";
import Container from "@/components/Container";
import { ArrowUpRightIcon, MessageCircleIcon, SearchIcon } from "@/components/SvgIcons";
import Image from "next/image";
import ReviewSlider from "./ReviewSlider";

const CarrierFinder = () => {
  return (
    <div className="bg-white py-24 px-20">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-gray-900 text-d-lg-semibold">
            The easiest way <br /> to find a carrier
          </h2>
          <p className="text-xl-medium text-gray-500">
            Use our features to take full control of your <br /> carrier search
            process.
          </p>
        </div>

        <div className="grid grid-cols-6 gap-x-4 gap-y-4 relative">
          <div className="col-span-4 overflow-hidden border relative flex border-gray-300 rounded-2xl h-95 bg-gradient-to-t from-[#F7F8FA] via-[#F9FAFB] to-[#FAFAFA]">
            <div className="flex flex-col p-8">
              <h3 className="text-lg-medium text-gray-900">Request Quotes</h3>
              <p className="text-sm-medium text-gray-500">
                Receive a customized quote tailored to <br /> your
                transportation requirements.
              </p>

              <Button
                color="secondary-gray"
                size="sm"
                className="rounded-full mt-auto"
              >
                Get an Estimate
              </Button>
            </div>

            <div className="flex-1 h-full flex">
              <div className="relative h-full flex-1">
                <Image
                  fill
                  objectFit="contain"
                  className="absolute !right-40 scale-135 !h-[110%]"
                  src="/images/iPhone-12-Pro-mockup-1.png"
                  alt="iPhone-12-Pro-mockup-1"
                />
              </div>
              <div className="relative h-full flex-1">
                <Image
                  fill
                  objectFit="contain"
                  className="absolute right-5 scale-120 !h-[110%]"
                  src="/images/iPhone-12-Pro-mockup-2.png"
                  alt="iPhone-12-Pro-mockup-2"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 border relative flex border-gray-300 rounded-2xl h-95 bg-gradient-to-t from-[#F7F8FA] via-[#F9FAFB] to-[#FAFAFA]">
            <div className="flex flex-col p-8">
              <h3 className="text-lg-medium text-gray-900">
                Compare Сompanies
              </h3>
              <p className="text-sm-medium text-gray-500">
                Compare prices from verified brokers <br /> and carriers from
                all over the US.
              </p>

              <Button
                color="secondary-gray"
                size="sm"
                className="rounded-full mt-auto"
                endIcon={<ArrowUpRightIcon />}
              >
                View Companies
              </Button>
            </div>
          </div>
          <div className="col-span-2 relative   border  flex flex-col border-gray-300 rounded-2xl h-95 bg-gradient-to-t from-[#F7F8FA] via-[#F9FAFB] to-[#FAFAFA]">
            <div className="flex flex-col p-8">
              <h3 className="text-lg-medium text-gray-900">
                Discover Top Rated transporters
              </h3>
              <p className="text-sm-medium text-gray-500">
                Explore a curated selection of top-rated <br /> vehicle
                transporters.
              </p>

              {/* <Button
                color="secondary-gray"
                size="sm"
                className="rounded-full mt-auto"
                endIcon={<ArrowUpRightIcon />}
              >
                View Companies
              </Button> */}
            </div>

            <div className="grid grid-cols-3 flex-1">
              <div className="relative w-25 h-25 left-4.5">
                <Image
                  fill
                  className="absolute"
                  alt=""
                  src="/images/component-1.png"
                />
              </div>
              <div className="relative w-25 h-25 top-6 left-5">
                <Image
                  fill
                  className="absolute"
                  alt=""
                  src="/images/component-3.png"
                />
              </div>
              <div className="relative w-25 h-25 -top-2 -right-2">
                <Image
                  fill
                  className="absolute"
                  alt=""
                  src="/images/component-5.png"
                />
              </div>
              <div className="relative w-25 h-25 left-4.5">
                <Image
                  fill
                  className="absolute"
                  alt=""
                  src="/images/component-2.png"
                />
              </div>
              <div className="relative w-25 h-25 top-6 left-5">
                <Image
                  fill
                  className="absolute"
                  alt=""
                  src="/images/component-4.png"
                />
              </div>
              <div className="relative w-25 h-25 -top-2 -right-2">
                <Image
                  fill
                  className="absolute"
                  alt=""
                  src="/images/component-6.png"
                />
              </div>
            </div>

            <Button
              color="secondary-gray"
              className="absolute blur-8 rounded-full bottom-8 left-8 text-black"
              size="sm"
              endIcon={
                <SearchIcon className="[&_path]:stroke-black [&_circle]:stroke-black" />
              }
            >
              Discover Companies
            </Button>
          </div>
          <div className="col-span-4 border relative flex flex-col gap-6.5 border-gray-300 rounded-2xl h-95 bg-gradient-to-t from-[#F7F8FA] via-[#F9FAFB] to-[#FAFAFA] py-6 pl-8">
            <div className='w-full'>
               <ReviewSlider />
            </div>

            <div className="pr-8 pb-8 flex flex-col gap-2">
               <h2 className='text-gray-900 text-lg-medium'>Book your Transport and Leave a Review.</h2>

               <div className="flex justify-between items-center">
                 <p className='text-sm-medium text-gray-500'>Your feedback helps others make informed decisions <br/> and promotes transparency in the industry.</p>
                 <Button className='rounded-full' color='secondary-gray' endIcon={<MessageCircleIcon/>}>Leave a review</Button>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CarrierFinder;
