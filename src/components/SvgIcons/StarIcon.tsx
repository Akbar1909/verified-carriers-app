import  { ComponentPropsWithoutRef } from "react";

const StarIcon = (props:ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.00016 1.33203L10.0602 5.50536L14.6668 6.1787L11.3335 9.42537L12.1202 14.012L8.00016 11.8454L3.88016 14.012L4.66683 9.42537L1.3335 6.1787L5.94016 5.50536L8.00016 1.33203Z"
        stroke="#57534E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StarIcon;
