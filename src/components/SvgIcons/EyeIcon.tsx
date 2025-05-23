import  { ComponentPropsWithoutRef } from "react";

const EyeIcon = (props:ComponentPropsWithoutRef<'svg'>) => {
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
        d="M0.833313 10C0.833313 10 4.16665 3.33334 9.99998 3.33334C15.8333 3.33334 19.1666 10 19.1666 10C19.1666 10 15.8333 16.6667 9.99998 16.6667C4.16665 16.6667 0.833313 10 0.833313 10Z"
        stroke="#667085"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99998 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 9.99998 7.5C8.61927 7.5 7.49998 8.61929 7.49998 10C7.49998 11.3807 8.61927 12.5 9.99998 12.5Z"
        stroke="#667085"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeIcon;
