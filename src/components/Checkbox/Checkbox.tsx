'use client';

import { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckIcon, MinusIcon } from '../SvgIcons';

type CheckboxState = 'checked' | 'unchecked' | 'indeterminate';

interface CheckboxProps {
  value?: CheckboxState;
  initialState?: CheckboxState;
  onChange?: (state: CheckboxState) => void;
  disabled?: boolean;
  shape?: 'round' | 'rectangle';
  size?: 'sm' | 'md';
  variant?: 'checkbox' | 'radio' | 'circular';
  label?: string;
  helperText?: string;
  labelProps?: ComponentPropsWithoutRef<'label'>;
  className?: string;
}

const Checkbox = ({
  value,
  initialState = 'unchecked',
  onChange,
  disabled,
  shape,
  size,
  variant = 'checkbox',
  label,
  helperText,
  labelProps,
  className
}: CheckboxProps) => {
  const isControlled = value !== undefined;

  const [internalState, setInternalState] = useState<CheckboxState>(initialState);
  const state = isControlled ? value : internalState;

  const [isFocused, setIsFocused] = useState(false);
  const { className: labelClassName, ...labelComputedProps } = labelProps || {};

  const handleClick = () => {
    const newState: CheckboxState = state === 'unchecked' ? 'checked' : 'unchecked';

    if (!isControlled) {
      setInternalState(newState);
    }

    onChange?.(newState);
  };

  return (
    <div className={twMerge('flex items-center gap-2', helperText && 'items-start')}>
      <div className={twMerge(helperText && 'pt-0.5')}>
        <button
          onClick={handleClick}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={twMerge(
            'w-4 h-4 rounded-sm bg-white border border-gray-300 flex items-center justify-center',
            state === 'checked' && 'border border-primary-600 bg-primary-50',
            state === 'indeterminate' && 'border border-primary-600 bg-primary-50',
            isFocused && 'shadow-checkbox-focus border-primary-300',
            'disabled:bg-gray-100 disabled:border-gray-200',
            shape === 'round' && 'rounded-full',
            state === 'checked' && variant === 'radio' && 'bg-primary-600',
            size === 'md' && 'w-5 h-5',
            className
          )}
          role="checkbox"
          aria-checked={state === 'checked' || state === 'indeterminate'}
          disabled={disabled}
        >
          {state === 'checked' && variant === 'radio' && (
            <CheckIcon className={twMerge('[&_path]:stroke-white')} />
          )}
          {state === 'checked' && variant === 'circular' && (
            <div
              className={twMerge(
                'w-1.5 h-1.5 bg-primary-600 rounded-full',
                disabled && 'bg-gray-200',
                size === 'md' && 'w-2 h-2'
              )}
            />
          )}
          {state === 'checked' && variant === 'checkbox' && (
            <CheckIcon className={twMerge(disabled && '[&_path]:stroke-gray-200')} />
          )}
          {state === 'indeterminate' && variant === 'checkbox' && (
            <MinusIcon className={twMerge(disabled && '[&_path]:stroke-gray-200')} />
          )}
        </button>
      </div>

      <div className="flex flex-col">
        {label && (
          <label
            className={twMerge(
              'text-md-medium text-gray-700',
              disabled && 'text-gray-300',
              size === 'sm' && 'text-sm-medium',
              labelClassName
            )}
            {...labelComputedProps}
          >
            {label}
          </label>
        )}
        {helperText && (
          <p className={twMerge('text-md text-gray-500', size === 'sm' && 'text-sm-medium')}>
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
