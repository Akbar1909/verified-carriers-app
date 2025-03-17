import React, { ComponentPropsWithoutRef } from "react";

const CornerUpRightIcon = (props:ComponentPropsWithoutRef<'svg'>) => {
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
        d="M12.4999 11.6667L16.6666 7.50004M16.6666 7.50004L12.4999 3.33337M16.6666 7.50004H6.66659C5.78253 7.50004 4.93468 7.85123 4.30956 8.47635C3.68444 9.10147 3.33325 9.94932 3.33325 10.8334V16.6667"
        stroke="#101828"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CornerUpRightIcon;
