import Container from "@/components/Container";
import CompanyView from "./CompanyView";

const TopRatedCompanies = () => {
  return (
    <div className="border-y border-gray-300 bg-gray-50 py-24 px-20">
      <Container className="flex flex-col gap-12">
        <h2 className="text-gray-900 text-d-lg-semibold text-center">
          Top Rated companies
        </h2>

        <div className="grid grid-cols-2">
          <CompanyView />
          <CompanyView className="border-r-0" />
          <CompanyView />
          <CompanyView className="border-r-0" />
        </div>
      </Container>
    </div>
  );
};

export default TopRatedCompanies;
