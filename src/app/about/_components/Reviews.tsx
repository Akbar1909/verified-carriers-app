import Container from "@/components/Container";
import ReviewView from "@/components/ReviewView";


const Reviews = () => {
  return (
    <div className="py-24 bg-white">
      <Container className="flex flex-col">
        <h2 className="text-gray-900 text-center text-d-lg-semibold mb-12">
          What people are saying about{" "}
          <span className="text-orange-700">Verified Carriers</span>
        </h2>

        <div className="grid grid-cols-4 gap-x-8 gap-y-8">
          {new Array(4).fill({}).map((a, i) => (
            <ReviewView key={i} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
