import DatePicker, {DatePickerProps} from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import TextField from "../TextField";
import { ComponentProps } from "react";
import { CalendarIcon } from "../SvgIcons";


interface MyDatePickerProps extends Omit<DatePickerProps, 'customInput'>{
  textFieldProps?:Partial<ComponentProps<typeof TextField>>;
}

const MyDatePicker = ({textFieldProps, ...computedProps}:MyDatePickerProps) => {
 

  return (
   <DatePicker enableTabLoop={false} placeholderText='Pick a date' dateFormat='dd MMMM yyyy' customInput={<TextField endIcon={<CalendarIcon className="[&_path]:stroke-gray-500" />} {...textFieldProps} />} {...computedProps}  />
  );
};

export default MyDatePicker;
