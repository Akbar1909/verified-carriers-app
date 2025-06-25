import Link from "next/link";
import React from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import Show from "../Show";

interface BreadcrumbProps {
  items: Array<{
    icon: any;
    label: string;
    href: string;
  }>;
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const len = items.length;

  const content = (
    <div className="flex items-center py-[7.5px] pl-4">
      {items.map((item, i) => {
        const isLast = len - 1 === i;

        return (
          <>
          
            <Link
            href={item.href}
            className={twMerge(
              "p-1 flex items-center gap-1.5 text-sm text-stone-600",
              isLast && 'text-stone-900'
            )}
            key={i}
          >
            <item.icon
              className={twMerge(
                "w-4 h-4 [&_path]:stroke-stone-600",
                isLast && "[&_path]:stroke-stone-900"
              )}
            />
            {item.label}
          </Link>

            <Show when={!isLast}>
                <span className="block mx-1 text-sm text-neutral-400">/</span>
            </Show>
          </>
        );
      })}
    </div>
  );

  const container = document.getElementById("breadcrumb-container");

  if (!container) {
    return null;
  }

  return createPortal(content, container);
};

export default Breadcrumb;
