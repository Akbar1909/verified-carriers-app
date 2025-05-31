import { ReactNode, CSSProperties } from 'react';

/**
 * Size options for the container's maximum width
 */
export type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | 'custom';

/**
 * Props for the Container component
 * @typedef {Object} ContainerProps
 * @property {ReactNode} children - The content to be rendered inside the container
 * @property {ContainerMaxWidth} [maxWidth='lg'] - Maximum width preset for the container
 * @property {string} [className=''] - Additional CSS classes to apply to the container
 * @property {string} [customWidth] - Custom max-width value (e.g. '1920px', '90%')
 * @property {boolean} [fluid=false] - Whether to add horizontal padding or not
 * @property {React.CSSProperties} [style] - Additional inline styles
 */
interface ContainerProps {
  children: ReactNode;
  maxWidth?: ContainerMaxWidth;
  className?: string;
  customWidth?: string;
  fluid?: boolean;
  style?: CSSProperties;
}

/**
 * A responsive container component that centers content and controls maximum width
 * 
 * @component
 * @example
 * // Basic usage with default width (lg)
 * <Container>
 *   <p>Your content here</p>
 * </Container>
 * 
 * @example
 * // With custom width and additional classes
 * <Container maxWidth="xl" className="bg-gray-100">
 *   <p>Wide container with gray background</p>
 * </Container>
 * 
 * @example
 * // With specific custom width
 * <Container maxWidth="custom" customWidth="1800px">
 *   <p>Container with exactly 1800px max width</p>
 * </Container>
 */
const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = '2xl',
  className = '',
  customWidth,
  fluid = false,
  style = {},
}) => {
  // Define max width values based on standard breakpoints
  const maxWidths: Record<Exclude<ContainerMaxWidth, 'custom'>, string> = {
    sm: 'max-w-screen-sm', // 640px
    md: 'max-w-screen-md', // 768px
    lg: 'max-w-screen-lg', // 1024px
    xl: 'max-w-screen-xl', // 1280px
    '2xl': 'max-w-screen-2xl', // 1536px
    '3xl': 'max-w-[1800px]', // Custom wider size for very large screens
    full: 'max-w-full',
  };

  // Set the max width class based on the maxWidth prop
  const widthClass = maxWidth === 'custom' ? '' : maxWidths[maxWidth];
  
  // Add padding classes if not fluid
  const paddingClasses = fluid ? '' : 'px-4 sm:px-6 md:px-8 lg:px-12';
  
  // Combine the inline styles with customWidth if provided
  const combinedStyles = {
    ...(maxWidth === 'custom' && customWidth ? { maxWidth: customWidth } : {}),
    ...style,
  };

  return (
    <div 
      className={`w-full mx-auto ${paddingClasses} ${widthClass} ${className}`}
      style={combinedStyles}
    >
      {children}
    </div>
  );
};

export default Container;