import { LinkedinIcon2, XIcon } from "@/components/SvgIcons";
import { formatWithSpaces } from "@/utils/common";
import Link from "next/link";

const PersonalInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl-medium text-gray-900">Stats</h3>

      <article className="w-full flex flex-col gap-6 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] p-6 ">
         <div className="flex flex-col gap-1.5">
              <span className='text-sm-medium text-gray-700'>Country</span>
              <span className='text-md text-gray-900'>United states</span>
         </div>
         <div className="flex flex-col gap-1.5">
            <span className='text-sm-medium text-gray-700'>Twitter</span>
            <Link href="#" className="flex items-center gap-2">
              <XIcon className="[&_path]:fill-[#47ACDF]" />
              <span className="text-md text-gray-900">https://x.com/</span>
            </Link>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className='text-sm-medium text-gray-700'>LinkedIn</span>
            <Link href="#" className="flex items-center gap-2">
              <LinkedinIcon2 className="[&_path]:fill-[#47ACDF]" />
              <span className="text-md text-gray-900">https://x.com/</span>
            </Link>
          </div>

          <div className="flex flex-col gap-1.5">
              <span className='text-sm-medium text-gray-700'>Bio</span>
              <span className='text-md text-gray-900'>
              I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.
              </span>
         </div>
      </article>
    </div>
  );
};

export default PersonalInfo;
