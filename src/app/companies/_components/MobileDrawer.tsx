"use client";
import FullScreenDrawer from "@/components/FullScreenDrawer";
import { ArrowDownIcon, CloseIcon, FilterIcon } from "@/components/SvgIcons";
import Filter from "./Filter";
import { useState } from "react";

interface MobileDrawerProps{
    total:number;
}

const MobileDrawer = ({total}:MobileDrawerProps) => {

 const [isOpen,setIsOpen] = useState(false);

  return (
    <div className="mb-6 lg:hidden mx-4 flex items-center w-auto  border border-gray-300 rounded-lg">



      <FullScreenDrawer
        togglerClassName="flex-1"
        withCloseButton={false}
        open={isOpen}
        onOpenChange={setIsOpen}
        toggler={
          <button
            type="button"
            className="text-sm-medium w-full flex items-center justify-between py-3 text-gray-900 px-5 relative after:content-[''] after:w-[1px] after:h-full after:bg-gray-300 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2"
          >
            Filter by
            <FilterIcon />
          </button>
        }
      >
        <div className="flex flex-col">
          <header className="flex items-center justify-between mb-4">
            {/* <button type="button" className="text-gray-400 text-md-medium">
              Clear all
            </button> */}
            <h2 className="text-d-xs-semibold text-gray-900">Filter</h2>
            <button type="button" onClick={()=>setIsOpen(false)}>
              <CloseIcon className="[&_path]:stroke-orange-600" width={24} height={24} />
            </button>
          </header>
          <Filter total={total} withSave withFilterTags className="w-full" withSort={false} />
        </div>
      </FullScreenDrawer>
      <button className="text-sm-medium flex items-center justify-between flex-1 py-3 text-gray-900 px-5">
        Sort by <ArrowDownIcon className="[&_path]:stroke-gray-400" />
      </button>
    </div>
  );
};

export default MobileDrawer;
