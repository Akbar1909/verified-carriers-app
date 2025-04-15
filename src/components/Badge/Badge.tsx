import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Show from "../Show";

interface BadgeProps {
  color?: "primary" | 'gray' | 'error' | 'warning' | 'success';
  theme?: "light" | "medium" | "dark";
  badgeChildren?: ReactNode;
  helperChildren?: ReactNode;
  size?:'md' | 'lg';
  wrapperClassName?:string;
  badgeClassName?:string;
}

const Badge = ({
  color = "primary",
  theme = "light",
  badgeChildren,
  helperChildren,
  size='md',
  wrapperClassName,
  badgeClassName
}: BadgeProps) => {
  return (
    <div
      role="group"
      className={twMerge(
        "p-1 pr-3 rounded-2xl flex items-center gap-2 w-fit",
        size === 'md' && 'h-7.5',
        size === 'lg' && 'h-8',
        color === "primary" && theme === "light" && "bg-primary-50",
        color === "primary" && theme === "medium" && "bg-primary-100",
        color === "primary" && theme === "dark" && "bg-primary-50",
        color === 'gray' && theme === 'light' && 'bg-gray-50',
        color === 'gray' && theme === 'medium' && 'bg-gray-100',
        color === 'gray' && theme === 'dark' && 'bg-gray-50',
        color === 'error' && theme === 'light' && 'bg-error-50',
        color === 'error' && theme === 'medium' && 'bg-error-100',
        color === 'error' && theme ==='dark' && 'bg-error-50',
        color === 'warning' && theme === 'light' && 'bg-warning-50',
        color === 'warning' && theme === 'medium' && 'bg-warning-100',
        color === 'warning' && theme ==='dark' && 'bg-warning-50',
        color === 'success' && theme === 'light' && 'bg-success-50',
        color === 'success' && theme === 'medium' && 'bg-success-100',
        color === 'success' && theme ==='dark' && 'bg-success-50',
        wrapperClassName
      )}
    >
      <div
        className={twMerge(
          "px-2 py-0.5 text-xs-medium rounded-2xl",
          size === 'lg' && 'text-sm-medium',
          color === "primary" && theme === 'light' && "text-primary-700 bg-white",
          color === "primary" && theme === 'medium' && "text-primary-700 bg-primary-50",
          color === 'primary' && theme === 'dark' && 'bg-primary-600 text-white',
          color === 'gray' && theme === 'light' && 'bg-white text-gray-700',
          color === 'gray' && theme === 'medium' && 'bg-gray-100 text-gray-700',
          color === 'gray' && theme ==='dark' && 'bg-gray-700 text-white',
          color === 'error' && theme === 'light' && 'bg-white text-error-700',
          color === 'error' && theme === 'medium' && 'bg-error-50 text-error-700',
          color === 'error' && theme === 'dark' && 'bg-error-600 text-white',
          color === 'warning' && theme === 'light' && 'bg-white text-warning-700',
          color === 'warning' && theme === 'medium' && 'bg-error-50 text-warning-700',
          color === 'warning' && theme === 'dark' && 'bg-warning-600 text-white',
          color === 'success' && theme === 'light' && 'bg-white text-success-700',
          color === 'success' && theme === 'medium' && 'bg-error-50 text-success-700',
          color === 'success' && theme === 'dark' && 'bg-success-600 text-white',
          badgeClassName
        )}
      >
        {badgeChildren}
      </div>

     <Show when={Boolean(helperChildren)}>
     <span
        className={twMerge(
          "text-xs-medium",
          size === 'lg' && 'text-sm-medium',
          color === "primary" && "text-primary-700",
          color === 'gray' && 'text-gray-700',
          color === 'error' && 'text-error-700',
          color === 'warning' && 'text-warning-700',
          color === 'warning' && 'text-success-700',
        )}
      >
        {helperChildren}
      </span>
     </Show>
    </div>
  );
};

export default Badge;
