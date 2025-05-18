import Button from "@/components/Button";
import RichText from "@/components/RichText";
import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";

interface AboutCompanyFormProps {
  nextStep: (nextStep?: number) => void;
}

const AboutCompanyForm = ({ nextStep }: AboutCompanyFormProps) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    trigger
  } = useFormContext();

  const onSubmit = handleSubmit(() => {
    nextStep();
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <Controller
        control={control}
        name="aboutCompany"
        render={({ field }) => (
          <RichText
            helperText={errors?.bio?.message}
            hasError={Boolean(errors?.bio?.message)}
            setValue={setValue}
            trigger={trigger}
            name={field.name}
            contentProps={field}
          />
        )}
      />
      <Button size="lg" fullWidth>
        {" "}
        Continue{" "}
      </Button>
    </form>
  );
};

export default AboutCompanyForm;
