import React, { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'


interface HelperTextProps extends ComponentPropsWithoutRef<'p'>{

}

const HelperText = ({className, children, ...computedProps}:HelperTextProps) => {
  return (
    <p className={twMerge('text-gray-500 text-sm', className)} {...computedProps}>
        {children}
    </p>
  )
}

export default HelperText