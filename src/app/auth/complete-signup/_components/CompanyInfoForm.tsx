import Button from "@/components/Button";
import FileUploader from "@/components/FileUploader";
import Select from "@/components/Select";
import TextField from "@/components/TextField";
import { Controller, useForm } from "react-hook-form";

interface CompanyInfoFormProps {
    nextStep:(nextStep?:number)=>void
}

const CompanyInfoForm = ({nextStep}:CompanyInfoFormProps) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm();

  const onSubmit = handleSubmit((values) => nextStep(2));

  return (
    <form  onSubmit={onSubmit} className="grid grid-cols-2 gap-x-5 gap-y-5">
      <TextField
        {...register("name")}
        label="Company name"
        labelProps={{ required: true }}
        placeholder="Enter your name"
      />
      <TextField
        {...register("name")}
        label="Company website"
        labelProps={{ required: true }}
        placeholder="Enter your name"
      />
      <TextField
        {...register("name")}
        label="Sales email"
        labelProps={{ required: true }}
        placeholder="Enter your name"
      />
      <TextField
        {...register("name")}
        label="Contact phone"
        labelProps={{ required: true }}
        placeholder="Enter your name"
      />
      <TextField
        {...register("name")}
        label="MC#"
        labelProps={{ required: true }}
        placeholder="Enter your number"
      />
      <TextField
        {...register("name")}
        label="USDOT#"
        labelProps={{ required: true }}
        placeholder="Enter your number"
      />
      <Controller
        name="year"
        control={control}
        render={({ field }) => (
          <Select
            options={[]}
            labelProps={{ required: true }}
            label="Founding year"
          />
        )}
      />
      <Controller
        name="year"
        control={control}
        render={({ field }) => (
          <Select
            options={[]}
            labelProps={{ required: true }}
            label="Total employees"
          />
        )}
      />

      <FileUploader rootClassName='col-span-2' />

      <Button fullWidth className='col-span-2 mt-1' size='lg' >Continue</Button>
    </form>
  );
};

export default CompanyInfoForm;
