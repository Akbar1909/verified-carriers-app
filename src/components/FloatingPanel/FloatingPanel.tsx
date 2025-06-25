import { ComponentPropsWithoutRef, ReactNode, useRef, useState } from 'react';
import {
  offset,
  useFloating,
  useDismiss,
  useInteractions,
  FloatingArrow,
  autoUpdate,
  arrow,
  FloatingPortal,
} from '@floating-ui/react';
import { twMerge } from 'tailwind-merge';


export interface FloatingPanelProps {
  floatingOptions?: Partial<Parameters<typeof useFloating>['0']>;
  children?: ReactNode;
  toggler?: ReactNode;
  floatingPanelProps?: ComponentPropsWithoutRef<'div'>;
  mode?: 'hover' | 'click';
  enableArrow?: boolean;
  disableMouseLeave?: boolean;
}

/**
 * Props for the `RFloatingPanel` component.
 *
 * @typedef {Object} FloatingPanelProps
 * @property {Partial<Parameters<typeof useFloating>["0"]>} [floatingOptions] - Options to customize the floating behavior, such as placement and middleware.
 * @property {ReactNode} [children] - Content to be displayed inside the floating panel.
 * @property {ReactNode} [toggler] - Element that toggles the visibility of the floating panel when clicked.
 * @property {ComponentPropsWithoutRef<"div">} [floatingPanelProps] - Additional props to be passed to the floating panel's wrapper div.
 */

/**
 * A floating panel component that can be toggled open and closed. It uses `@floating-ui/react` to position the panel relative to a reference element.
 *
 * @param {RFloatingPanelProps} props - The props for the component.
 * @returns {JSX.Element} The rendered floating panel component.
 */
const FloatingPanel = ({
  floatingOptions = {},
  floatingPanelProps = {},
  toggler,
  children,
  mode = 'click',
  enableArrow = false,
}: FloatingPanelProps) => {
  
  const controllerState = useState(false);
  const arrowRef = useRef(null);
  const isOpen = floatingOptions?.open || controllerState[0];
  const setIsOpen = floatingOptions?.onOpenChange || controllerState[1];

  if (
    Object.hasOwn(floatingOptions, 'open') &&
    !Object.hasOwn(floatingOptions, 'onOpenChange')
  ) {
    throw new Error(
      t(
        "floatingOptions open keyni o'z ichiga olgani sababli, onOpenChange ham majburiy bo'ldi"
      )
    );
  }

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-end',
    middleware: [offset(5), arrow({ element: arrowRef })],
    whileElementsMounted: autoUpdate,

    ...floatingOptions,
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const { className, ...computedProps } = floatingPanelProps;

  return (
    <>
      <span
        role="button"
        ref={refs.setReference}
        className="w-fit"
        {...(mode === 'click' && {
          onClick: (e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          },
        })}
        {...(mode === 'hover' && {
          onMouseEnter: () => setIsOpen(true),
          onMouseLeave: () => setIsOpen(false),
        })}
        {...getReferenceProps()}
      >
        {toggler}
      </span>
      {isOpen && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            className={twMerge(
              ' rounded-lg border border-stone-300 bg-v2-white shadow-3xl z-9999',
              className
            )}
            style={{ ...floatingStyles, position: 'fixed' }}
            {...getFloatingProps()}
            {...computedProps}
          >
            {enableArrow && (
              <FloatingArrow
                className=" fill-v2-blue-100"
                ref={arrowRef}
                context={context}
              />
            )}

            {children}
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

export default FloatingPanel;
