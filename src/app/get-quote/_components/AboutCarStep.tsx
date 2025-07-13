import Select from "@/components/Select";
import useGetCarMakes from "@/hooks/endpoints/cars/useGetCarMakes";
import useGetCarModelsByMakeId from "@/hooks/endpoints/cars/useGetCarModelsByMakeId";
import useAppDebounce from "@/hooks/helpers/useAppDebounce";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { dayjs } from "@/services/time";
import { generateYearRange, jsonStringify } from "@/utils/common";
import { Controller, useFormContext } from "react-hook-form";

const years = generateYearRange(1900, dayjs().get("year")).map((year) => ({
  label: year,
  value: year,
}));

const AboutCarStep = () => {
  const { createQueryParams, pushToRouter } = useAppNavigation();
  const { handleSubmit, control, watch, setValue } = useFormContext();

  const onSubmit = handleSubmit((values) => {});
  const makeInputValue = watch("makeInputValue");
  const modelInputValue = watch("modelInputValue");
  const carMake = watch("carMake");

  const debouncedMakeInputValue = useAppDebounce(makeInputValue);
  const debouncedModelInputValue = useAppDebounce(modelInputValue);

  const carMakesState = useGetCarMakes({ search: debouncedMakeInputValue });
  const carModelsState = useGetCarModelsByMakeId({
    makeId: carMake?.value,
    search: debouncedModelInputValue,
  });

  return (
    <div className="flex flex-col gap-20 2xl:gap-30">
      <div className="flex-col gap-2.5">
        <h2 className="text-d-sm-medium text-gray-900">
          Tell us about your vehicle
        </h2>
      </div>

      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-y-2.5 gap-x-3 w-full lg:w-fit ml-auto"
      >
        <Controller
          control={control}
          name="carManufactureYear"
          render={({ field }) => (
            <Select
              rootClassName="w-full lg:w-80"
              placeholder={"Year"}
              options={years}
              {...field}
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
          name="carMake"
          render={({ field }) => (
            <Select
              components={{ DropdownIndicator: null }}
              placeholder={"Make"}
              inputValue={makeInputValue}
              onInputChange={(e) => setValue("makeInputValue", e)}
              options={carMakesState.options}
              isLoading={carMakesState.isFetching}
              {...field}
              onChange={(e) => {
                field.onChange(e);

                setValue("carModel", null);

                const params = createQueryParams();
                if (e) {
                  params.set(field.name, jsonStringify(e));
                } else {
                  params.delete(field.name);
                }

                params.delete("carModel");

                pushToRouter(params);
              }}
            />
          )}
        />
        <div />
        <Controller
          control={control}
          name="carModel"
          render={({ field }) => (
            <Select
              components={{ DropdownIndicator: null }}
              placeholder={"Model"}
              options={carModelsState.options}
              isLoading={carModelsState.isFetching}
              {...field}
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
      </form>
    </div>
  );
};

export default AboutCarStep;
