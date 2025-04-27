import { twMerge } from "tailwind-merge";
import Show from "../Show";

interface SelectionOptionProps {
  name: string;
  value: string;
  label: string;
  isSelected?: boolean;
  onChange:(name:string, value:string)=>void;
}

const SelectionOption = ({
  name,
  isSelected = false,
  label,
  value,
  onChange
}: SelectionOptionProps) => {
  return (
    <div
      className={twMerge(
        "border group border-gray-200 hover:border-gray-400 rounded-lg group cursor-pointer bg-white p-4 w-[306px]",
        isSelected && "bg-gray-50"
      )}
      onClick={()=>onChange(name,value)}
    >
      <label htmlFor={name} id={name}>
        <div className="flex items-center gap-3">
          <span
            className={twMerge(
              "flex w-5 h-5 rounded-full border cursor-pointer border-gray-300 items-center justify-center",
              isSelected && "border-gray-600"
            )}
          >
            <Show when={isSelected}>
              <span className="block cursor-pointer rounded-full border border-gray-600 bg-gray-600 w-2 h-2"></span>
            </Show>
          </span>
          <span className="text-md-medium cursor-pointer text-gray-700">{label}</span>
        </div>
      </label>
    </div>
  );
};

export default SelectionOption;
