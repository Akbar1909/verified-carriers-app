import Select from "@/components/Select";
import useGetZipCodes from "@/hooks/endpoints/zip-codes/useGetZipCodes";
import useAppDebounce from "@/hooks/helpers/useAppDebounce";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { jsonStringify } from "@/utils/common";
import { Controller, useFormContext } from "react-hook-form";

const DeliveryStep = () => {
  const { createQueryParams, pushToRouter } = useAppNavigation();
  const { handleSubmit, control, watch, setValue } = useFormContext();

  const onSubmit = handleSubmit((values) => {});

    const dropOffInput = watch("dropOffInput");
    const debouncedDropOffInput = useAppDebounce(dropOffInput);

  const { options, isLoading } = useGetZipCodes({ q: debouncedDropOffInput });

  return (
    <div className="flex flex-col gap-20 2xl:gap-30">
      <div className="flex-col gap-2.5">
        <h2 className="text-d-sm-medium text-gray-900">
          Delivery location and type.
        </h2>

        <p className="text-sm text-gray-500">
          Enter the ZIP code or City where your BMW will be parked. <br /> And
          choose location type
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 gap-y-2.5 gap-x-3 w-full lg:w-fit ml-auto"
      >
        <Controller
          control={control}
          name="dropOff"
          render={({ field }) => (
            <Select
              {...field}
              options={options}
              isLoading={isLoading}
              components={{ DropdownIndicator: null }}
              placeholder="ZIP or City"
              rootClassName="w-full lg:w-80"
                inputValue={dropOffInput}
              onInputChange={(e) => setValue("dropOffInput", e)}
              onChange={(e) => {
                field.onChange(e);

                const params = createQueryParams();
                if (e) {
                  params.set(field.name, jsonStringify(e));
                } else {
                  params.delete(field.name);
                }

                pushToRouter(params);
              }}
            />
          )}
        />
        <Controller
          control={control}
          name=""
          render={({ field }) => (
            <Select
              {...field}
              options={[]}
              placeholder="Choose type"
              rootClassName="w-full lg:w-80"
            />
          )}
        />
      </form>
    </div>
  );
};

export default DeliveryStep;
