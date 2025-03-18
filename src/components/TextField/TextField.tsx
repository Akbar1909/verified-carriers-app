import { ComponentProps, ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import FormLabel from "../FormLabel";
import HelperText from "../HelperText";

interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {
  rootClassName?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  startIconProps?: ComponentPropsWithoutRef<"div">;
  endIconProps?: ComponentPropsWithoutRef<"div">;
  label?: string;
  labelProps?: Omit<ComponentProps<typeof FormLabel>, "children">;
  helperText?: string;
  helperTextProps?: Omit<ComponentProps<typeof HelperText>, "children">;
  hasError?:boolean;
}

const TextField = ({
  rootClassName,
  className,
  startIcon,
  endIcon,
  startIconProps,
  endIconProps,
  label,
  labelProps,
  helperText,
  helperTextProps,
  hasError,
  ...computedProps
}: TextFieldProps) => {
  const { className: startIconClassName, ...computedStartIconProps } =
    startIconProps || {};
  const { className: endIconClassName, ...computedEndIconProps } =
    endIconProps || {};
  const { className: labelClassName, ...computedLabelProps } = labelProps || {};
  const { className: helperTextClassName, ...computedHelperTextProps } =
    helperTextProps || {};

  return (
    <div className={twMerge("w-full flex flex-col gap-y-1.5", rootClassName)}>
      {label && (
        <FormLabel className={twMerge("", className)} {...computedLabelProps}>
          {label}
        </FormLabel>
      )}
      <div className="w-full relative">
        {startIcon && (
          <div
            className={twMerge(
              "absolute left-3.5 top-1/2 -translate-y-1/2 z-50",
              startIconClassName
            )}
            {...computedStartIconProps}
          >
            {startIcon}
          </div>
        )}
        <input
          placeholder={"Enter name here"}
          className={twMerge(
            'transition-all duration-300 h-full text-md text-gray-900',
            "h-11 pl-[14px] py-2.5 shadow-xs w-full",
            "border border-gray-300 bg-white rounded-lg",
            "placeholder:text-gray-500 placeholder:text-md",
            "focus:outline-0 focus:ring-0",
            "focus:border focus:border-orange-300 focus:shadow-input-focus",
            "disabled:border-gray-300 disabled:bg-gray-50 disabled:placeholder:text-gray-500 disabled:text-gray-500",
            startIcon && "pl-10.5",
            endIcon && "pr-10.5",
            hasError && 'border-error-300 focus:border-error-300 shadow-input-destructive-focus',
            className
          )}
          {...computedProps}
        />

        {endIcon && (
          <div
            className={twMerge(
              "absolute right-3.5 top-1/2 -translate-y-1/2 z-50",
              hasError && '[&_path]:stroke-error-500 [&_path]:circle-error-500',
              endIconClassName
            )}
            {...computedEndIconProps}
          >
            {endIcon}
          </div>
        )}

        {helperText && (
          <HelperText
            className={twMerge('absolute top-12.5 left-0', hasError && 'text-error-500', className)}
            {...computedHelperTextProps}
          >
            {helperText}
          </HelperText>
        )}
      </div>
    </div>
  );
};

export default TextField;
