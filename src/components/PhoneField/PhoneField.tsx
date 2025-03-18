"use client";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { twMerge } from "tailwind-merge";
import "./PhoneField.style.css";
import { ComponentProps } from "react";
import FormLabel from "../FormLabel";
import HelperText from "../HelperText";

interface PhoneFieldProps extends PhoneInputProps {
  hasError?: boolean;
  label?: string;
  labelProps?: ComponentProps<typeof FormLabel>;
  helperText?: string;
  helperTextProps?: ComponentProps<typeof HelperText>;
}

const PhoneField = ({
  containerClass,
  inputClass,
  dropdownClass,
  hasError,
  label,
  labelProps,
  helperText,
  helperTextProps,
  ...computedProps
}: PhoneFieldProps) => {
  const { className: helperTextClassName, ...computedHelperTextProps } =
    helperTextProps || {};

  return (
    <div className="flex flex-col w-full relative gap-y-1.5">
      {label && <FormLabel {...labelProps}>{label}</FormLabel>}
      <PhoneInput
        country={"us"}
        containerClass={twMerge("w-fit", containerClass)}
        dropdownClass={twMerge(
          "bg-white max-h-80 !border-gray-100 !shadow-select",
          dropdownClass
        )}
        inputClass={twMerge(
          "transition-all duration-300 h-full text-md text-gray-900",
          "!h-11 pl-[14px] py-2.5 shadow-xs w-full",
          "border !border-gray-300 bg-white !rounded-lg",
          "placeholder:text-gray-500 placeholder:text-md",
          "focus:outline-0 focus:ring-0",
          "focus:border focus:border-orange-300 focus:shadow-input-focus",
          "disabled:border-gray-300 disabled:bg-gray-50 disabled:placeholder:text-gray-500 disabled:text-gray-500",

          // startIcon && "pl-10.5",
          // endIcon && "pr-10.5",
          hasError &&
            "!border-error-300 focus:border-error-300 !shadow-input-destructive-focus",
          inputClass
          // className
        )}
        {...computedProps}
      />

      {helperText && (
        <HelperText
          className={twMerge(
            "absolute top-[100%] -bottom-1.5",
            helperTextClassName
          )}
          {...computedHelperTextProps}
        >
          {helperText}
        </HelperText>
      )}
    </div>
  );
};

export default PhoneField;
