import { JSX } from 'react';
import { twMerge } from 'tailwind-merge';

interface SpinnerProps {
  className?: string;
}

/**
 * RSpinner - A loading spinner component.
 *
 * This component renders a spinning loader icon, using Tailwind CSS and optional custom class names.
 * The spinner has an accessible label for screen readers.
 *
 * @param {SpinnerProps} props - The props for the component.
 * @param {string} [props.className=""] - Additional class names for styling the spinner.
 * @returns {JSX.Element} The rendered spinner component.
 */
const Spinner = ({ className = '' }: SpinnerProps): JSX.Element => {
  return (
    <div
      className={twMerge(
        'animate-spin inline-block size-12 border border-current border-t-transparent bg-transparent rounded-full ',
        className
      )}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
