import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { TabHeaderItemType } from "./Tab.types";
import TabHeaderItem from "./TabHeaderItem";
import { twMerge } from "tailwind-merge";

interface TabProps {
  tabs: TabHeaderItemType[];
  queryKey?: string;
}

const Tab = ({ tabs, queryKey = "tab" }: TabProps) => {
  const { searchParams } = useAppNavigation();

  const currentTab = searchParams.has(queryKey)
    ? searchParams.get(queryKey)
    : tabs.at(0)?.value;

  return (
    <div className="flex items-center">
      {tabs.map((tab, i) => (
        <TabHeaderItem
          className={twMerge(tab.value === currentTab && "text-orange-500 border-b-[2px] border-orange-500")}
          queryKey={queryKey}
          key={i}
          {...tab}
        />
      ))}
    </div>
  );
};

export default Tab;
