import Button from "@/components/Button";
import PhoneField from "@/components/PhoneField";
import { MailIcon, PlusIcon, Trash2Icon } from "@/components/SvgIcons";
import TextField from "@/components/TextField";
import { Controller, useFieldArray, useForm, useFormContext } from "react-hook-form";

interface ContactFormProps {
  nextStep: (step?: number) => void;
  isPending?:boolean;
}

const ContactForm = ({ nextStep, isPending }: ContactFormProps) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "contactInformation",
  });

  const onSubmit = handleSubmit(() => {
    nextStep()
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        {fields.map((field, index: number) => (
          <div className="flex flex-col gap-6" key={field.id}>
            <Controller
              control={control}
              name={`contactInformation.${index}.phone`}
              render={({ field }) => (
                <PhoneField
                  placeholder="Enter contact phone number"
                  inputClass="!w-full"
                  label="Contact phone number"
                  helperText={
                    errors?.contactInformation?.[index]?.phone?.message
                  }
                  hasError={Boolean(
                    errors?.contactInformation?.[index]?.phone?.message
                  )}
                  {...field}
                />
              )}
            />
            <TextField
              label="Contact email address"
              {...register(`contactInformation.${index}.email`)}
              placeholder="olivia@untitledui.com"
              helperText={errors?.contactInformation?.[index]?.email?.message}
              hasError={Boolean(
                errors?.contactInformation?.[index]?.email?.message
              )}
              startIcon={<MailIcon />}
            />
            <div className="flex items-end gap-6">
              <TextField
                helperText={errors?.contactInformation?.[index]?.address?.message}
                hasError={Boolean(
                  errors?.contactInformation?.[index]?.address?.message
                )}
                {...register(`contactInformation.${index}.address`)}
                label="Office address"
              />
              <Button
                size="lg"
                color="secondary-gray"
                disabled={fields.length === 1}
                iconButton
                role="button"
              >
                <Trash2Icon />
              </Button>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({})}
          className="text-sm-medium text-primary-700 flex items-center gap-2"
        >
          Additional address <PlusIcon width={20} height={20} />
        </button>
      </div>

      <Button fullWidth size="lg" isPending={isPending}>
        Create account
      </Button>
    </form>
  );
};

export default ContactForm;
