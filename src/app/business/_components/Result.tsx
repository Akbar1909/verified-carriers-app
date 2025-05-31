import Container from "@/components/Container";
import { formatWithSpaces } from "@/utils/common";
import React from "react";

const Result = () => {
  const statistics = [
    {
      count: 10,
      title: "Years of Experience",
      description: `With over 10 years of combined experience in the vehicle transportation industry, our team brings a wealth of knowledge and expertise to the table.`,
    },
    {
      count: 500,
      title: "Number of Transporters",
      description: `We partner with a vast network of over 500 licensed vehicle transporters. Our users have access to a wide range of service providers.`,
    },
    {
      count: 5000,
      title: `Community Engagement`,
      description: `Over 5,000 users participating in discussions and contributing to the transparency and accountability of the industry.`,
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="w-60 text-center  lg:w-auto text-d-sm-medium lg:text-d-lg-semibold text-gray-900">
            Why consumers trust us
            </h2>

          
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 gap-y-12">
            {statistics.map(({ count, title, description }, i) => (
              <article key={i} className="flex flex-col items-center">
                <div className='mb-5  px-3.5 py-3 rounded-lg text-d-xs-semibold text-gray-900'> {formatWithSpaces(count)}+</div>

                <h3 className="mb-2 text-xl-medium text-gray-700">{title}</h3>
                <p className='text-md text-gray-500 text-center'>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Result;
