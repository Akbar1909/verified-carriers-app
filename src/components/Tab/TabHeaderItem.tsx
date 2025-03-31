import { twMerge } from "tailwind-merge";
import { TabHeaderItemType } from "./Tab.types";
import Link from "next/link";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";


interface TabHeaderItemProps extends TabHeaderItemType {
  queryKey?: string;
  className:string;
}

const TabHeaderItem = ({
  label,
  queryKey = "tab",
  value,
  className
}: TabHeaderItemProps) => {
  const { searchParams, pathname } = useAppNavigation();

  const getFullUrl = () => {
    const params = new URLSearchParams(searchParams);

    params.set(queryKey, value);

    return `${pathname}?${params.toString()}`;
  };

  const url = getFullUrl();

  return (
    <Link
      href={url}
      className={twMerge("text-sm-semibold text-gray-500 px-3 py-4", className)}
    >
      {label}
    </Link>
  );
};

export default TabHeaderItem;
