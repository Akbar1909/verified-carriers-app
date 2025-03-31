import { CheckIcon } from "@/components/SvgIcons";
import React from "react";

const Features = () => {
  return (
    <div className="p-6 flex flex-col gap-6 bg-white shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)]">
      <div className="flex flex-col gap-6">
        <h3 className="text-xl-medium text-gray-900">
          “Features category name”
        </h3>

        <ul className="grid grid-cols-3 gap-y-6 gap-x-4">
              {
                 new Array(6).fill({}).map((_,i)=><li className="flex items-center gap-2" key={i}>
                     <CheckIcon width={24} height={24} />
                     <span>Feature name</span>
                 </li>)
              }
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-xl-medium text-gray-900">
          “Features category name”
        </h3>

        <ul className="grid grid-cols-3 gap-y-6 gap-x-4">
              {
                 new Array(6).fill({}).map((_,i)=><li className="flex items-center gap-2" key={i}>
                     <CheckIcon width={24} height={24} />
                     <span>Feature name</span>
                 </li>)
              }
        </ul>
      </div>
    </div>
  );
};

export default Features;
