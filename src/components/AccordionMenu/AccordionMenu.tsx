"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowDownIcon } from "../SvgIcons";
import Show from "../Show";
import { returnArray } from "@/utils/common";
import { twMerge } from "tailwind-merge";

// Define types for menu items
interface MenuItem {
  title: string;
  onClick?: () => void;
  href?: string;
  active?: boolean;
}

// Define types for menu sections
interface MenuSection {
  title: string;
  open?: boolean;
  active?: boolean;
  items?: MenuItem[];
  onClick?:()=>void;
}

// Define props interface for the component
interface AccordionMenuProps {
  menuItems: MenuSection[];
}

const AccordionMenu: React.FC<AccordionMenuProps> = ({ menuItems }) => {
  // Initialize open state based on the 'open' property in the data
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
   {}
  );


  useEffect(()=>{
    setOpenSections(
      menuItems.reduce<Record<string, boolean>>((acc, item) => {
        acc[item.title] = item.open || false;
        return acc;
      }, {})
    )
  },[menuItems])

  // Refs for measuring content heights
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleSection = (title: string): void => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="w-full max-w-md flex flex-col gap-1">
      {menuItems.map((section, index) => (
        <div key={index} className="">
          <button
            className={twMerge(
              "px-3 bg-white group py-2 hover:bg-orange-25 flex items-center justify-between w-full text-left text-gray-600 focus:outline-none",
              section.active && "bg-orange-50"
            )}
            onClick={() => {


              if(typeof section.onClick === 'function'){
                section.onClick();
              }

              

              toggleSection(section.title);
            }}
          >
            <span
              className={twMerge(
                "text-md-medium text-gray-500 group-hover:text-orange-700",
                section.active && "text-orange-700"
              )}
            >
              {section.title}
            </span>
            <Show when={returnArray(section.items).length > 0}>
              <ArrowDownIcon
                className={`h-5 w-5 transition-transform duration-200 ease-out group-hover:[&_path]:stroke-orange-400 ${
                  (section.active && "[&_path]:stroke-orange-400 rotate-180",
                  !section.active && "text-gray-400")
                }`}
              />
            </Show>
          </button>

          <div
            className="overflow-hidden transition-all duration-500 ease-out"
            style={{
              maxHeight: openSections[section.title]
                ? (contentRefs.current[section.title]?.scrollHeight || 1000) +
                  "px"
                : "0px",
            }}
            ref={(el: HTMLDivElement | null) => {
              if (el) contentRefs.current[section.title] = el;
            }}
          >
            <Show when={returnArray(section.items).length > 0}>
              <div className="pl-6 pt-2">
                {section.items &&
                  section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={twMerge(
                        "bg-white group border-l-[2px] border-gray-300 opacity-0 transform transition-all duration-300"
                      )}
                      style={{
                        opacity: openSections[section.title] ? 1 : 0,
                        transform: openSections[section.title]
                          ? "translateY(0)"
                          : "translateY(10px)",
                        transitionDelay: openSections[section.title]
                          ? `${itemIndex * 80}ms`
                          : "0ms",
                      }}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          className="block pl-6 py-2 border-l-2 border-gray-100 hover:border-orange-500 transition-colors duration-150"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <button
                          onClick={item.onClick}
                          className={twMerge(
                            "block py-2 group-hover:bg-gray-50 pl-12 text-gray-700 text-sm-medium text-left w-full transition-colors duration-150",
                            item.active && "bg-gray-50 "
                          )}
                        >
                          {item.title}
                        </button>
                      )}
                    </div>
                  ))}
              </div>
            </Show>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionMenu;
