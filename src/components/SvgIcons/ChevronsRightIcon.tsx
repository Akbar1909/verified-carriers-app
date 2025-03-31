import { ComponentPropsWithoutRef } from "react";

const ChevronsRightIcon = (props:ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.75 12.75L13.5 9L9.75 5.25M4.5 12.75L8.25 9L4.5 5.25"
        stroke="#667085"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronsRightIcon;
