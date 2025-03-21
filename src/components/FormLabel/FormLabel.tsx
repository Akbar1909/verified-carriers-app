import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface FormLabelProps extends ComponentPropsWithoutRef<"label"> {
  required?: boolean;
}

const FormLabel = ({
  className,
  children,
  required,
  ...computedProps
}: FormLabelProps) => {
  return (
    <label
      className={twMerge(
        "text-sm-medium relative text-gray-700 w-fit",
        required &&
          "after:absolute after:top-0 after:-right-2 after:content-['*'] after:text-gray-500 after:text-sm-medium after:ml-0.5",
        className
      )}
      {...computedProps}
    >
      {children}
    </label>
  );
};

export default FormLabel;
