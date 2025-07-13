import SelectionOption from "@/components/SelectionOption";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import {  useFormContext } from "react-hook-form";

const PickCategory = () => {
  const {searchParams, createQueryParams, pushToRouter} = useAppNavigation()
  const { handleSubmit, setValue, watch } = useFormContext();

  const onSubmit = handleSubmit((values) => {});

  

  const categories = [
    {
      label: "Car shipping",
      value: "CAR_SHIPPING",
    },
    {
      label: "Motorcycle shipping",
      value: "MOTORCYCLE_SHIPPING",
    },
    {
      label: "Boat shipping",
      value: "BOAT_SHIPPING",
    },
    {
      label: "Heavy equipment shipping",
      value: "HEAVY_EQUIPMENT_SHIPPING",
    },
  ];

  const category = watch("category");

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
        className="grid w-full grid-cols-1 lg:grid-cols-2 gap-y-2.5 gap-x-3 lg:w-fit lg:ml-auto"
      >
        {categories.map(({ label, value }, i) => (
          <SelectionOption
            key={i}
            label={label}
            value={value}
            name="category"
            className="w-full lg:w-[306px]"
            onChange={(name,value)=>{
              setValue(name,value);

              const params=createQueryParams();
              params.set(name, value);
              pushToRouter(params);
            }}
            isSelected={value === category}
          />
        ))}
      </form>
    </div>
  );
};

export default PickCategory;
