import Select from "@/components/Select";
import { Controller, useFormContext } from "react-hook-form";

const DeliveryStep = () => {
  const { handleSubmit, control } = useFormContext();

  const onSubmit = handleSubmit((values) => {});

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
        className="grid grid-cols-1 gap-y-2.5 gap-x-3 w-fit ml-auto"
      >
        <Controller
          control={control}
          name=""
          render={({ field }) => (
            <Select
              {...field}
              options={[]}
              components={{ DropdownIndicator: null }}
              placeholder="ZIP or City"
              rootClassName="w-80"
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
              rootClassName="w-80"
            />
          )}
        />
      </form>
    </div>
  );
};

export default DeliveryStep;
