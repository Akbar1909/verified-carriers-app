import React, { ComponentPropsWithoutRef } from "react";

const Favicon = (props: ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <mask
        id="mask0_9059_4915"
        style={{maskType:'alpha'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 0H0V24H24V0ZM10.5813 12.4919L12.9617 9.87651C13.821 8.93238 15.0847 7.73005 16.0424 8.57424C16.9314 9.35798 15.7952 10.6387 14.9915 11.5098L11.6585 15.1218C11.629 15.146 11.5997 15.1709 11.5703 15.1958C11.3383 15.3929 11.0943 15.6 10.5813 15.6C9.91168 15.6 9.41993 15.047 8.97385 14.5453L8.95808 14.5276L8.03112 13.4854C7.70325 13.1168 7.36235 12.7024 7.38969 12.2098C7.40516 11.9311 7.51195 11.634 7.8 11.4C7.81614 11.3869 7.83245 11.3742 7.8489 11.362C8.75057 10.6938 9.85875 11.6332 10.5813 12.4919Z"
          fill="url(#pattern0_9059_4915)"
        />
      </mask>
      <g mask="url(#mask0_9059_4915)">
        <rect width="24" height="24" fill="black" />
      </g>
      <defs>
        <pattern
          id="pattern0_9059_4915"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_9059_4915"
            transform="translate(-0.00390625) scale(0.0078125)"
          />
        </pattern>
        <image
          id="image0_9059_4915"
          width="129"
          height="128"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Favicon;
