import SelectionOption from "@/components/SelectionOption";
import {  useFormContext } from "react-hook-form";

const PickCategory = () => {
  const { handleSubmit, setValue, watch } = useFormContext(
    
  );

  const onSubmit = handleSubmit((values) => {});

  const categories = [
    {
      label: "Enclosed auto shipping",
      value: "ENCLOSED_AUTO_SHIPPING",
    },
    {
      label: "Open auto shipping",
      value: "OPEN_AUTO_SHIPPING",
    },
    {
      label: "Door to door",
      value: "DOOR_TO_DOOR",
    },
    {
      label: "Terminal to terminal",
      value: "TERMINAL_TO_TERMINAL",
    },
    {
      label: "Exotic auto",
      value: "EXOTIC_AUTO",
    },
    {
      label: "Classic car",
      value: "CLASSIC_CAR",
    },
    {
      label: "Luxury car",
      value: "LUXURY_CAR",
    },
    {
      label: "RV transportation",
      value: "RV_TRANSPORTATION",
    },
    {
      label: "Truck shipping",
      value: "TRUCK_SHIPPING",
    },
    {
      label: "VAN transportation",
      value: "VAN_TRANSPORTATION",
    },
    
  ];

  const category=watch('category')

  return (
    <div className="flex flex-col gap-18 2xl:gap-30">
      <div className="flex-col gap-2.5">
        <h2 className="text-d-sm-medium text-gray-900">
        Choose subcategory
        </h2>
      
      </div>

      <form onSubmit={onSubmit} className="grid grid-cols-2 gap-y-2.5 gap-x-3 w-fit ml-auto">
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

export default PickCategory;
