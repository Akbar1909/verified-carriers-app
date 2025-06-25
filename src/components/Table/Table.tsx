import { useEffect } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { twMerge } from "tailwind-merge";
import Button from "../Button";
import { ArrowLeftIcon } from "../SvgIcons";
import Pagination from "./Pagination";
import usePagination from "@/hooks/helpers/usePagination";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";

export type DataTableProps<TData extends object> = {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  pageCount: number;
  totalCount: number;
  prefix?: string;
  variant?: "variant1" | "variant2";
};

const getCommonPinningStyles = (column: any): React.CSSProperties => {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn =
    isPinned === "left" && column.getIsLastColumn("left");
  const isFirstRightPinnedColumn =
    isPinned === "right" && column.getIsFirstColumn("right");

  return {
    boxShadow: isLastLeftPinnedColumn
      ? "-4px 0 4px -4px rgba(0,0,0,0.2) inset"
      : isFirstRightPinnedColumn
      ? "4px 0 4px -4px rgba(0,0,0,0.2) inset"
      : undefined,
    left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    opacity: isPinned ? 0.95 : 1,
    position: isPinned ? "sticky" : "relative",
    width: column.getSize(),
    minWidth: column.getSize(), // Avoid shrinking columns
    zIndex: isPinned ? 2 : 0,
  };
};

function DataTable<TData extends object>({
  data,
  columns,
  pageCount,
  totalCount,
  prefix,
  variant = "variant1",
}: DataTableProps<TData>) {
  const { createQueryParams, pushToRouter } = useAppNavigation();
  const { computedPrefix, preparedPage, pageKey } = usePagination({ prefix });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    debugTable: true,
  });

  // Pin the last column (actions) to the right
  useEffect(() => {
    const lastColumn = table.getAllLeafColumns().at(-1);
    if (lastColumn) {
      lastColumn.pin("right");
    }
  }, [table]);

  return (
    <div
      className={twMerge(
        variant === "variant1" && "border border-gray-200",
        variant === "variant1" &&
          "shadow-[0_2px_4px_-2px_rgba(16,24,40,0.06),_0_4px_8px_-2px_rgba(16,24,40,0.1)]"
      )}
    >
      <div className="overflow-x-auto relative   w-full min-w-full ">
        {" "}
        {/* Added min-w-full */}
        <div className="min-w-max">
          {/* Ensure table can grow beyond parent width */}
          <table className="w-full  table-auto border-collapse">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const { column } = header;
                    return (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        className={twMerge(
                          "px-6 py-4 text-left font-medium text-gray-700 border-b border-gray-200 bg-white",
                          variant === 'variant2' && 'py-2.5 text-stone-500 text-xs-semibold h-9',
                          variant === "variant2" &&
                            "!bg-stone-100 border-y !border-stone-200",
                          variant === "variant2" &&
                            "first:rounded-tl-lg first:border-l last:border-r first:rounded-bl-lg last:rounded-br-lg"
                        )}
                        style={getCommonPinningStyles(column)}
                      >
                        <div className="whitespace-nowrap select-none">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    const { column } = cell;
                    return (
                      <td
                        key={cell.id}
                        className="px-6 py-4 text-sm text-gray-900 border-b border-gray-200 bg-white"
                        style={getCommonPinningStyles(column)}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="py-3 sticky bottom-0 w-full bg-white px-6 flex justify-between">
        <Button
          size="sm"
          onClick={() => {
            const params = createQueryParams();

            const nextPage = preparedPage - 1;

            params.set(pageKey, String(nextPage < 0 ? 0 : nextPage));

            pushToRouter(params, { scroll: false });
          }}
          color="secondary-gray"
          startIcon={<ArrowLeftIcon />}
        >
          Previous
        </Button>
        <Pagination
          pageCount={pageCount}
          prefix={prefix}
          totalCount={totalCount}
        />
        <Button
          size="sm"
          color="secondary-gray"
          endIcon={<ArrowLeftIcon className="rotate-180" />}
          onClick={() => {
            const params = createQueryParams();

            const nextPage = preparedPage + 1;

            params.set(
              pageKey,
              String(nextPage >= pageCount ? pageCount - 1 : nextPage)
            );

            pushToRouter(params, { scroll: false });
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default DataTable;
