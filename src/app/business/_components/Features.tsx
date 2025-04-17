import Container from "@/components/Container";
import { BarChartIcon, MessageCircleIcon, PackageIcon } from "@/components/SvgIcons";
import Image from "next/image";

const Features = () => {
  const statistics = [
    {
      icon: <BarChartIcon/>,
      title: "Years of Experience",
      description: `With over 10 years of combined experience in the vehicle transportation industry, our team brings a wealth of knowledge and expertise to the table.`,
    },
    {
      icon: <MessageCircleIcon/>,
      title: "Number of Transporters",
      description: `We partner with a vast network of over 500 licensed vehicle transporters. Our users have access to a wide range of service providers.`,
    },
    {
      icon: <PackageIcon/>,
      title: `Community Engagement`,
      description: `Over 5,000 users participating in discussions and contributing to the transparency and accountability of the industry.`,
    },
  ];

  return (
    <div className="bg-white py-24">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-d-md-semibold text-gray-900">
            Cutting-edge features
          </h2>
          <p className="text-xl text-gray-600 text-center">
            User-friendly, informative interface that will allow you to monitor
            and directly <br /> influence the success of your business
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative border-[4px] border-gray-900 rounded-[10px]">
            <Image
              width={512}
              height={768}
              objectFit="contain"
              layout="responsive"
              alt="Dashboard"
              src="/images/dashboard.png"
              priority
            />

            <Image
              width={240}
              height={400}
              objectFit="contain"
              className="absolute -left-30 -translate-x-0.5 z-10 -bottom-9"
              src="/images/iphone-12-Pro-mockup-3.png"
              alt="banner"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-20">
          {statistics.map(({ icon, title, description }, i) => (
            <article key={i} className="flex flex-col items-center">
              <div className="mb-5 border border-gray-300 px-3.5 py-3 rounded-lg text-d-xs-semibold text-gray-900">
                {" "}
                {icon}
              </div>

              <h3 className="mb-2 text-xl-medium text-gray-700">{title}</h3>
              <p className="text-md text-gray-500 text-center">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Features;
