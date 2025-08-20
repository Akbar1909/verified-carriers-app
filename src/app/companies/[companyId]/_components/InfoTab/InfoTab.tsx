import useGetCompanyById from "@/hooks/endpoints/companies/useGetCompanyById";
import GallerySection from "./GallerySection";
import OtherReviews from "./OtherReviews";

interface InfoTabProps {
  companyId: string;
}

const InfoTab = ({ companyId }: InfoTabProps) => {
  const { company } = useGetCompanyById(companyId);

  return (
    <section>
      <h2 className="text-xl-medium text-gray-900 mb-4">About company</h2>

      <div className="w-full p-6 bg-white shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] mb-6 rounded-lg">
        <div dangerouslySetInnerHTML={{ __html: company.aboutCompany }} />
      </div>

      <GallerySection />
      <OtherReviews companyId={companyId}/>
    </section>
  );
};

export default InfoTab;
