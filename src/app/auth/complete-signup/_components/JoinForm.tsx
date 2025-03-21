
'use client'
import Button from "@/components/Button";
import { EyeIcon } from "@/components/SvgIcons";
import TextField from "@/components/TextField";
import { useForm } from "react-hook-form";

interface JoinFormProps {
    nextStep:(nextStep?:number)=>void
}


const JoinForm = ({nextStep}:JoinFormProps) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({});

  const onSubmit = handleSubmit((values) => {
    nextStep(1)
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-5">
      <TextField
        {...register("name")}
        label="First name"
        labelProps={{ required: true }}
        placeholder="Enter your name"
      />
      <TextField
        {...register("name")}
        label="Last name"
        labelProps={{ required: true }}
        placeholder="Enter your name"
      />
      <TextField
        {...register("name")}
        label="Work email"
        labelProps={{ required: true }}
        placeholder="Enter your email"
      />
      <TextField
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
      />

      <p className='text-sm text-gray-500'>
      By continuing, you agree to Verified Carriers <span className='text-blue-500 underline'>Terms of Use</span> and <span className='text-blue-500 underline'>Privacy Policy</span>.
      </p>

      <Button className="mt-1" fullWidth size='lg'>Continue</Button>
    </form>
  );
};

export default JoinForm;
