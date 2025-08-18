import SelectionOption from "@/components/SelectionOption";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { useFormContext } from "react-hook-form";

const TrailerTypeStep = () => {
  const { createQueryParams, pushToRouter } = useAppNavigation();

  const { handleSubmit, setValue, watch } = useFormContext();

  const onSubmit = handleSubmit((values) => {});

  const categories = [
    {
      label: "Open trailer",
      value: 1,
    },
    {
      label: "Enclosed trailer",
      value: 2,
    },
  ];

  const shipViaId = watch("shipViaId");

  return (
    <div className="flex flex-col gap-20 2xl:gap-30">
      <div className="flex-col gap-2.5">
        <h2 className="text-d-sm-medium text-gray-900">
          Select the trailer type
        </h2>

        <p className="text-sm text-gray-500">
          Choose whether you want Enclosed or Open trailer for your <br />{" "}
          transportation.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 gap-y-2.5 gap-x-3 w-full lg:w-fit ml-auto"
      >
        {categories.map(({ label, value }, i) => (
          <SelectionOption
            key={i}
            label={label}
            value={value}
            name="shipViaId"
            className="w-full lg:w-[306px]"
            isSelected={value === shipViaId}
            onChange={(name, value) => {
              setValue(name, value);

              const params = createQueryParams();
              params.set(name, value);
              pushToRouter(params);
            }}
          />
        ))}
      </form>
    </div>
  );
};

export default TrailerTypeStep;
