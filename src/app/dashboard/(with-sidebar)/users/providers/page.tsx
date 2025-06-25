"use client";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import {
  EmployeeIcon,
  FolderIcon,
} from "@/components/SvgIcons";

import ProvidersTable from "./_components/ProvdiersTable";
import Show from "@/components/Show";



const ProvidersPage = () => {
  const { searchParams, pathname } = useAppNavigation();

  const tab = searchParams.get("tab") ?? "providers";

  const tabs = [
    {
      label: "Providers",
      value: "providers",
    },
    {
      label: "Reviews",
      value: "reviews",
    },
    {
      label: "Orders",
      value: "orders",
    },
    {
      label: "Transactions",
      value: "transactions",
    },
  ];

  return (
    <div>
      <Breadcrumb
        items={[
          {
            label: "Management",
            href: "#",
            icon: EmployeeIcon,
          },
          {
            label: "Providers",
            href: "#",
            icon: FolderIcon,
          },
        ]}
      />
      <div className="flex items-center gap-5 mb-12">
        {tabs.map(({ label, value }, i) => (
          <Link
            role="button"
            className={twMerge(
              "text-3xl leading-8.5 font-semibold text-stone-300",
              tab === value && "text-stone-900"
            )}
            key={i}
            href={`${pathname}?tab=${value}`}
          >
            {label}
          </Link>
        ))}
      </div>

      <Show when={tab === 'providers'}>
         <ProvidersTable/>
      </Show>
    </div>
  );
};

export default ProvidersPage;
