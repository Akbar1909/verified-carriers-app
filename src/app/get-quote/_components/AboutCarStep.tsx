import Select from "@/components/Select";
import { Controller, useFormContext } from "react-hook-form";

const AboutCarStep = () => {
  const { handleSubmit, control } = useFormContext();

  const onSubmit = handleSubmit((values) => {});



  return (
    <div className="flex flex-col gap-20 2xl:gap-30">
      <div className="flex-col gap-2.5">
        <h2 className="text-d-sm-medium text-gray-900">
          Tell us about your vehicle
        </h2>
      </div>

      <form
        onSubmit={onSubmit}
        className="grid grid-cols-2 gap-y-2.5 gap-x-3 w-fit ml-auto"
      >
        <Controller
          control={control}
          name=""
          render={({ field }) => (
            <Select
              rootClassName="w-80"
              placeholder={"Year"}
              options={[]}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name=""
          render={({ field }) => (
            <Select
              components={{ DropdownIndicator: null }}
              placeholder={"Make"}
              options={[]}
              {...field}
            />
          )}
        />
        <div />
        <Controller
          control={control}
          name=""
          render={({ field }) => (
            <Select
              components={{ DropdownIndicator: null }}
              placeholder={"Model"}
              options={[]}
              {...field}
            />
          )}
        />
      </form>
    </div>
  );
};

export default AboutCarStep;
