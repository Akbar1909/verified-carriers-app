import  { ComponentPropsWithoutRef } from "react";

const ArrowLeftIcon = (props:ComponentPropsWithoutRef<'svg'>) => {
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
        d="M15.8332 10H4.1665M4.1665 10L9.99984 15.8334M4.1665 10L9.99984 4.16669"
        stroke="#344054"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
