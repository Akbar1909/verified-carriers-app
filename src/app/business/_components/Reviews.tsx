
'use client'
import Container from "@/components/Container";
import ReviewView from "@/components/ReviewView";
import ReviewSlide from "./ReviewSlide";
import useTabletOrMobile from "@/hooks/helpers/useTabletOrMobile";


const Reviews = () => {
  const {isTabletOrMobile} = useTabletOrMobile()
  return (
    <div className="py-24 bg-white">
      <Container className="flex flex-col" fluid={isTabletOrMobile}>
        <h2 className="text-gray-900 text-center text-d-sm-semibold lg:text-d-lg-semibold mb-12">
          What people are saying about{" "}
          <span className="text-orange-700">Verified Carriers</span>
        </h2>

        <div className="lg:grid hidden  grid-cols-4 gap-x-8 gap-y-8">
          {new Array(4).fill({}).map((a, i) => (
            <ReviewView key={i} />
          ))}
        </div>

        <div className="block lg:hidden">
            <ReviewSlide/>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
