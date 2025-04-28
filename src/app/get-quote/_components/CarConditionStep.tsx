import SelectionOption from "@/components/SelectionOption";
import {  useFormContext } from "react-hook-form";

const CarConditionStep = () => {
  const { handleSubmit, setValue, watch } = useFormContext();

  const onSubmit = handleSubmit((values) => {});

  const categories = [
    {
      label: "Yes, it starts and drives",
      value: "CAR_SHIPPING",
    },
    {
      label: "No, it starts but doesn't drive.",
      value: "MOTORCYCLE_SHIPPING",
    },
    {
      label: "No, it doesn't start.",
      value: "BOAT_SHIPPING",
    },
   
  ];

  const category = watch("category");

  return (
    <div className="flex flex-col gap-20 2xl:gap-30">
      <div className="flex-col gap-2.5">
        <h2 className="text-d-sm-medium text-gray-900">
        Can you drive your MB <br/> C350?
        </h2>
        <p className="text-sm text-gray-500">
        This will help carrier choose the best auto truck for your <br/> delivery.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 gap-y-2.5 gap-x-3 w-fit ml-auto"
      >
        {categories.map(({ label, value }, i) => (
          <SelectionOption
            key={i}
            label={label}
            value={value}
            name="category"
            onChange={setValue}
            isSelected={value === category}
          />
        ))}
      </form>
    </div>
  );
};

export default CarConditionStep;
