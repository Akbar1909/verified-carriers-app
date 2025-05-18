import { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Spinner from "../Spinner";

type ButtonSizeType = "sm" | "md" | "lg" | "xl" | "2xl";
type ButtonColorType =
  | "primary"
  | "secondary"
  | "secondary-gray"
  | "tertiary"
  | "tertiary-gray";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  size?: ButtonSizeType;
  color?: ButtonColorType;
  asLink?: boolean;
  destructive?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  withStartDotIcon?: boolean;
  iconButton?: boolean;
  fullWidth?: boolean;
  isPending?: boolean;
}

const Button = ({
  className,
  size = "sm",
  children,
  asLink,
  color = "primary",
  destructive = false,
  startIcon,
  endIcon,
  withStartDotIcon = false,
  iconButton,
  fullWidth,
  isPending,
  ...computedProps
}: ButtonProps) => {
  const buttonSizesStyles: Record<ButtonSizeType, string> = {
    sm: "h-9 px-[14px] py-2 text-sm-medium",
    md: "h-10 px-4 py-[10px] text-sm-medium",
    lg: "h-11 px-[18px] py-[10px] text-md-medium",
    xl: "h-12 px-5 py-3 text-md-medium text-md-medium",
    "2xl": "h-15 py-4 px-7 text-lg-medium [&_svg]:width-6 [&_svg]:height-6",
  };

  const iconSizeStyles: Record<ButtonSizeType, string> = {
    sm: "[&_svg]:w-5 [&_svg]:h-5",
    md: "[&_svg]:w-5 [&_svg]:h-5",
    lg: "[&_svg]:w-5 [&_svg]:h-5",
    xl: "[&_svg]:w-5 [&_svg]:h-5",
    "2xl": "[&_svg]:w-6 [&_svg]:h-6",
  };

  const dotSizeStyles: Record<ButtonSizeType, string> = {
    sm: "w-2 h-2",
    md: "w-[10px] h-[10px]",
    lg: "w-[10px] h-[10px]",
    xl: "w-[10px] h-[10px]",
    "2xl": "w-2.5 h-2.5",
  };

  const iconButtonSizeStyles: Record<ButtonSizeType, string> = {
    sm: "h-9 w-9",
    md: "h-10 w-10",
    lg: "h-11 w-11",
    xl: "h-12 w-12",
    "2xl": "h-14 w-14",
  };

  const colorStyles: Record<ButtonColorType, string> = {
    primary: twMerge(
      "bg-primary-600 border border-primary-600  text-white shadow-xs",
      "hover:bg-primary-700 hover:border-primary-700",
      "focus:shadow-button-focused",
      "disabled:border-primary-200 disabled:bg-primary-200",
      destructive &&
        "bg-error-600 border-error-600 hover:border-error-700 hover:bg-error-700 shadow-xs focus:shadow-button-primary-destructive-focused disabled:bg-error-200 disabled:border-error-200"
    ),
    secondary: twMerge(
      "bg-primary-50 border border-primary-50 text-primary-700 shadow-xs",
      "hover:bg-primary-100 hover:border-primary-100",
      "focus:shadow-button-focused",
      "disabled:border-primary-25 disabled:bg-primary-25 disabled:text-primary-300",
      destructive &&
        twMerge(
          "bg-error-50 border-error-50 text-error-700",
          "hover:bg-error-100 hover:border-error-100",
          "focus:bg-error-50 focus:border-error-50 focus:shadow-button-primary-destructive-focused",
          "disabled:border-error-25 disabled:bg-error-25 disabled:text-error-300"
        )
    ),
    "secondary-gray": twMerge(
      "bg-white border border-gray-300 shadow-xs text-gray-700",
      "hover:bg-gray-50",
      "focus:shadow-button-secondary-gray-focused",
      "disabled:border-gray-200 disabled:text-gray-300",
      destructive &&
        twMerge(
          "border-error-300 text-error-700",
          "hover:bg-error-25",
          "focus:bg-white focus:shadow-button-primary-destructive-focused",
          "disabled:bg-white disabled:border-error-200 disabled:text-error-300"
        )
    ),
    tertiary: twMerge(
      "bg-white text-primary-700",
      "hover:bg-primary-50",
      "disabled:text-gray-300",
      destructive &&
        twMerge(
          "text-error-700",
          "hover:bg-error-50",
          "focus:bg-white focus:border-none",
          "disabled:text-error-300 disabled:bg-white"
        )
    ),
    "tertiary-gray": twMerge(
      "bg-white text-gray-500",
      "hover:bg-gray-50",
      "disabled:text-gray-300",
      destructive &&
        twMerge(
          "text-error-700",
          "hover:text-error-800 hover:bg-error-50",
          "focus:text-error-700 focus:bg-white",
          "disabled:text-error-300"
        )
    ),
  };

  const iconColorStyles: Record<ButtonColorType, string> = {
    primary: "",
    secondary: twMerge(
      "[&_path]:stroke-error-700 [&_circle]:stroke-error-700",
      "group-disabled:[&_circle]:stroke-error-300 group-disabled:[&_path]:stroke-error-300"
    ),
    "secondary-gray": twMerge(
      "[&_path]:stroke-gray-700 [&_circle]:stroke-gray-700",
      "group-disabled:[&_path]:stroke-gray-300 group-disabled:[&_circle]:stroke-gray-300"
    ),
    tertiary: twMerge(
      "[&_path]:stroke-primary-700 [&_circle]:stroke-primary-700",
      "group-disabled:[&_path]:stroke-gray-300 group-disabled:[&_circle]:stroke-gray-300"
    ),
    "tertiary-gray": twMerge(
      "[&_path]:stroke-gray-500 [&_circle]:stroke-gray-700",
      "group-disabled:[&_path]:stroke-gray-300 group-disabled:[&_circle]:stroke-gray-300",
      destructive &&
        twMerge(
          "[&_path]:stroke-error-800 [&_circle]:stroke-error-800",
          "group-disabled:[&_path]:stroke-error-300 group-disabled:[&_circle]:stroke-error-300"
        )
    ),
  };

  const colorDotStyles: Record<ButtonColorType, string> = {
    primary: "bg-white",
    secondary: twMerge(
      "bg-success-500",
      "group-disabled:bg-primary-300",
      destructive && "group-disabled:bg-error-300"
    ),
    "secondary-gray": twMerge(
      "bg-success-500",
      "group-disabled:bg-gray-300",
      destructive && "group-disabled:bg-error-300"
    ),
    tertiary: twMerge(
      "bg-success-500",
      "group-disabled:bg-gray-300",
      destructive && "group-disabled:bg-error-300"
    ),
    "tertiary-gray": twMerge(
      "bg-success-500",
      "group-disabled:bg-gray-300",
      destructive && "group-disabled:bg-error-300"
    ),
  };

  return (
    <button
      className={twMerge(
        "flex w-fit group items-center rounded-lg justify-center transition-all duration-300 gap-2",
        buttonSizesStyles[size],
        colorStyles[color],
        iconButton && iconButtonSizeStyles[size],
        className,
        fullWidth && "w-full"
      )}
      {...computedProps}
    >
      {isPending && (
        <Spinner
          className={twMerge(
            "border-2 absolute",
            size === "lg" && "size-6",
            size === "md" && "size-6",
            size === "sm" && "size-5"
          )}
        />
      )}
      {withStartDotIcon && (
        <span
          className={twMerge(
            "block rounded-full",
            dotSizeStyles[size],
            colorDotStyles[color]
          )}
        />
      )}
      {startIcon && (
        <span
          className={twMerge(
            iconSizeStyles[size],
            iconColorStyles[color],
            isPending && "opacity-0"
          )}
        >
          {startIcon}
        </span>
      )}
      <span
        className={twMerge(
          iconSizeStyles[size],
          iconColorStyles[color],
          isPending && "opacity-0"
        )}
      >
        {children}
      </span>
      {endIcon && (
        <span
          className={twMerge(
            iconSizeStyles[size],
            iconColorStyles[color],
            isPending && "opacity-0"
          )}
        >
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
