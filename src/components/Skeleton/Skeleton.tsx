import { ReactNode } from 'react';
import ReactSkeleton, {
  SkeletonProps as ReactSkeletonProps,
} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

/**
 * Props for the Skeleton component.
 * Extends the original `react-loading-skeleton` props and adds loading control.
 */
interface SkeletonWrapperProps extends ReactSkeletonProps {
  /**
   * If `true`, displays the skeleton loader. If `false`, renders the children content.
   */
  isLoading: boolean;

  /**
   * The actual content to render when not loading.
   */
  children?: ReactNode;
}

/**
 * A wrapper around `react-loading-skeleton` that conditionally renders
 * either a skeleton placeholder or actual children based on the `isLoading` prop.
 *
 * @param {SkeletonWrapperProps} props - The props for the component.
 * @returns {JSX.Element} A skeleton or the provided content.
 *
 * @example
 * ```tsx
 * <Skeleton isLoading={true} height={20} width={200}>
 *   <p>Loaded content</p>
 * </Skeleton>
 * ```
 */
const Skeleton = ({
  isLoading,
  children,
  ...rest
}: SkeletonWrapperProps): JSX.Element => {
  if (isLoading) {
    return <ReactSkeleton {...rest} />;
  }

  return <>{children}</>;
};

export default Skeleton;
