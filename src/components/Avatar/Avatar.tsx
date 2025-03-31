import React, { ComponentProps, ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

type AvatarSizeType = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface AvatarProps extends ComponentPropsWithoutRef<"div"> {
  size?: AvatarSizeType;
  url?: string;
  imageProps?: Partial<ComponentProps<typeof Image>>;
}

const Avatar = ({
  className,
  size,
  url,
  imageProps,
  ...computedProps
}: AvatarProps) => {
  const sizesStyles: Record<AvatarSizeType, string> = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-14 h-14",
    "2xl": "w-16 h-16",
  };

  return (
    <div
      className={twMerge("rounded-full overflow-hidden relative", sizesStyles[size], className)}
      {...computedProps}
    >
      {url && <Image className='absolute' fill objectFit='cover' src={url} alt="" {...imageProps} />}
    </div>
  );
};

export default Avatar;
