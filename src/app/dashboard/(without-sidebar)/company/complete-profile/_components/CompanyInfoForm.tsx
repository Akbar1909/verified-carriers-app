import Button from "@/components/Button";
import FileUploader from "@/components/FileUploader";
import Select from "@/components/Select";
import TextField from "@/components/TextField";
import { generateYearRange } from "@/utils/common";
import { Controller, useForm, useFormContext } from "react-hook-form";
import {dayjs} from '@/services/time';
import PhoneField from "@/components/PhoneField";

interface CompanyInfoFormProps {
  nextStep: (nextStep?: number) => void;
}

const years=generateYearRange(1900, dayjs().get('year')).map(year=>({label:year,value:year}));


const CompanyInfoForm = ({ nextStep }: CompanyInfoFormProps) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
    setValue,
    trigger,
  } = useFormContext();

  const onSubmit = handleSubmit((values) => nextStep());

  return (
    <form onSubmit={onSubmit} className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-5 gap-y-5">
      <TextField
        {...register("name")}
        label="Company name"
        labelProps={{ required: true }}
        placeholder="Enter your name"
        helperText={errors?.name?.message}
        hasError={Boolean(errors?.name?.message)}
      />
      <TextField
        {...register("website")}
        label="Company website"
        labelProps={{ required: true }}
        placeholder="Enter your name"
        helperText={errors?.website?.message}
        hasError={Boolean(errors?.website?.message)}
      />
      <TextField
        {...register("salesEmail")}
        label="Sales email"
        labelProps={{ required: true }}
        placeholder="Enter your name"
        helperText={errors?.salesEmail?.message}
        hasError={Boolean(errors?.salesEmail?.message)}
      />
     
       <Controller
        control={control}
        name="contactPhone"
        render={({ field }) => (
          <PhoneField
            inputClass="!w-full"
            label="Contact phone number"
            helperText={errors?.contactPhone?.message}
            hasError={Boolean(errors?.contactPhone?.message)}
            {...field}
          />
        )}
      />
      <TextField
        {...register("mcNumber")}
        label="MC#"
        labelProps={{ required: true }}
        placeholder="Enter your MC#"
        helperText={errors?.mcNumber?.message}
        hasError={Boolean(errors?.mcNumber?.message)}
      />
      <TextField
        {...register("usdotNumber")}
        label="USDOT#"
        labelProps={{ required: true }}
        placeholder="Enter your USDOT#"
        helperText={errors?.usdotNumber?.message}
        hasError={Boolean(errors?.usdotNumber?.message)}
      />
      <Controller
        name="foundingYear"
        control={control}
        render={({ field }) => (
          <Select
            options={years}
            labelProps={{ required: true }}
            label="Founding year"
            helperText={errors?.foundingYear?.message}
            hasError={Boolean(errors?.foundingYear?.message)}
            {...field}
            menuPosition='fixed'
          />
        )}
      />
      <Controller
        name="totalEmployees"
        control={control}
        render={({ field }) => (
          <Select
            options={[
              {
                label:'1+',
                value:1
              },
              {
                label:'10+',
                value:10
              }
            ]}
            labelProps={{ required: true }}
            label="Total employees"
            helperText={errors?.totalEmployees?.message}
            hasError={Boolean(errors?.totalEmployees?.message)}
            {...field}
          />
        )}
      />

      <FileUploader
        name="companyLogos"
        setValue={setValue}
        trigger={trigger}
        helperText={errors?.companyLogos?.message}
        hasError={Boolean(errors?.companyLogos?.message)}
        rootClassName="lg:col-span-2"
      />

      <Button fullWidth className="col-span-2 mt-1" size="lg">
        Continue
      </Button>
    </form>
  );
};

export default CompanyInfoForm;
