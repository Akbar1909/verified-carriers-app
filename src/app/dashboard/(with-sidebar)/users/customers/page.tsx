"use client";
import Checkbox from "@/components/Checkbox";
import DataTable from "@/components/Table";
import useGetAllUsers from "@/hooks/endpoints/users/useGetAllUsers";
import usePagination from "@/hooks/helpers/usePagination";
import { ColumnDef } from "@tanstack/react-table";
import { dayjs } from "@/services/time";
import Avatar from "@/components/Avatar";
import Show from "@/components/Show";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import {
  EmployeeIcon,
  FolderIcon,
  MoreVerticalIcon,
} from "@/components/SvgIcons";
import DropdownMenu from "@/components/DropdownMenu";
import Button from "@/components/Button";

const CustomersPage = () => {
  const { searchParams, pathname } = useAppNavigation();
  const { page, size } = usePagination({ prefix: "customers" });
  const { list, pagination } = useGetAllUsers({ page: page + 1, size });

  const tab = searchParams.get("tab") ?? "users";

  const tabs = [
    {
      label: "Users",
      value: "users",
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

  const columns: ColumnDef<any[]> = [
    {
      accessorKey: "checkbox",
      header: <Checkbox />,
      cell: () => <Checkbox />,
      size: 20,
    },
    {
      accessorKey: "id",
      header: "ID",
      cell: (info) => {
        const count = page * size + info?.row?.index + 1;

        return (
          <>
            {count < 99
              ? String(page * size + info?.row?.index + 1).padStart(2, "0")
              : count}
          </>
        );
      },
      size: 100,
    },
    {
      accessorKey: "name",
      header: "Name",
      width: 300,
      cell: (info) => {
        const image = info.getValue();

        const row = list[info.row.index];

        const hasImage = Boolean(row?.image?.id);

        console.log({ row });

        return (
          <div className="flex items-center gap-3">
            <Show when={hasImage}>
              <Avatar
                url={`${process?.env?.NEXT_PUBLIC_API_URL}/files/download/${row?.image?.id}`}
                size="sm"
                className="min-w-8"
              />
            </Show>
            {info.getValue() || '-'}
          </div>
        );
      },
    },
    {
      accessorKey: "phoneNumber",
      header: "Phone",
      cell: (info) => <span className='text-stone-500'>{info.getValue()}</span>,
      size: 100,
      
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: (info) => <span className='text-stone-500'>{info.getValue()}</span>,
    },
    {
      accessorKey: "date",
      header: "Registration date",

      cell: (info) => {
        return dayjs(info.getValue()).format("DD.MM.YYYY");
      },
    },
    {
      accessorKey: "",
      header: "Actions",
      size:30,
      cell: () => (
        <>
          <DropdownMenu
            options={[]}
            toggler={
              <Button iconButton size="md" color="tertiary-gray">
                <MoreVerticalIcon />
              </Button>
            }
          />
        </>
      ),
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
            label: "Users",
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
      <DataTable
        columns={columns}
        data={list}
        pageCount={pagination.totalPages ?? 0}
        totalCount={pagination?.totalCount ?? 0}
        prefix="customers"
        variant="variant2"
      />
    </div>
  );
};

export default CustomersPage;
