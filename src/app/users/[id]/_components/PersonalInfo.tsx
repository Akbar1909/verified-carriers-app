import ExternalLink from "@/components/ExternalLink";
import { LinkedinIcon2, XIcon } from "@/components/SvgIcons";
import useGetUserOne from "@/hooks/endpoints/users/useGetUserOne";
import { formatWithSpaces } from "@/utils/common";
import Link from "next/link";

interface PersonalInfoProps {
  userId: string;
}

const PersonalInfo = ({ userId }: PersonalInfoProps) => {
  const { data } = useGetUserOne({ id: userId }, { enabled: false });

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl-medium text-gray-900">Personal info</h3>

      <article className="w-full flex flex-col gap-6 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] p-6 ">
        <div className="flex flex-col gap-1.5">
          <span className="text-sm-medium text-gray-700">Country</span>
          <span className="text-md text-gray-900">{data?.country}</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-sm-medium text-gray-700">Twitter</span>
          <ExternalLink
            href={data?.twitter}
            className="flex items-center gap-2"
          >
            <XIcon className="[&_path]:fill-[#47ACDF]" />
            <span className="text-md text-gray-900">{data?.twitter}</span>
          </ExternalLink>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-sm-medium text-gray-700">LinkedIn</span>
          <ExternalLink href={data?.linkedin} className="flex items-center gap-2">
            <LinkedinIcon2 className="[&_path]:fill-[#47ACDF]" />
            <span className="text-md text-gray-900">{data?.linkedin}</span>
          </ExternalLink>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-sm-medium text-gray-700">Bio</span>
          <div
            dangerouslySetInnerHTML={{ __html: data?.bio || "" }}
            className="text-md text-gray-900"
          ></div>
        </div>
      </article>
    </div>
  );
};

export default PersonalInfo;
