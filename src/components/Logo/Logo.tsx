import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

interface LogoProps extends Partial<ComponentProps<typeof Link>> {
  imageProps?: ComponentProps<typeof Image>;
}

const Logo = ({ imageProps, ...computedProps }: LogoProps) => {
  return (
    <Link href="/" {...computedProps}>
      <Image
        alt="Verified carriers logo"
        width={116}
        height={32}
        src="/images/main-logo.png"
      />
    </Link>
  );
};

export default Logo;
