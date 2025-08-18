"use client";
import DataTable from "@/components/Table";
import usePagination from "@/hooks/helpers/usePagination";
import { ColumnDef } from "@tanstack/react-table";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import Button from "@/components/Button";
import useAppToggle from "@/hooks/helpers/useAppToggle";
import { useState } from "react";
import useGetReviews from "@/hooks/endpoints/reviews/useGetReviews";
import StarRating from "@/components/Stars";
import dynamic from "next/dynamic";
import Show from "@/components/Show";

const ReviewVerifyModal = dynamic(() => import("./ReviewVerifyModal"), {
  ssr: false,
});

const ReviewsTable = () => {
  const { createQueryParams, pushToRouter } = useAppNavigation();
  const { page, size, pageKey } = usePagination({ prefix: "reviews" });
  const { reviews, pagination, inValidateQuery } = useGetReviews({
    page: page + 1,
    size,
  });
  const [selectedRow, setSelectedRow] = useState(null);
  const { open, close, modal } = useAppToggle<"verify-modal">();

  const columns: ColumnDef<any>[] = [
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
      accessorKey: "user.visibleName",
      header: "User",
      cell: ({ row }) => {
        const user = row.original.user;
        return (
          <div>
            <div className="font-medium">{user.visibleName}</div>
            <div className="text-xs text-gray-500">
              {user.firstName} {user.lastName}
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "company.name",
      header: "Company",
    },
    {
      accessorKey: "rating",
      header: "Rating",
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-1">
            <StarRating rating={row.original.rating} />
          </div>
        );
      },
    },
    {
      accessorKey: "reviewText",
      header: "Review",
      cell: ({ row }) => (
        <span className="line-clamp-2">{row.original.reviewText}</span>
      ),
    },
    {
      accessorKey: "pickupState",
      header: "Route",
      cell: ({ row }) => (
        <span>
          {row.original.pickupState} → {row.original.deliveryState}
        </span>
      ),
    },
    {
      accessorKey: "deliveryDate",
      header: "Delivery Date",
      cell: ({ row }) =>
        new Date(row.original.deliveryDate).toLocaleDateString(),
    },
    {
      accessorKey: "transportationPrice",
      header: "Price",
      cell: ({ row }) => `$${row.original.transportationPrice}`,
    },

    {
      accessorKey: "isVerified",
      header: "Verified",
      cell: ({ row }) => (
        <span
          className={`px-2 py-1 text-xs rounded ${
            row.original.isVerified
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {row.original.isVerified ? "Yes" : "No"}
        </span>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2 items-center justify-center">
          <Show when={row.original.isVerified}>-</Show>

          <Show when={!row.original.isVerified}>
            <Button
              onClick={() => {
                setSelectedRow(row?.original);
                open("verify-modal");
              }}
              size="sm"
            >
              Approve
            </Button>
          </Show>
        </div>
      ),
    },
  ];
  return (
    <>
      <DataTable
        columns={columns}
        data={reviews}
        pageCount={pagination.totalPages ?? 0}
        totalCount={pagination?.totalCount ?? 0}
        prefix="reviews"
        variant="variant2"
      />
      {modal === "verify-modal" && (
        <ReviewVerifyModal
          onClose={close}
          handleSuccess={() => {
            inValidateQuery();
          }}
          row={selectedRow}
        />
      )}
    </>
  );
};

export default ReviewsTable;
