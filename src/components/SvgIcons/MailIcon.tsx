import { ComponentPropsWithoutRef } from "react";

const MailIcon = (props: ComponentPropsWithoutRef<"svg">) => {
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
        d="M18.3334 4.99998C18.3334 4.08331 17.5834 3.33331 16.6667 3.33331H3.33341C2.41675 3.33331 1.66675 4.08331 1.66675 4.99998M18.3334 4.99998V15C18.3334 15.9166 17.5834 16.6666 16.6667 16.6666H3.33341C2.41675 16.6666 1.66675 15.9166 1.66675 15V4.99998M18.3334 4.99998L10.0001 10.8333L1.66675 4.99998"
        stroke="#667085"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MailIcon;
