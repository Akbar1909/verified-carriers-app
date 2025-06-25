"use client";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import {
  AnalyticsIcon,
  BroadcastIcon,
  DocPlusIcon,
  FolderIcon,
  HelpIcon,
  HomeIcon,
  InboxIcon,
  MessageCircleIcon,
  OrdersIcon,
  ReportsIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
  TransactionIcon,
  UserIcon,
} from "@/components/SvgIcons";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const commonMenuItems = [
    {
      label: "Search",
      icon: SearchIcon,
      href: "/search",
    },
    {
      label: "Inbox",
      icon: InboxIcon,
      href: "/search",
    },
    {
      label: "Home",
      icon: HomeIcon,
      href: "/home",
    },
    {
      label: "Settings",
      icon: SettingsIcon,
      href: "/search",
    },
    {
      label: "Analytics",
      icon: AnalyticsIcon,
      href: "/search",
    },
  ];

  const managementMenuItems = [
    {
      label: "Users",
      icon: FolderIcon,
      href: "/users",
      items: [
        {
          label: "Customers",
          icon: UserIcon,
          href: "users/customers",
        },
        {
          label: "Providers",
          icon: UserIcon,
          href: "users/providers",
        },
      ],
    },
    {
      label: "Reviews",
      icon: StarIcon,
      href: "/manage-content",
    },
    {
      label: "Orders",
      icon: OrdersIcon,
      href: "/manage-settings",
    },
    {
      label: "Transactions",
      icon: TransactionIcon,
      href: "/manage-settings",
    },
  ];

  const communicationMenuItems = [
    {
      label: "Announcements",
      icon: BroadcastIcon,
      href: "/messages",
    },
    {
      label: "User communication",
      icon: MessageCircleIcon,
      href: "/",
    },
    {
      label: "Content",
      icon: DocPlusIcon,
      href: "/",
    },
    {
      label: "Support",
      icon: HelpIcon,
      href: "/",
    },
    {
      label: "Reports",
      icon: ReportsIcon,
      href: "/",
    },
  ];

  return (
    <aside className={twMerge("w-[266px] min-w-[266px] h-full bg-stone-200")}>
      <header className="pl-[18px] py-4">
        <Link href="/" aria-label="Link to landing">
          <Image
            src="/images/dashboard/GigLogo.png"
            alt="Gig Logo"
            width={53}
            height={29}
          />
        </Link>
      </header>

      <div className="flex flex-col gap-2">
        <ul className="flex flex-col gap-y-2 px-3">
          {commonMenuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={`/dashboard/${item.href}`}
                className="flex items-center gap-x-2 px-[6px] py-[7px]  cursor-pointer"
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-semibold text-stone-600">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-3 flex flex-col gap-1">
          <h2 className="text-stone-400 text-xs-semibold p-1.5 ">Management</h2>
          <ul className="flex flex-col gap-y-2">
            {managementMenuItems.map((item, index) =>
              item.items ? (
                <li key={index} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-x-2 px-[6px] py-[7px] w-full text-left cursor-pointer"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-semibold text-stone-600">
                      {item.label}
                    </span>
                    <span className="text-xs font-semibold text-stone-400 ml-auto">
                      {dropdownOpen ? "▲" : "▼"}
                    </span>
                  </button>
                  {dropdownOpen && (
                    <ul className="pl-6">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={`/dashboard${
                              item.href
                            }/${subItem.label.toLowerCase()}`}
                            className="flex items-center gap-x-2 px-[6px] py-1 text-sm-medium text-stone-600"
                          >
                            <subItem.icon className="w-4 h-4" />
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={index}>
                  <Link
                    href={`/dashboard/${item.href}`}
                    className="flex items-center gap-x-2 px-[6px] py-[7px]  cursor-pointer"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-semibold text-stone-600">
                      {item.label}
                    </span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="px-3 flex flex-col gap-1">
          <h2 className="text-stone-400 text-xs-semibold p-1.5 ">
            Communication
          </h2>
          <ul className="flex flex-col gap-y-2">
            {communicationMenuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={`/dashboard/${item.href}`}
                  className="flex items-center gap-x-2 px-[6px] py-[7px]  cursor-pointer"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-semibold text-stone-600">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
