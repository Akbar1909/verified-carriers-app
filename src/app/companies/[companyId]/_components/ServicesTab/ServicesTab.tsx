import { CheckCircleIcon } from "@/components/SvgIcons";
import React from "react";
import Features from "./Features";
import CompanyShortView from "@/components/CompanyShortView";

const ServicesTab = () => {
  return (
    <section>
      <h2 className="text-xl-medium text-gray-900 mb-4">Services</h2>

      <div className="grid grid-cols-3 gap-x-4 gap-y-4 mb-6">
        {new Array(7).fill({}).map((_, i) => (
          <article
            key={i}
            className="w-full rounded-lg p-6 bg-white shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)]"
          >
            <span className="w-10 mb-4 rounded-full h-10 border border-gray-300 bg-gray-100 flex items-center justify-center">
              <CheckCircleIcon />

             
            </span>
            <h3 className="mb-2 text-lg-medium text-gray-900">Transparent pricing and reviews</h3>
              <p className='text-md text-gray-700'> 
              Get access to genuine reviews and ratings from real customers. Make decisions based on the experience of other platform members.
              </p>
          </article>
        ))}
      </div>
      <Features/>


      <h2 className="text-xl-medium text-gray-900 mb-4 mt-6">People who looked at this company also looked at</h2>

      <div className="grid grid-cols-3 gap-x-4 gap-y-4">
        {new Array(4).fill({}).map((_, i) => (
          <CompanyShortView key={i} />
        ))}
      </div>
    </section>
  );
};

export default ServicesTab;
