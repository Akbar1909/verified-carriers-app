import MyDatePicker from "@/components/Datepicker";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { Controller, useFormContext } from "react-hook-form";

const DateStep = () => {
  const { createQueryParams, pushToRouter } = useAppNavigation();
  const { handleSubmit, control } = useFormContext();

  const onSubmit = handleSubmit((values) => {});

  return (
    <div className="flex flex-col gap-20 2xl:gap-30">
      <div className="flex-col gap-2.5">
        <h2 className="text-d-sm-medium text-gray-900">Estimated ship date</h2>
      </div>

      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 gap-y-2.5 w-full lg:w-fit ml-auto"
      >
        <Controller
          control={control}
          name="estimatedShipDate"
          render={({ field }) => (
            <MyDatePicker
              textFieldProps={{
                placeholder: "Pick a date",
                rootClassName:"w-full lg:w-80"
              }}
              
              {...field}
              selected={field.value}
              onChange={e=>{
                const params=createQueryParams();
                params.set('estimatedShipDate', e);
                pushToRouter(params);

                field.onChange(e);
              }}
            //   onChange={e=>console.log(e)}
            />
          )}
        />
      </form>
    </div>
  );
};

export default DateStep;
