"use client";
import { FC } from "react";
import ReactPaginate from "react-paginate";
import { ArrowLeftIcon, ArrowRightIcon } from "../SvgIcons";
import Button from "../Button";
import usePagination from "@/hooks/helpers/usePagination";

interface PaginationProps {
  totalCount: number;
  pageCount: number;
  prefix?: string;
  suffix?: string;
}

/**
 * A pagination component that wraps `ReactPaginate` to provide customizable pagination controls.
 *
 * @param {PaginationProps} props - The properties for the `Pagination` component.
 * @param {number} props.pageCount - The total number of pages.
 * @param {number} props.totalCount - The total number of items (not currently used, but might be in future extensions).
 * @returns {JSX.Element} A pagination control component.
 *
 * @example
 * // Basic usage of the Pagination component
 * <Pagination pageCount={10} totalCount={100} />
 */

const Pagination: FC<PaginationProps> = ({ pageCount, prefix, suffix }) => {

    const { handlePageChange, preparedPage } = usePagination({ prefix, suffix });

    console.log({preparedPage})

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={null}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel={null}
      forcePage={preparedPage}
      onPageChange={({ selected }) => {
    
        handlePageChange(selected);
      }}
      breakLinkClassName=""
      activeClassName="bg-primary-50 text-primary-700"
      renderOnZeroPageCount={null}
      containerClassName="flex"
      pageClassName="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary-50 hover:text-primary-700 cursor-pointer transition-all duration-200"
    />
  );
};

export default Pagination;
