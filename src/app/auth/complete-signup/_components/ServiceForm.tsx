import Button from "@/components/Button";
import Select from "@/components/Select";
import { PlusIcon, Trash2Icon } from "@/components/SvgIcons";
import Textarea from "@/components/Textarea";
import { Controller, useFieldArray, useForm } from "react-hook-form";

interface ServiceFormProps {
  nextStep: (step?: number) => void;
}

const ServiceForm = ({ nextStep }: ServiceFormProps) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm({
    defaultValues: {
      services: [{}],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "services",
  });

  const onSubmit=handleSubmit(()=>nextStep(4))

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {fields.map((field) => (
        <div className="flex flex-col gap-6" key={field.id}>
          <div className="flex items-end gap-6">
            <Controller
              control={control}
              name=""
              render={({ field }) => (
                <Select
                  options={[]}
                  placeholder={"Choose service"}
                  label="Service name"
                  {...field}
                />
              )}
            />
            <Button type='button' disabled={fields.length === 1} iconButton size="lg" color="secondary-gray">
              <Trash2Icon />
            </Button>
          </div>

          <Textarea {...register("description")} label="Description" />
        </div>
      ))}

      <button type='button' onClick={()=>append({})} className="text-sm-medium text-primary-700 flex items-center gap-2">
        Add service <PlusIcon width={20} height={20} />
      </button>

      <Button fullWidth size='lg'>Continue</Button>
    </form>
  );
};

export default ServiceForm;
