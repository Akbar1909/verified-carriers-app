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
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-d-lg-semibold text-gray-900">
              Community built on trust and mutual respect
            </h2>

            <p className="max-w-180 text-center text-xl text-gray-500">
              We are committed to providing a platform where individuals can
              confidently navigate the complexities of vehicle shipping, knowing
              that they are supported by reliable information and reputable
              service providers.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {statistics.map(({ count, title, description }, i) => (
              <article key={i} className="flex flex-col items-center">
                <div className='mb-5 border border-gray-300 px-3.5 py-3 rounded-lg text-d-xs-semibold text-gray-900'> {formatWithSpaces(count)}+</div>

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
