import  { ComponentPropsWithoutRef } from "react";

const CloseIcon = (props:ComponentPropsWithoutRef<'svg'>) => {
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
        d="M9 3L3 9M3 3L9 9"
        stroke="#667085"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
