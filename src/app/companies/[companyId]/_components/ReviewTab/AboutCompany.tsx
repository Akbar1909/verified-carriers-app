import {
  LinkedinIcon2,
  MailIcon,
  PhoneIcon,
  XIcon,
} from "@/components/SvgIcons";
import Link from "next/link";

const AboutCompany = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl-medium text-gray-900">About company</h3>

      <article className="w-full bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] p-6">
        <div className="pb-3">
          <p className="text-md text-gray-900 mb-2">
            I'm a Product Designer based in Melbourne, Australia. I specialise
            in UX/UI design, brand strategy, and Webflow development.
          </p>
          <Link href="#" className="text-blue-600 text-md inline-block pb-6.5">
            Read more
          </Link>

          <div className="flex items-center gap-1.5 pb-6.5">
            <span className="text-sm-medium text-gray-700">Founding year:</span>
            <span className="text-md text-gray-700">2020</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm-medium text-gray-700">
              Number of employees:
            </span>
            <span className="text-md text-gray-700">250-500</span>
          </div>
        </div>

        <div className="py-3 border-y border-gray-200 flex flex-col gap-6">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <h4 className="text-sm-medium text-gray-700">Email</h4>
            <div className="flex items-center gap-2">
              <MailIcon className="[&_path]:stroke-gray-500" />
              <Link href="#" className="text-blue-600 text-md">
                admin@broadway.com
              </Link>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <h4 className="text-sm-medium text-gray-700">Phone</h4>
            <div className="flex items-center gap-2">
              <PhoneIcon className="[&_path]:stroke-gray-500" />
              <Link href="#" className="text-blue-600 text-md">
                530-648-9041
              </Link>
            </div>
          </div>

          {/* MC# and USDOT */}

          <div className="flex items-center">
            <div className="flex flex-col gap-1.5 min-w-[140px]">
              <h4 className="text-sm-medium text-gray-700">MC#</h4>
              <span className="text-md text-gray-700">56438894</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <h4 className="text-sm-medium text-gray-700">USDOT</h4>
              <span className="text-md text-gray-700">56438894</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1.5">
            <h4 className="text-gray-700 text-sm-medium">Location</h4>
            <p className="text-md text-gray-700">
              3420 Bristol St. 92626 Costa Mesa United States
            </p>
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
