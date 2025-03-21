import Button from "@/components/Button";
import PhoneField from "@/components/PhoneField";
import { MailIcon, PlusIcon, Trash2Icon } from "@/components/SvgIcons";
import TextField from "@/components/TextField";

import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

interface ContactFormProps {
  nextStep: (step?: number) => void;
}

const ContactForm = ({ nextStep }: ContactFormProps) => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      addresses: [{}],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });

  const onSubmit = handleSubmit(() => {});

  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <Controller
          control={control}
          name=""
          render={({ field }) => (
            <PhoneField
              inputClass="!w-full"
              label="Contact phone number"
              {...field}
            />
          )}
        />
        <TextField
          label="Contact email address"
          {...register("email")}
          placeholder="olivia@untitledui.com"
          startIcon={<MailIcon />}
        />
        {fields.map((field) => (
          <div className="flex items-end gap-6" key={field.id}>
            <TextField {...register('address')} label="Office address" />
            <Button
              size="lg"
              color="secondary-gray"
              disabled={fields.length === 1}
              iconButton
              role='button'
            >
              <Trash2Icon />
            </Button>
          </div>
        ))}

<button type='button' onClick={()=>append({})} className="text-sm-medium text-primary-700 flex items-center gap-2">
        Additional address <PlusIcon width={20} height={20} />
      </button>
      </div>
    </form>
  );
};

export default ContactForm;
