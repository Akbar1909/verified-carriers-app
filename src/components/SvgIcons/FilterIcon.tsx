import  { ComponentPropsWithoutRef } from "react";

const FilterIcon = (props:ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.8332 1.5H1.1665L7.83317 9.38333V14.8333L11.1665 16.5V9.38333L17.8332 1.5Z"
        stroke="#98A2B3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FilterIcon;
