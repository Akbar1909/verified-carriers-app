"use client";
import Checkbox from "@/components/Checkbox";
import DataTable from "@/components/Table";
import usePagination from "@/hooks/helpers/usePagination";
import { ColumnDef } from "@tanstack/react-table";
import { dayjs } from "@/services/time";
import Avatar from "@/components/Avatar";
import Show from "@/components/Show";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { twMerge } from "tailwind-merge";
import { MoreVerticalIcon, StarIcon } from "@/components/SvgIcons";
import DropdownMenu from "@/components/DropdownMenu";
import Button from "@/components/Button";
import useGetCompanies from "@/hooks/endpoints/companies/useGetCompanies";
import { returnArray } from "@/utils/common";
import dynamic from "next/dynamic";
import useAppToggle from "@/hooks/helpers/useAppToggle";
import { useState } from "react";

const CompanyVerifyModal = dynamic(() => import("./CompanyVerifyModal"), {
  ssr: false,
});

const ProvidersTable = () => {
  const { createQueryParams, pushToRouter } =
    useAppNavigation();
  const { page, size, pageKey } = usePagination({ prefix: "providers" });
  const { companies, pagination, inValidateQuery } = useGetCompanies({
    page: page + 1,
    size,
  });
  const [selectedRow, setSelectedRow] = useState(null);
  const { open, close, modal } = useAppToggle<"verify-modal">();

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
        const { companyLogos = [] } = companies[info.row.index] || {};

        const hasImage = returnArray(companyLogos).length > 0;
        const image = companyLogos?.[0];

        return (
          <div className="flex items-center gap-3">
            <Show when={hasImage}>
              <Avatar
                url={`${process?.env?.NEXT_PUBLIC_API_URL}/files/download/${image?.file?.id}`}
                size="sm"
                className="min-w-8"
              />
            </Show>
            {info.getValue() || "-"}
          </div>
        );
      },
    },
    {
      accessorKey: "contactPhone",
      header: "Phone",
      cell: (info) => <span className="text-stone-500">{info.getValue()}</span>,
      size: 100,
    },
    {
      accessorKey: "workEmail",
      header: "Email",
      cell: (info) => <span className="text-stone-500">{info.getValue()}</span>,
    },
    {
      accessorKey: "subscription",
      header: "Subscription",
      cell: (info) => (
        <div
          className={twMerge(
            "border-[0.5px] w-fit border-stone-500 bg-[#78716C0D] py-1 px-3 rounded-md"
          )}
        >
          Basic
        </div>
      ),
    },
    {
      accessorKey: "isVerified",
      header: "Verification",
      cell: (info) => {
        const isVerified = info.getValue();

        if (isVerified) {
          return (
            <div className="border-[0.5px] !text-green-500 bg-[#22C55E0D] rounded-md py-1 px-3 text-sm-medium">
              Successful
            </div>
          );
        }

        return (
          <div
            className={twMerge(
              "border-[0.5px] !text-orange-400 text-sm-medium w-fit border-orange-400 bg-[#FB923C1A] py-1 px-3 rounded-md"
            )}
          >
            Pending
          </div>
        );
      },
    },
    {
      accessorKey: "sales",
      header: "Sales",
      cell: (info) => <div>22</div>,
    },
    {
      accessorKey: "review",
      header: "Reviews",
      cell: (info) => (
        <div className="flex items-center gap-1">
          <StarIcon className="[&_path]:fill-orange-400 [&_path]:stroke-orange-400" />
          3
        </div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Registration date",

      cell: (info) => {
        return dayjs(info.getValue()).format("DD.MM.YYYY");
      },
    },
    {
      accessorKey: "actions",
      header: "Actions",
      size: 30,
      cell: (info) => {
        const row = companies[info.row.index];

        const { isVerified } = row;
        return (
          <>
            <DropdownMenu
              options={[
                {
                  children: "Verify",
                  onClick: () => {
                    open("verify-modal");
                    setSelectedRow(row);
                  },
                  hidden: isVerified,
                },
              ]}
              toggler={
                <Button iconButton size="md" color="tertiary-gray">
                  <MoreVerticalIcon />
                </Button>
              }
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <DataTable
        columns={columns}
        data={companies}
        pageCount={pagination.totalPages ?? 0}
        totalCount={pagination?.totalCount ?? 0}
        prefix="providers"
        variant="variant2"
      />
      {modal === "verify-modal" && (
        <CompanyVerifyModal
          onClose={close}
          handleSuccess={() => {
            const params = createQueryParams();
            params.delete(pageKey);
            pushToRouter(params);
            inValidateQuery();
          }}
          row={selectedRow}
        />
      )}
    </>
  );
};

export default ProvidersTable;
