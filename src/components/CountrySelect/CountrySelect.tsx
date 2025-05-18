import { ComponentProps, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import FormLabel from "../FormLabel";
import { twMerge } from "tailwind-merge";
import HelperText from "../HelperText";

interface CountrySelectProps {
  label: string;
  labelProps?: ComponentProps<typeof FormLabel>;
  helperText?: string;
  helperTextProps?: Omit<ComponentProps<typeof HelperText>, "children">;
  hasError?: boolean;
  value?:string;
  name:string;
  setValue:(name:string,value:string)=>void;
}

const CountrySelect = ({
  label,
  helperText,
  helperTextProps,
  hasError,
  labelProps,
  setValue,
  value,
  name
}: CountrySelectProps) => {
  const { className: labelClassName, ...computedLabelProps } = labelProps || {};
  const { className: helperTextClassName, ...computedHelperTextProps } =
    helperTextProps || {};


  return (
    <div className="flex flex-col gap-y-1.5 [&_span[class*='label']]:!text-gray-700">
      {label && (
        <FormLabel
          {...computedLabelProps}
          className={twMerge("", labelClassName)}
        >
          {label}
        </FormLabel>
      )}
      <ReactFlagsSelect
        className="[&_button]:!rounded-lg  [&_button]:border [&_button]:!border-gray-300 [&_button]:shadow-xs [&_span[class*='selectValue']]:!text-gray-500 [&_span[class*='selectValue']]:!text-md "
        selected={value ?? ''}
        searchable
        onSelect={(code:string) => setValue(name, code)}
      />

      {helperText && (
        <HelperText
          className={twMerge(
            "absolute top-12.5 left-0",
            hasError && "text-error-500",
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

export default CountrySelect;
