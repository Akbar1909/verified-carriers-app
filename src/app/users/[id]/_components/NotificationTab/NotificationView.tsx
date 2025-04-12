import Avatar from "@/components/Avatar";
import { CloseIcon } from "@/components/SvgIcons";

const NotificationView = () => {
  return (
    <article className="p-6 flex flex-col gap-4 rounded-lg border border-gray-200 shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] bg-white">
      <div className="flex items-center justify-between">
        <p className="text-md text-gray-500">
          Replied to your{" "}
          <span className="text-gray-900 underline">review</span> of{" "}
          <span className="text-gray-900 underline">Safeeds Transport Inc</span>
          .
        </p>

        <button type="button" className="ml-auto">
          <CloseIcon width={24} height={24} />
        </button>
      </div>
      <div className="flex items-start gap-3">
        <Avatar url="/images/avatar.png" size="md" />

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="text-sm-medium text-gray-700">Phoenix Baker</span>
            <time className="text-xs text-gray-500">Friday 2:20pm</time>
          </div>

          <p className="text-md text-gray-900">
            Hey Olivia, can you please review the latest design when you can?
          </p>
        </div>
      </div>
    </article>
  );
};

export default NotificationView;
