import Button from "@/components/Button";
import Select from "@/components/Select";
import { PlusIcon, Trash2Icon } from "@/components/SvgIcons";
import Textarea from "@/components/Textarea";
import {
  Controller,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";

interface ServiceFormProps {
  nextStep: (step?: number) => void;
}

const ServiceForm = ({ nextStep }: ServiceFormProps) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "services",
  });


  const onSubmit = handleSubmit(() => nextStep());

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {fields.map((field, index) => (
        <div className="flex flex-col gap-6" key={field.id}>
          <div className="flex items-end gap-6">
            <Controller
              control={control}
              name={`services.${index}.serviceName`}
              render={({ field }) => (
                <Select
                  options={[
                    {
                      label: "1",
                      value: "1",
                    },
                  ]}
                  helperText={errors?.services?.[index]?.serviceName?.message}
                  hasError={Boolean(
                    errors?.services?.[index]?.serviceName?.message
                  )}
                  placeholder={"Choose service"}
                  label="Service name"
                  {...field}
                />
              )}
            />
            <Button
              type="button"
              onClick={() => remove(index)}
              disabled={fields.length === 1}
              iconButton
              size="lg"
              color="secondary-gray"
            >
              <Trash2Icon />
            </Button>
          </div>

          <Textarea
            helperText={errors?.services?.[index]?.description?.message}
            hasError={Boolean(errors?.services?.[index]?.description?.message)}
            {...register(`services.${index}.description`)}
            label="Description"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({})}
        className="text-sm-medium text-primary-700 flex items-center gap-2"
      >
        Add service <PlusIcon width={20} height={20} />
      </button>

      <Button fullWidth size="lg">
        Continue
      </Button>
    </form>
  );
};

export default ServiceForm;
