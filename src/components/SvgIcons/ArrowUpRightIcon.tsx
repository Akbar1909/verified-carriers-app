import React, { ComponentPropsWithoutRef } from "react";

const ArrowUpRightIcon = (props:ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.83325 14.1666L14.1666 5.83325M14.1666 5.83325H5.83325M14.1666 5.83325V14.1666"
        stroke="#344054"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpRightIcon;
