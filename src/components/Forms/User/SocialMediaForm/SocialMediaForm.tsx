import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { useFormContext } from "react-hook-form";

interface SocialMediaFormProps {
  nextStep: (step?: number) => void;
  isPending?:boolean
}

const SocialMediaForm = ({ nextStep , isPending}: SocialMediaFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext();

  const onSubmit = handleSubmit(() => {
    nextStep();
  });

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <TextField
        isUrl
        helperText={errors?.twitter?.message}
        hasError={Boolean(errors?.twitter?.message)}
        label="Twitter"
        {...register("twitter")}
        placeholder="Enter twitter profile"
      />
      <TextField
        isUrl
        label="Linkedin"
        helperText={errors?.linkedin?.message}
        hasError={Boolean(errors?.linkedin?.message)}
        {...register("linkedin")}
        placeholder="Enter linkedin profile"
      />
      <TextField
        isUrl
        label="Facebook"
        helperText={errors?.facebook?.message}
        hasError={Boolean(errors?.facebook?.message)}
        {...register("facebook")}
        placeholder="Enter facebook profile"
      />
      <Button size="lg" isPending={isPending} fullWidth>
        Save
      </Button>
    </form>
  );
};

export default SocialMediaForm;
