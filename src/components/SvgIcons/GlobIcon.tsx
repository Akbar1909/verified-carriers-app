import { ComponentPropsWithoutRef } from "react";

const GlobIcon = (props:ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.0832 9.99984C19.0832 14.6022 15.3522 18.3332 10.7498 18.3332M19.0832 9.99984C19.0832 5.39746 15.3522 1.6665 10.7498 1.6665M19.0832 9.99984H2.4165M10.7498 18.3332C6.14746 18.3332 2.4165 14.6022 2.4165 9.99984M10.7498 18.3332C12.8342 16.0512 14.0188 13.0898 14.0832 9.99984C14.0188 6.90987 12.8342 3.94846 10.7498 1.6665M10.7498 18.3332C8.66544 16.0512 7.48088 13.0898 7.4165 9.99984C7.48088 6.90987 8.66544 3.94846 10.7498 1.6665M2.4165 9.99984C2.4165 5.39746 6.14746 1.6665 10.7498 1.6665"
        stroke="#344054"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GlobIcon;
