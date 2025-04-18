import { ComponentPropsWithoutRef } from "react";

const VerifiedIcon = (props:ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      width="15"
      height="20"
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.734 10.6942C13.2812 11.3554 12.9392 12.3471 12.1185 12.6116C11.5713 12.7438 11.2293 13.2727 11.2293 13.8017C11.2293 14.6612 10.4086 15.2562 9.51945 14.9917C8.97229 14.7934 8.35674 14.9917 8.08316 15.4545C7.60439 16.1818 6.51007 16.1818 6.03131 15.4545C5.68933 14.9917 5.14217 14.7934 4.59501 14.9917C3.63748 15.2562 2.81674 14.595 2.81674 13.8017C2.81674 13.2727 2.47477 12.7438 1.92761 12.6116C1.10687 12.3471 0.764893 11.4215 1.31205 10.6942C1.65403 10.2314 1.65403 9.63636 1.31205 9.23967C0.696498 8.57851 1.03847 7.58678 1.92761 7.32231C2.47477 7.19008 2.81674 6.66116 2.81674 6.13223C2.81674 5.33884 3.63748 4.67769 4.45822 5.00826C5.00538 5.20661 5.62094 5.00826 5.89452 4.54545C6.37328 3.81818 7.4676 3.81818 7.94637 4.54545C8.28834 5.00826 8.8355 5.20661 9.38266 5.00826C10.3402 4.67769 11.1609 5.33884 11.1609 6.13223C11.1609 6.66116 11.5029 7.19008 12.0501 7.32231C12.8708 7.58678 13.2128 8.5124 12.6656 9.23967C12.392 9.63636 12.392 10.2975 12.734 10.6942Z"
        fill="#C4320A"
        stroke="#C4320A"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.75L6.42857 11.25L5 9.8913"
        stroke="#FFEAD5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default VerifiedIcon;
