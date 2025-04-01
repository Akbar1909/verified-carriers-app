import { useState } from "react";
import TDatepicker from "react-tailwindcss-datepicker";

const Datepicker = () => {


    const [value,setValue]=useState(null)

  return (
    <div>
         <TDatepicker 
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    </div>
  )
}

export default Datepicker