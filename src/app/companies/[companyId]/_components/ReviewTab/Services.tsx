import { ExternalLinkIcon } from "@/components/SvgIcons";
import useGetCompanyById from "@/hooks/endpoints/companies/useGetCompanyById";
import { returnArray } from "@/utils/common";
import Link from "next/link";

interface ServicesProps {
  companyId: string;
}

const Services = ({ companyId }: ServicesProps) => {
  const { company } = useGetCompanyById(companyId, { enabled: false });

  const services = returnArray(company.services).map((item) => ({
    label: item.service?.serviceLabel,
    path:'#'
  }));

 

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl-medium text-gray-900">Services</h3>

      <article className="w-full gap-4 flex flex-col bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] p-6">
        {services.map(({ label, path }, i) => (
          <Link
            key={i}
            className="flex items-center gap-2 text-lg-medium underline"
            href={path}
          >
            {label}
            <ExternalLinkIcon className="[&_path]:stroke-gray-500" />
          </Link>
        ))}
      </article>
    </div>
  );
};

export default Services;
