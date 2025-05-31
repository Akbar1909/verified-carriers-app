import Image from "next/image";
import MainLayout from "@/components/Layout/MainLayout";
import { Favicon, MessageCircleIcon } from "@/components/SvgIcons";
import Container from "@/components/Container";
import Result from "./_components/Result";
import Partners from "./_components/Partners";
import Features from "./_components/Features";
import AskedQuestions from "./_components/AskedQuestions";
import Reviews from "./_components/Reviews";
import Link from "next/link";

const BusinessPage = () => {
  return (
    <MainLayout>
      <div className="bg-black py-16 lg:py-24 2xl:h-[50vh] md:h-[70vh] overflow-hidden">
        <Container className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className="hidden lg:block text-d-lg-semibold text-white mb-4">
              Real reviews, powerful tools,
              <br /> high-quality traffic for your <br /> business
            </h1>
            <h1 className="block text-center lg:hidden text-d-md-semibold text-white mb-4">
              Real reviews, powerful tools, high-quality traffic for your
              business
            </h1>

            <p className="text-lg text-center lg:text-start lg:text-xl text-white mb-8">
              Scale your business performance and trust with Verified Carriers.
            </p>

            <div className="block lg:hidden h-[60vh] w-full mb-8">
              <div className="relative w-full h-full">
                <Image
                  fill
                  objectFit="contain"
                  className="absolute"
                  src="/images/iphone-business-banner.png"
                  alt="banner"
                />

                <Image
                  alt=""
                  src={"/images/comment-business-1.png"}
                  className="absolute top-[2rem] -right-[1rem]"
                  width={196}
                  height={137}
                  objectFit="contain"
                />
                <Image
                  alt=""
                  src={"/images/comment-business-2.png"}
                  className="absolute -bottom-[2rem] -left-[1.5rem]"
                  width={200}
                  height={300}
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-3">
              <button
                className="h-14 px-7 w-full justify-center lg:w-auto order-2 lg:order-1 bg-black text-white [&_path]:stroke-white text-lg-medium flex items-center gap-3"
                color="tertiary"
              >
                {" "}
                <MessageCircleIcon />
                Contact us
              </button>
              <Link
                href="/auth/sign-up?mode=company"
                className="order-1 lg:order-2 w-full lg:w-auto"
              >
                <button className="h-14 px-7 w-full justify-center rounded-[999px] text-lg-medium bg-white flex items-center gap-3">
                  <Favicon />
                  Create an account
                </button>
              </Link>
            </div>
          </div>

          <div className="relative h-[90%] hidden lg:flex items-center justify-center md:mt-[20%] 2xl:mt-[10%]">
            <div className="md:h-[150%] w-[15rem]" style={{ scale: 1.2 }}>
              <Image
                fill
                objectFit="contain"
                className="absolute"
                src="/images/iphone-business-banner.png"
                alt="banner"
              />

              <Image
                alt=""
                src={"/images/comment-business-1.png"}
                className="absolute -top-[0.6rem] -right-[6rem]"
                width={196}
                height={137}
                objectFit="contain"
              />
              <Image
                alt=""
                src={"/images/working-man.png"}
                className="absolute bottom-[0rem] -left-[70%] -z-20"
                width={200}
                height={300}
                objectFit="contain"
              />
              <Image
                alt=""
                src={"/images/comment-business-2.png"}
                className="absolute top-[8rem] -right-[7rem]"
                width={162}
                height={132}
                objectFit="contain"
              />
            </div>
          </div>
        </Container>
      </div>

      <Result />
      <Partners />
      <Features />
      <AskedQuestions />
      <Reviews />
    </MainLayout>
  );
};

export default BusinessPage;
