import { useState } from 'react';
import { motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';
import { ArrowDownIcon } from '../SvgIcons';


interface CollapseProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  headerClassName?: string;
}

/**
 * A collapsible component with animated expand/collapse functionality.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} [props.header] - The header content displayed at the top of the collapse. Clickable to toggle the collapse.
 * @param {React.ReactNode} props.children - The content to be displayed inside the collapsible body.
 * @param {string} [props.className] - Additional classes for the outer container of the collapse.
 * @param {string} [props.bodyClassName] - Additional classes for the body content of the collapse.
 * @param {string} [props.headerClassName] - Additional classes for the header section of the collapse.
 *
 * @returns {JSX.Element} The rendered collapsible component.
 */

const Collapse: React.FC<CollapseProps> = ({
  bodyClassName,
  header,
  children,
  className,
  headerClassName,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapse = () => setIsOpen((prev) => !prev);

  return (
    <div className={twMerge('', className)}>
      <div
        onClick={toggleCollapse}
        className={twMerge(
          'cursor-pointer  flex justify-between items-center',
          headerClassName
        )}
      >
        <div className='text-lg-semibold text-gray-900 pt-4 pl-4 pb-2'>{header}</div>
        <span>{isOpen ? <ArrowDownIcon /> : <ArrowDownIcon className='rotate-180' />}</span>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        exit={{ height: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
        className='pl-4 border-b border-gray-300'
      >
        <div className={twMerge(bodyClassName)}>{children}</div>
      </motion.div>
    </div>
  );
};

export default Collapse;
