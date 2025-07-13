import {
  LinkedinIcon2,
  MailIcon,
  PhoneIcon,
  XIcon,
} from "@/components/SvgIcons";
import useGetCompanyById from "@/hooks/endpoints/companies/useGetCompanyById";
import useAppConstants from "@/hooks/helpers/useAppConstants";
import { returnArray } from "@/utils/common";
import Link from "next/link";

interface AboutCompanyProps {
  companyId: string;
}

const AboutCompany = ({ companyId }: AboutCompanyProps) => {
  const { company } = useGetCompanyById(companyId, { enabled: false });

  const { employeeCountOptions } = useAppConstants();

  const employeeLabel = employeeCountOptions.find(
    (item) => item.value === company?.totalEmployees
  )?.label;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl-medium text-gray-900">About company</h3>

      <article className="w-full bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] p-6">
        <div className="pb-3">
          <div
            dangerouslySetInnerHTML={{ __html: company?.aboutCompany }}
            className="text-md text-gray-900 mb-2 overflow-hidden overflow-ellipsis break-word line-clamp-6"
          />
          <Link href="#" className="text-blue-600 text-md inline-block pb-6.5">
            Read more
          </Link>

          <div className="flex items-center gap-1.5 pb-6.5">
            <span className="text-sm-medium text-gray-700">Founding year:</span>
            <span className="text-md text-gray-700">
              {company.foundingYear}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm-medium text-gray-700">
              Number of employees:
            </span>
            <span className="text-md text-gray-700">{employeeLabel}</span>
          </div>
        </div>

        <div className="py-3 border-y border-gray-200 flex flex-col gap-6">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <h4 className="text-sm-medium text-gray-700">Email</h4>
            <div className="flex items-center gap-2">
              <MailIcon className="[&_path]:stroke-gray-500" />
              <Link href="#" className="text-blue-600 text-md">
                {company.workEmail}
              </Link>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <h4 className="text-sm-medium text-gray-700">Phone</h4>
            <div className="flex items-center gap-2">
              <PhoneIcon className="[&_path]:stroke-gray-500" />
              <Link href="#" className="text-blue-600 text-md">
                {company.contactPhone}
              </Link>
            </div>
          </div>

          {/* MC# and USDOT */}

          <div className="flex items-center">
            <div className="flex flex-col gap-1.5 min-w-[140px]">
              <h4 className="text-sm-medium text-gray-700">MC#</h4>
              <span className="text-md text-gray-700">{company.mcNumber}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="text-sm-medium text-gray-700">USDOT</h4>
              <span className="text-md text-gray-700">
                {company.usdotNumber}
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1.5">
            <h4 className="text-gray-700 text-sm-medium">Location</h4>
            {returnArray(company.contactInformation).map((item, i) => (
              <p className="text-md text-gray-700" key={i}>
                {item.officeAddress}
              </p>
            ))}
          </div>
        </div>

        <div className="pt-3 flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <h4>Twitter</h4>
            <Link href="#" className="flex items-center gap-2">
              <XIcon className="[&_path]:fill-[#47ACDF]" />
              <span className="text-md text-gray-900">https://x.com/</span>
            </Link>
          </div>
          <div className="flex flex-col gap-1.5">
            <h4>LinkedIn</h4>
            <Link href="#" className="flex items-center gap-2">
              <LinkedinIcon2 className="[&_path]:fill-[#47ACDF]" />
              <span className="text-md text-gray-900">https://x.com/</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AboutCompany;
