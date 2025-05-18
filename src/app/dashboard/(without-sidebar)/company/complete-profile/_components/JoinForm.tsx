
'use client'
import Button from "@/components/Button";
import { EyeIcon } from "@/components/SvgIcons";
import TextField from "@/components/TextField";
import { useForm, useFormContext } from "react-hook-form";

interface JoinFormProps {
    nextStep:(nextStep?:number)=>void
}


const JoinForm = ({nextStep}:JoinFormProps) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const onSubmit = handleSubmit(() => {
    nextStep()
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-5">
      <TextField
        {...register("firstName")}
        label="First name"
        labelProps={{ required: true }}
        placeholder="Enter your name"
        helperText={errors.firstName?.message ?? ''}
        hasError={Boolean(errors.firstName?.message ?? '')}
      />
      <TextField
        {...register("lastName")}
        label="Last name"
        labelProps={{ required: true }}
        placeholder="Enter your name"
        helperText={errors.lastName?.message ?? ''}
        hasError={Boolean(errors.lastName?.message ?? '')}
      />
      <TextField
        {...register("workEmail")}
        label="Work email"
        labelProps={{ required: true }}
        placeholder="Enter your email"
        helperText={errors.workEmail?.message ?? ''}
        hasError={Boolean(errors.workEmail?.message ?? '')}
      />
      {/* <TextField
        startIcon={<EyeIcon/>}
        {...register("password")}
        label="Password"
        labelProps={{ required: true }}
        placeholder="Create a password"
      />
      <TextField
        startIcon={<EyeIcon/>}
        {...register("password")}
        label="Confirm password"
        labelProps={{ required: true }}
        placeholder="Create a password"
      /> */}

      <p className='text-sm text-gray-500'>
      By continuing, you agree to Verified Carriers <span className='text-blue-500 underline'>Terms of Use</span> and <span className='text-blue-500 underline'>Privacy Policy</span>.
      </p>

      <Button className="mt-1" fullWidth size='lg'>Continue</Button>
    </form>
  );
};

export default JoinForm;
