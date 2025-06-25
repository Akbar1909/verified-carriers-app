import { ComponentProps, ComponentPropsWithoutRef } from 'react';
import FloatingPanel from '../FloatingPanel';
import { twMerge } from 'tailwind-merge';

interface DropdownMenuProps extends ComponentProps<typeof FloatingPanel> {
  options: ComponentPropsWithoutRef<'div'>[];
}

/**
 * A dropdown menu component built on top of `FloatingPanel`.
 * It displays a list of options, each passed as a `div` element with their own properties.
 *
 * @param {RDropdownMenuProps} props - The props for the component.
 * @param {ComponentPropsWithoutRef<"div">[]} props.options - Array of options to be displayed in the dropdown menu.
 * @returns {JSX.Element} The rendered dropdown menu.
 */
const DropdownMenu = ({ options, ...computedProps }: DropdownMenuProps) => {
  const { className, ...computedFloatingPanelProps } =
    computedProps?.floatingPanelProps || {};

  return (
    <FloatingPanel
      {...computedProps}
      floatingPanelProps={{
        className: twMerge('min-w-[160px]', className),
        ...computedFloatingPanelProps,
      }}
    >
      <>
        {options.map((option, i) => {
          const { children, className, ...rest } = option;

          return (
            <div
              key={i}
              role="button"
              
              className={twMerge(
                'py-[6px] px-3 bg-white cursor-pointer hover:bg-v2-grey-5 transition-all duration-150 first:rounded-tl-lg first:rounded-tr-lg last:rounded-bl-lg last:rounded-br-lg shadow-2xl',
                className
              )}
              {...rest}
            >
              {children}
            </div>
          );
        })}
      </>
    </FloatingPanel>
  );
};

export default DropdownMenu;
