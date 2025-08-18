import Skeleton from "@/components/Skeleton";
import useGetQuoteById from "@/hooks/endpoints/quotes/useGetQuoteById";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import React from "react";

const ResultStep = () => {
  const { searchParams } = useAppNavigation();
  const quoteId = searchParams.get("quoteId");

  const { data, isLoading } = useGetQuoteById({ id: quoteId as string });

  return (
    <div className="flex flex-col">
      <div className="flex lg:items-center justify-between flex-col gap-2 lg:gap-0 lg:flex-row items-start">
        <h3 className="text-d-xs-medium text-gray-500">
          Transportation of your <br />{" "}
          <span className="text-gray-900 inline-flex items-center gap-1">
            “
            <Skeleton isLoading={isLoading} width={110}>
              {data?.carMake}”
            </Skeleton>{" "}
            “
            <Skeleton width={110} isLoading={isLoading}>
              {data?.carModel}
            </Skeleton>
            ”
          </span>
          would cost
        </h3>

        <h2 className="text-d-lg-semibold text-orange-500">
          <Skeleton width={120} isLoading={isLoading}>
            ${data?.price}
          </Skeleton>
        </h2>
      </div>
    </div>
  );
};

export default ResultStep;
