import Avatar from "@/components/Avatar";
import ShareButton from "@/components/ShareButton";
import Show from "@/components/Show";
import StarRating from "@/components/Stars";
import {
  ChevronsRightIcon,
  ShareIcon,
  ThumbsIcon,
  Trash2Icon,
} from "@/components/SvgIcons";
import useAppMutation from "@/hooks/helpers/useAppMutation";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import useAppToggle from "@/hooks/helpers/useAppToggle";
import { request } from "@/services/request";
import { joinStrings, returnArray } from "@/utils/common";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const DeleteReviewConfirm = dynamic(
  () => import("@/components/DeleteReviewConfirm"),
  { ssr: false }
);

interface ReviewCardProps {
  review: Record<string, any>;
  inValidateQuery: () => void;
}

const ReviewCard = ({ review, inValidateQuery }: ReviewCardProps) => {
  const { createQueryParams, pushToRouter } = useAppNavigation();
  const { data } = useSession();

  const { open, close, modal } = useAppToggle<"delete-review-modal">();

  const { mutate } = useAppMutation({
    mutationFn: () => request.post(`reviews/${review.id}/like`, {}),
    onSuccess: () => {
      inValidateQuery();
    },
  });

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
          <Avatar
            size="md"
            url={`${process.env.NEXT_PUBLIC_API_URL}/files/download/${review?.user?.image?.id}`}
          />
          <span className="text-lg-medium text-gray-900">
            {joinStrings([review?.user?.firstName, review?.user?.lastName])}
          </span>
          {/* <span className="text-md text-gray-400">(12 reviews)</span> */}
          <span className="ml-auto">
            <ShareButton title="Share" url="review url">
              <div role="button" className="flex items-center gap-2.5 ml-auto">
                <ShareIcon width={20} height={20} />
                <span className="text-md-medium text-gray-400">Share</span>
              </div>
            </ShareButton>
          </span>
        </div>
        <div className="pt-4">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <span className="text-md-medium text-gray-700">
                {review?.rating}
              </span>
              <StarRating rating={review?.rating} />
            </div>

            <time
              className="ml-auto text-md text-gray-500"
              dateTime="25.09.2023"
            >
              {dayjs(review?.createdAt).format("DD.MM.YYYY")}
            </time>
          </div>
        </div>
        <div className="py-3 flex flex-col gap-4 border-b border-gray-200">
          <p className="text-md text-gray-500">{review?.reviewText}</p>

          <div className="flex gap-3 items-center">
            {returnArray(review?.photos).map(({ file }, i) => (
              <Avatar
                className="w-18 h-18 rounded-lg"
                key={i}
                url={`${process.env.NEXT_PUBLIC_API_URL}/files/download/${file?.id}`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg-semibold text-gray-700">
              $ {review?.transportationPrice}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-md-medium text-gray-700">
                {review?.pickupState}
              </span>
              <span>
                <ChevronsRightIcon />
              </span>
              <span className="text-md-medium text-gray-700">
                {review?.deliveryState}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-4 flex items-center justify-between">
          <Show when={review?.user?.id === data?.id}>
            <button
              onClick={() => {
                open("delete-review-modal");
              }}
              className="flex items-center gap-[11px] text-md-medium text-gray-400"
              type="button"
            >
              <Trash2Icon className="[&_path]:stroke-gray-400" />
              Delete
            </button>
          </Show>
          <button
            className="flex items-center group gap-[11px] text-md-medium text-gray-400 ml-auto"
            type="button"
            onClick={mutate}
          >
            <ThumbsIcon
              className={twMerge(
                "[&_path]:stroke-gray-400 group-hover:[&_path]:stroke-primary-400",
                review.liked &&
                  "[&_path]:fill-primary-300 [&_path]:stroke-primary-500"
              )}
            />
            {review?._count?.reactions} Likes
          </button>
        </div>
      </div>

      <DeleteReviewConfirm
        review={review}
        handleSuccess={() => {
          inValidateQuery();

          const params = createQueryParams();
          params.delete("page");
          pushToRouter(params, { scroll: false });
        }}
        isOpen={modal === "delete-review-modal"}
        onClose={close}
      />
    </article>
  );
};

export default ReviewCard;
