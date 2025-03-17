import { ComponentPropsWithoutRef } from "react";

const CheckIcon = (props:ComponentPropsWithoutRef<'svg'>) => {
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
        d="M10 3L4.5 8.5L2 6"
        stroke="#EC4A0A"
        stroke-width="1.6666"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
