import  { ComponentPropsWithoutRef } from "react";

const AwardIcon = (props:ComponentPropsWithoutRef<'svg'>) => {
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
        d="M6.84169 11.575L5.83335 19.1667L10 16.6667L14.1667 19.1667L13.1584 11.5667M15.8334 6.66668C15.8334 9.88834 13.2217 12.5 10 12.5C6.77836 12.5 4.16669 9.88834 4.16669 6.66668C4.16669 3.44502 6.77836 0.833344 10 0.833344C13.2217 0.833344 15.8334 3.44502 15.8334 6.66668Z"
        stroke="#C4320A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AwardIcon;
