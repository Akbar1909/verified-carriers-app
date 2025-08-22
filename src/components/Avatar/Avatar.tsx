import React, { ComponentProps, ComponentPropsWithoutRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

type AvatarSizeType = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

type PlaceholderType = 'company' | 'review';

interface AvatarProps extends ComponentPropsWithoutRef<"div"> {
  size?: AvatarSizeType;
  url?: string;
  imageProps?: Partial<ComponentProps<typeof Image>>;
  placeholder?: React.ReactNode;
  placeholderType?: PlaceholderType;
  alt?: string;
}

const Avatar = ({
  className,
  size = 'md',
  url,
  imageProps,
  placeholder,
  placeholderType = 'company',
  alt,
  ...computedProps
}: AvatarProps) => {
  const [imageError, setImageError] = useState(false);

  const sizesStyles: Record<AvatarSizeType, string> = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-14 h-14",
    "2xl": "w-16 h-16",
  };

  const iconSizes: Record<AvatarSizeType, string> = {
    xs: "w-3 h-3",
    sm: "w-4 h-4", 
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-7 h-7",
    "2xl": "w-8 h-8",
  };

  const getDefaultAltText = () => {
    if (alt) return alt;
    return placeholderType === 'company' ? 'Company logo' : 'User avatar';
  };

  const CompanyPlaceholder = () => (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
      <svg
        className={twMerge("text-gray-400", iconSizes[size])}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M8.25 18.75a1.5 1.5 0 01-3 0V5.25a1.5 1.5 0 113 0v13.5zM15.75 18.75a1.5 1.5 0 01-3 0V5.25a1.5 1.5 0 113 0v13.5z"
        />
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M1.5 9.75L12 4.5l10.5 5.25v9a1.5 1.5 0 01-1.5 1.5h-18a1.5 1.5 0 01-1.5-1.5v-9z"
        />
      </svg>
    </div>
  );

  const ReviewPlaceholder = () => (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
      <svg
        className={twMerge("text-gray-400", iconSizes[size])}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );

  const DefaultPlaceholder = () => {
    return placeholderType === 'company' ? <CompanyPlaceholder /> : <ReviewPlaceholder />;
  };

  return (
    <div
      className={twMerge(
        "rounded-full overflow-hidden relative",
        sizesStyles[size],
        className
      )}
      {...computedProps}
    >
      {url && !imageError ? (
        <Image
          className="absolute"
          fill
          style={{ objectFit: "cover" }}
          src={url}
          alt={getDefaultAltText()}
          onError={() => setImageError(true)}
          {...imageProps}
        />
      ) : (
        placeholder || <DefaultPlaceholder />
      )}
    </div>
  );
};

export default Avatar;