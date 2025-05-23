import  { ComponentPropsWithoutRef } from "react";

const ShareIcon = (props:ComponentPropsWithoutRef<'svg'>) => {
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
        d="M7.15833 11.2584L12.85 14.5751M12.8417 5.42508L7.15833 8.74175M17.5 4.16675C17.5 5.54746 16.3807 6.66675 15 6.66675C13.6193 6.66675 12.5 5.54746 12.5 4.16675C12.5 2.78604 13.6193 1.66675 15 1.66675C16.3807 1.66675 17.5 2.78604 17.5 4.16675ZM7.5 10.0001C7.5 11.3808 6.38071 12.5001 5 12.5001C3.61929 12.5001 2.5 11.3808 2.5 10.0001C2.5 8.61937 3.61929 7.50008 5 7.50008C6.38071 7.50008 7.5 8.61937 7.5 10.0001ZM17.5 15.8334C17.5 17.2141 16.3807 18.3334 15 18.3334C13.6193 18.3334 12.5 17.2141 12.5 15.8334C12.5 14.4527 13.6193 13.3334 15 13.3334C16.3807 13.3334 17.5 14.4527 17.5 15.8334Z"
        stroke="#98A2B3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShareIcon;
