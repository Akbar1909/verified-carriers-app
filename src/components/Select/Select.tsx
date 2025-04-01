"use client";
import { ComponentProps } from "react";
import ReactSelect, { Props } from "react-select";
import FormLabel from "../FormLabel";
import { twMerge } from "tailwind-merge";
import HelperText from "../HelperText";

interface SelectProps extends Props {
  label?: string;
  labelProps?: Omit<ComponentProps<typeof FormLabel>, "children">;
  hasError?: boolean;
  helperText?: string;
  helperTextProps?: Omit<ComponentProps<typeof HelperText>, "children">;
  rootClassName?:string;
}

const Select = ({
  label,
  labelProps,
  hasError,
  helperText,
  helperTextProps,
  rootClassName,
  ...computedProps
}: SelectProps) => {
  const { className: labelClassName, ...computedLabelProps } = labelProps || {};
  const { className: helperTextClassName, ...computedHelperTextProps } =
    helperTextProps || {};

  return (
    <div className={twMerge("flex flex-col w-full relative gap-y-1.5", rootClassName)}>
      {label && (
        <FormLabel className={labelClassName} {...computedLabelProps}>
          {label}
        </FormLabel>
      )}
      <ReactSelect
        components={{ IndicatorSeparator: null }}
        options={[{ label: "Phoenix Baker", value: 1 }]}
        unstyled
        classNames={{
          container: ({ isFocused }) =>
            twMerge("!rounded-lg ", isFocused && "!shadow-input-focus"),
          control: ({ isFocused }) =>
            twMerge(
              "!min-h-11 !shadow-xs !border !border-gray-300 !rounded-lg !pl-3.5 !py-2.5",
              isFocused && "!border-primary-300 "
            ),
          placeholder: () => "!text-gray-500 !text-md",
          indicatorsContainer: () => "pr-3.5",
          dropdownIndicator: () => "text-gray-500",
          menu: () =>
            twMerge(
              "bg-white max-h-80 border-gray-100 shadow-select absolute top-2"
            ),
          option: () =>
            twMerge(
              "h-11 text-gray-900 text-md px-3.5 py-2.5 hover:bg-gray-50"
            ),
        }}
        
        {...computedProps}
      />

      {helperText && (
        <HelperText
          
          className={twMerge('absolute top-[100%] -bottom-1.5',helperTextClassName)}
          {...computedHelperTextProps}
        >
          {helperText}
        </HelperText>
      )}
    </div>
  );
};

export default Select;
