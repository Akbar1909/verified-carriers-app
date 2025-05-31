"use client";
import Container from "@/components/Container";
import CompanyView from "@/components/CompanyView";
import useGetCompanies from "@/hooks/endpoints/companies/useGetCompanies";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { ArrowRightIcon, Favicon } from "@/components/SvgIcons";
import useTabletOrMobile from "@/hooks/helpers/useTabletOrMobile";

const TopRatedCompanies = () => {
  const { companies } = useGetCompanies();
  const {isTabletOrMobile} = useTabletOrMobile()

  return (
    <div className="border-y border-gray-300 bg-gray-50 py-24">
      <Container fluid={isTabletOrMobile} className="flex flex-col gap-12">
        <h2 className="text-gray-900 text-d-sm-semibold lg:text-d-lg-semibold text-center">
          Top Rated companies
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 divide-x">
          {companies.slice(0, 4).map((company, i) => (
            <CompanyView
              key={i}
              company={company}
              className={twMerge((i + 1) % 2 === 0 && "lg:border-r-0 px-4 lg:p-6")}
            />
          ))}
        </div>
      </Container>

      <Container className="flex items-center justify-center lg:hidden pt-12 pb-16">
        <div className="py-3 px-4 bg-white rounded-[999px] flex items-center justify-between w-full max-w-75">
          <Link href="/companies" className="flex items-center gap-2">
            <Favicon />
            <span className="text-gray-900 text-md-medium">
              {" "}
              More companies
            </span>
          </Link>
          <Link href="/companies" className="flex items-center gap-2">
            <span className="text-gray-500 text-md-medium">Explore</span>
            <button className='w-5 h-5 rounded-full bg-orange-200 flex items-center justify-center' type='button'>
                <ArrowRightIcon width={16} height={16} className="[&_path]:stroke-orange-500" />
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TopRatedCompanies;
