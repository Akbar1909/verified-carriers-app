import Button from "@/components/Button";
import Container from "@/components/Container";
import { ArrowRightIcon, CheckCircleIcon, DollarSignIcon, MessageCircleIcon, UserPlusIcon } from "@/components/SvgIcons";
import TruncatedText from "@/components/TruncatedText";
import Link from "next/link";

const Trust = () => {
  const services = [
    {
      icon: <MessageCircleIcon className='[&_path]:stroke-gray-900 [&_circle]:stroke-gray-900' />,
      link: "Get a free quote",
      title: "Transparent pricing and reviews",
      description: `Get access to genuine reviews and ratings from real customers. Make decisions based on the experience of other platform members.`,
    },
    {
      icon: <CheckCircleIcon className='[&_path]:stroke-gray-900 [&_circle]:stroke-gray-900' />,
      link: "Explore companies",
      title: "Verified and trusted brokers or carriers",
      description: `Get customized quotes tailored to your specific needs. Enter the necessary data to get an accurate quote, saving you time.`,
    },
    {
      icon: <DollarSignIcon className='[&_path]:stroke-gray-900 [&_circle]:stroke-gray-900'/>,
      link: "Learn more",
      title: "Exclusive deals for users",
      description: `Leave a review of the carriers you’ve worked with, and earn a specials bonus helping other people make a confident choice.`,
    },
    {
      icon: <UserPlusIcon className='[&_path]:stroke-gray-900 [&_circle]:stroke-gray-900' />,
      link: "Learn more",
      title: "Simple affiliate program for brokers",
      description: `We enable all brokers or movers to register and get reviews from real users, building trust and high-quality traffic.`,
    },
  ];

  return (
    <div className="bg-white py-24">
      <Container>
        <h2 className="text-gray-900 text-d-lg-semibold mb-5">
          Learn about <br /> transparency and trust
        </h2>

        <p className="text-xl text-gray-500">
          Join our community-driven platform revolutionizing transportation{" "}
          <br /> reviews. At Verified Carriers, we're changing the game.
        </p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-8 mt-16">
          {services.map(({ icon, link, description, title }, i) => (
            <div className="flex flex-col bg-gray-50 border border-gray-300 rounded-lg p-6" key={i}>
              <Button color='secondary-gray' iconButton className="mb-8">{icon}</Button>
              <Link
                href="#"
                className="text-sm-medium text-gray-700 flex items-center gap-2 mb-4"
              >
                {link}
                <ArrowRightIcon />
              </Link>

              <h3 className="text-gray-900 text-xl-medium mb-2">{title}</h3>

              <TruncatedText lines={2} className="text-md text-gray-700">
                {description}
              </TruncatedText>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Trust;
