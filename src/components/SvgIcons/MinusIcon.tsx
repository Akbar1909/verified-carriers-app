import  { ComponentPropsWithoutRef } from "react";

const MinusIcon = (props:ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.5 6H9.5"
        stroke="#EC4A0A"
        strokeWidth="1.66666"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MinusIcon;
