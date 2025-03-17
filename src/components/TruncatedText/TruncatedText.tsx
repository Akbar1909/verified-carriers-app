import { PolymorphicProps } from "@/utils/helper.types";
import {  ElementType } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export type RTruncatedTextProps<T extends ElementType> = PolymorphicProps<T> & {
  enabled?: boolean;
  lines?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  highlightWords?: (string | null)[]; // Added prop for highlight words
};

/**
 * RTruncatedText - A component for displaying text with truncation and optional highlighted words.
 *
 * This component supports truncating text to a specific number of lines and highlighting specified words within the text.
 * It is also polymorphic, allowing the rendered element type to be customizable.
 *
 * @template T - The type of element to render, e.g., "p", "span", "a".
 *
 * @param {RTruncatedTextProps<T>} props - The props for the component.
 * @param {boolean} [props.enabled=true] - Controls if truncation is enabled.
 * @param {1 | 2 | 3 | 4 | 5 | 6} [props.lines=1] - Number of lines to display before truncation.
 * @param {string[]} [props.highlightWords=[]] - Array of words to highlight within the text.
 * @param {ElementType} [props.as="p"] - The HTML element or React component to render.
 * @param {string} [props.className] - Additional class names for styling the component.
 * @param {React.ReactNode} props.children - The content to display within the component.
 * @returns {JSX.Element} The rendered text component with truncation and optional word highlighting.
 */
function TruncatedText<T extends ElementType = "p">({
  enabled = true,
  className,
  children,
  lines = 1,
  as,
  highlightWords = [],

  ...computedProps
}: RTruncatedTextProps<T>) {
  const Component = as === "a" ? Link : as || "p";

  if (!enabled) {
    return children;
  }

  return (
    <Component
      className={twMerge(
        enabled && "overflow-hidden overflow-ellipsis break-all",
        className,
        lines === 1 && "line-clamp-1",
        lines === 2 && "line-clamp-2",
        lines === 3 && "line-clamp-3",
        lines === 4 && "line-clamp-4",
        lines === 5 && "line-clamp-5",
        lines === 6 && "line-clamp-6",
        lines === 7 && "line-clamp-7",
      )}
      {...computedProps}
    >
      {children}
    </Component>
  );
}

export default TruncatedText;
