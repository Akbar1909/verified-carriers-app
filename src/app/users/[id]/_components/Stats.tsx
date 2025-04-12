import { formatWithSpaces } from "@/utils/common";


const Stats = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl-medium text-gray-900">Stats</h3>

      <div className="flex flex-col gap-2">
        <article className="w-full bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] p-6 flex items-center justify-between">
          <h3 className="text-lg-medium text-gray-500">Reviews</h3>

          <h3 className="text-d-sm-semibold">{formatWithSpaces(2459)}</h3>
        </article>
        <article className="w-full bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] p-6 flex items-center justify-between">
          <h3 className="text-lg-medium text-gray-500">Reads</h3>

          <h3 className="text-d-sm-semibold">{formatWithSpaces(2459)}</h3>
        </article>
        <article className="w-full bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] p-6 flex items-center justify-between">
          <h3 className="text-lg-medium text-gray-500">Likes</h3>

          <h3 className="text-d-sm-semibold">{formatWithSpaces(2459)}</h3>
        </article>
      
      </div>
    </div>
  );
};

export default Stats;
