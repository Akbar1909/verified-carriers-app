import HelperText from "@/components/HelperText";
import PhoneField from "@/components/PhoneField";
import TextField from "@/components/TextField";
import { Controller, useFormContext } from "react-hook-form";

const PersonalInfoStep = () => {
  const { handleSubmit, control } = useFormContext();

  const onSubmit = handleSubmit((values) => {});

  return (
    <div className="flex flex-col gap-20 2xl:gap-30">
      <div className="flex-col gap-2.5">
        <h2 className="text-d-sm-medium text-gray-900">Enter your info</h2>
      </div>

      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 gap-y-2.5 w-fit ml-auto"
      >
        <Controller
          control={control}
          name=""
          render={({ field }) => (
            <TextField
              rootClassName="w-80"
              placeholder={"Full name"}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name=""
          render={({ field }) => (
            <PhoneField
              placeholder={"Make"}
              containerClass="w-full"
              inputClass="!w-full"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name=""
          render={({ field }) => (
            <div className="w-80 flex flex-col gap-1.5">
              <TextField placeholder={"example@domain.com"} {...field} />
              <HelperText>
                By clicking the "Get an Estimate" button, I agree to Verified
                Carriers' Terms and Conditions and Privacy Policy and that
                Verified Carriers may share my information with its partners.
              </HelperText>
            </div>
          )}
        />
      </form>
    </div>
  );
};

export default PersonalInfoStep;
