import  { ComponentPropsWithoutRef } from "react";

const ArrowUpIcon2 = (props:ComponentPropsWithoutRef<'svg'>) => {
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
        d="M10 15.8332V4.1665M10 4.1665L4.16669 9.99984M10 4.1665L15.8334 9.99984"
        stroke="#344054"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpIcon2;
