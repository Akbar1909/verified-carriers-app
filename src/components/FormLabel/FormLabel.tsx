import { ComponentPropsWithoutRef } from "react"
import { twMerge } from "tailwind-merge"

interface FormLabelProps extends ComponentPropsWithoutRef<'label'>{

}

const FormLabel = ({className,children,...computedProps}:FormLabelProps) => {
  return (
    <label className={twMerge('text-sm-medium text-gray-700',className)} {...computedProps}>
        {children}
    </label>
  )
}

export default FormLabel