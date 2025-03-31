import { twMerge } from "tailwind-merge";
import Button from "../Button";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";

interface PaginationProps {
  queryKey?: string;
  className?: string;
  totalPages: number;
}

const Pagination = ({
  queryKey = "page",
  className,
  totalPages,
}: PaginationProps) => {
  const { createQueryParams, pushToRouter, searchParams } = useAppNavigation();

  const currentPage = Number(searchParams.get(queryKey) ?? "0");

  const handleNextPage = () => {
    const params = createQueryParams();

    if (currentPage + 1 === totalPages) {
      return;
    }

    params.set(queryKey, String(currentPage + 1));

    pushToRouter(params);
  };
  const handlePreviousPage = () => {
    const params = createQueryParams();

    if (currentPage === 0) {
      return;
    }

    params.set(queryKey, String(currentPage - 1));

    pushToRouter(params);
  };

  return (
    <div
      className={twMerge("flex items-center justify-between pl-6", className)}
    >
      <span className="text-gray-500 text-md-medium">
        Page {currentPage + 1} of 10
      </span>

      <div className="flex items-center gap-3">
        <Button
          size="md"
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          color="secondary-gray"
        >
          Previous
        </Button>
        <Button
          size="md"
          disabled={currentPage + 1 === totalPages}
          onClick={handleNextPage}
          color="secondary-gray"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
