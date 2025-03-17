import Badge from "@/components/Badge";
import Container from "@/components/Container";
import { ArrowUpRightIcon } from "@/components/SvgIcons";
import TruncatedText from "@/components/TruncatedText";
import Image from "next/image";
import Link from "next/link";

const Insights = () => {
  const articles = [
    {
      url: "/images/insight_test.png",
      tag: "Design",
      minutes: "8",
      title: "Bill Walsh leadership",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning ?",
    },
    {
        url: "/images/insight_test.png",
      tag: "Design",
      minutes: "8",
      title: "Bill Walsh leadership",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning ?",
    },
    {
        url: "/images/insight_test.png",
      tag: "Design",
      minutes: "8",
      title: "Bill Walsh leadership",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning ?",
    },
  ];

  return (
    <div className="py-24 px-20 bg-white">
      <Container>
        <h2 className="text-d-lg-semibold text-gray-900 mb-16">
          Get more insights
        </h2>

        <div className="flex items-center gap-8">
          {articles.map(({ url, tag, minutes, title, description }, i) => (
            <article key={i}>
              <div className="relative rounded-lg overflow-hidden w-[384px] h-60 mb-8">
                <Image
                  className="absolute"
                  src={url}
                  alt=""
                  fill
                  objectFit="contain"
                />
              </div>
              <Badge
                helperChildren={`${minutes} min read`}
                badgeChildren={tag}
              />
              <div className="mt-4 flex justify-between mb-3">
                <h3 className="text-d-xs-semibold text-gray-900">{title}</h3>
                <Link href="#">
                  <ArrowUpRightIcon />
                </Link>
              </div>

              <TruncatedText className="text-md text-gray-500" lines={2}>
                {description}
              </TruncatedText>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Insights;
