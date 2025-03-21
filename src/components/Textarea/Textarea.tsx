import { ComponentProps, ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import FormLabel from "../FormLabel";
import HelperText from "../HelperText";

interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  rootClassName?: string;
  label?: string;
  labelProps?: Omit<ComponentProps<typeof FormLabel>, "children">;
  helperText?: string;
  helperTextProps?: Omit<ComponentProps<typeof HelperText>, "children">;
  hasError?: boolean;
}

const Textarea = ({
  rootClassName,
  className,
  label,
  labelProps,
  helperText,
  helperTextProps,
  hasError,
  ...computedProps
}: TextareaProps) => {
  const { className: labelClassName, ...computedLabelProps } = labelProps || {};
  const { className: helperTextClassName, ...computedHelperTextProps } =
    helperTextProps || {};

  return (
    <div className={twMerge("w-full flex flex-col gap-y-1.5", rootClassName)}>
      {label && (
        <FormLabel className={twMerge(className)} {...computedLabelProps}>
          {label}
        </FormLabel>
      )}
      <div className="w-full relative">
        <textarea
          placeholder={"Enter name here"}
          className={twMerge(

            "transition-all duration-300 h-[128px] text-md text-gray-900",
            "pl-[14px] py-2.5 shadow-xs w-full",
            "border border-gray-300 bg-white rounded-lg",
            "placeholder:text-gray-500 placeholder:text-md",
            "focus:outline-0 focus:ring-0",
            "focus:border focus:border-orange-300 focus:shadow-input-focus",
            "disabled:border-gray-300 disabled:bg-gray-50 disabled:placeholder:text-gray-500 disabled:text-gray-500",
            hasError &&
              "border-error-300 focus:border-error-300 shadow-input-destructive-focus",
            className
          )}
          {...computedProps}
        />

        {helperText && (
          <HelperText
            className={twMerge(
              "absolute top-12.5 left-0",
              hasError && "text-error-500",
              className
            )}
            {...computedHelperTextProps}
          >
            {helperText}
          </HelperText>
        )}
      </div>
    </div>
  );
};

export default Textarea;
