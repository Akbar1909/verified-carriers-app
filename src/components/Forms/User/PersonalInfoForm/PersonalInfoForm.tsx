import Button from "@/components/Button";
import FileUploader from "@/components/FileUploader";
import { MailIcon } from "@/components/SvgIcons";
import TextField from "@/components/TextField";
import useAppMutation from "@/hooks/helpers/useAppMutation";
import { request } from "@/services/request";
import React from "react";
import { useFormContext } from "react-hook-form";

interface PersonalInfoFormProps {
  nextStep: () => void;
}

const PersonalInfoForm = ({ nextStep }: PersonalInfoFormProps) => {
  const { handleSubmit, register, setValue, formState:{errors}, trigger, getValues } = useFormContext();


  const { mutate, isPending } = useAppMutation({
    mutationFn: (data) => request.patch("/users/complete-profile", data),
    onSuccess: () => {
      nextStep();
    },
  });

  const onSubmit = handleSubmit(() => {
    nextStep()
  });

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-2 gap-x-6 gap-y-6">
      <TextField
        {...register("firstName")}
        label={"First name"}
        placeholder="Enter first name"
        helperText={errors.firstName?.message ?? ''}
        hasError={Boolean(errors.firstName?.message ?? '')}
      />
      <TextField
        {...register("lastName")}
        label={"Last name"}
        placeholder="Enter last name"
        helperText={errors.lastName?.message ?? ''}
        hasError={Boolean(errors.lastName?.message ?? '')}
      />
      <TextField
        {...register("email")}
        label={"Email"}
        placeholder="Enter email"
        rootClassName="col-span-2"
        startIcon={<MailIcon />}
        helperText={errors.email?.message ?? ''}
        hasError={Boolean(errors.email?.message ?? '')}
      />

      <FileUploader
        name="files"
        setValue={setValue}
        rootClassName="col-span-2"
        trigger={trigger}
        helperText={errors?.files?.message}
        hasError={Boolean(errors?.files?.message)}
      />

      <Button isPending={isPending} className="col-span-2" size="lg" fullWidth>
        Continue
      </Button>
    </form>
  );
};

export default PersonalInfoForm;
