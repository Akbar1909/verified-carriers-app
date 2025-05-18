import Button from "@/components/Button";
import PhoneField from "@/components/PhoneField";
import RichText from "@/components/RichText";
import Select from "@/components/Select";
import { MailIcon } from "@/components/SvgIcons";
import TextField from "@/components/TextField";
import useGetCountries from "@/hooks/endpoints/locations/useGetCountries";
import useGetUsStates from "@/hooks/endpoints/locations/useGetUsStates";
import { Controller, useFormContext } from "react-hook-form";

interface PublicInfoFormProps {
  nextStep: () => void;
}

const PublicInfoForm = ({ nextStep }: PublicInfoFormProps) => {
  const {countries, isLoading:countriesLoading} = useGetCountries();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    control,
    trigger,
    watch
  } = useFormContext();

  const countryCode=watch('country')?.value;

  const {usStates, isLoading:usStatesLoading} = useGetUsStates({enabled:countryCode === 'US'})


  const onSubmit = handleSubmit(() => {
    nextStep();
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-6">
      <TextField
        {...register("visibleName")}
        label={"Visible name"}
        placeholder="Enter visible name"
        helperText={errors?.visibleName?.message}
        hasError={Boolean(errors?.visibleName?.message)}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <PhoneField
            inputClass="!w-full"
            label="Contact phone number"
            helperText={errors?.phoneNumber?.message}
            hasError={Boolean(errors?.phoneNumber?.message)}
            {...field}
          />
        )}
      />

      <TextField
        {...register("contactEmail")}
        label={"Contact email"}
        placeholder="Enter contact email address"
        startIcon={<MailIcon />}
        helperText={errors?.contactEmail?.message}
        hasError={Boolean(errors?.contactEmail?.message)}
      />

      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <Select
            label="Country"
            helperText={errors?.country?.message}
            hasError={Boolean(errors?.country?.message)}
            {...field}
            options={countries}
            isLoading={countriesLoading}
          />
        )}
      />
      <Controller
        control={control}
        name="state"
        render={({ field }) => (
          <Select
            helperText={errors?.state?.message}
            hasError={Boolean(errors?.state?.message)}
            label="State"
            options={usStates}
            isLoading={usStatesLoading}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="bio"
        render={({ field }) => <RichText  helperText={errors?.bio?.message}
        hasError={Boolean(errors?.bio?.message)} setValue={setValue} trigger={trigger} name={field.name} contentProps={field} />}
      />
      <Button isPending={false}  className="col-span-2" size="lg" fullWidth>
        Continue
      </Button>
    </form>
  );
};

export default PublicInfoForm;
