import Avatar from "@/components/Avatar";
import StarRating from "@/components/Stars";
import {
  ChevronsRightIcon,
  ShareIcon,
  ThumbsIcon,
  Trash2Icon,
} from "@/components/SvgIcons";
import Link from "next/link";

const ReviewCard = () => {
  return (
   <article>
    <div className="text-md flex items-center gap-1 pl-6 pb-2">
<span className="text-gray-700">Review of</span>
<Link href="#" className="text-orange-500 underline">
  Safeeds Transport Inc
</Link>
</div>
     <div className="shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] w-full bg-white rounded-lg p-6">
      <div className="flex items-center gap-2.5 pb-4 border-b border-gray-200">
        <Avatar size="md" url="/images/broadway.png" />
        <span className="text-lg-medium text-gray-900">Olivia Rhye</span>
        <span className="text-md text-gray-400">(12 reviews)</span>
        <div role="button" className="flex items-center gap-2.5 ml-auto">
          <ShareIcon width={20} height={20} />
          <span className="text-md-medium text-gray-400">Share</span>
        </div>
      </div>
      <div className="pt-4">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <span className="text-md-medium text-gray-700">4.0</span>
            <StarRating rating={4} />
          </div>

          <time className="ml-auto text-md text-gray-500" dateTime="25.09.2023">
            25.09.2023
          </time>
        </div>
      </div>
      <div className="py-3 flex flex-col gap-4 border-b border-gray-200">
        <p className="text-md text-gray-500">
          That's a fantastic new app feature. You and your team did an excellent
          job of incorporating user testing feedback.
        </p>

        <div className="flex gap-3 items-center">
          {new Array(4).fill({}).map((_, i) => (
            <Avatar
              className="w-18 h-18 rounded-lg"
              key={i}
              url="/images/broadway.png"
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg-semibold text-gray-700">$ 1220</span>
          <div className="flex items-center gap-2">
            <span className="text-md-medium text-gray-700">CA</span>
            <span>
              <ChevronsRightIcon />
            </span>
            <span className="text-md-medium text-gray-700">FL</span>
          </div>
        </div>
      </div>

      <div className="pt-4 flex items-center justify-between">
        <button
          className="flex items-center gap-[11px] text-md-medium text-gray-400"
          type="button"
        >
          <Trash2Icon className="[&_path]:stroke-gray-400" />
          Delete
        </button>
        <button
          className="flex items-center gap-[11px] text-md-medium text-gray-400"
          type="button"
        >
          <ThumbsIcon className="[&_path]:stroke-gray-400" />2 Likes
        </button>
      </div>
    </div>
   </article>
  );
};

export default ReviewCard;
