import  { ComponentPropsWithoutRef } from "react";

const FileUploadDocIcon = (props:ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="2" y="2" width="32" height="32" rx="16" fill="#FFEAD5" />
      <rect
        x="2"
        y="2"
        width="32"
        height="32"
        rx="16"
        stroke="#FFF6ED"
        strokeWidth="4"
      />
      <path
        d="M18.6667 11.3334H14C13.6464 11.3334 13.3073 11.4738 13.0572 11.7239C12.8072 11.9739 12.6667 12.3131 12.6667 12.6667V23.3334C12.6667 23.687 12.8072 24.0261 13.0572 24.2762C13.3073 24.5262 13.6464 24.6667 14 24.6667H22C22.3536 24.6667 22.6928 24.5262 22.9428 24.2762C23.1929 24.0261 23.3334 23.687 23.3334 23.3334V16M18.6667 11.3334L23.3334 16M18.6667 11.3334V16H23.3334"
        stroke="#EC4A0A"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FileUploadDocIcon;
