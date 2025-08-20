import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, FC } from "react";

type ExternalLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string; // make sure href is string only
  };

const ExternalLink: FC<ExternalLinkProps> = ({ href, children, ...props }) => {
  if (typeof href !== "string") {
    return (
      <Link href={"#"}  {...props}>
        {children}
      </Link>
    );
  }

  const normalizedHref =
    href.startsWith("http://") || href.startsWith("https://")
      ? href
      : `https://${href}`;

  return (
    <Link
      href={normalizedHref}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </Link>
  );
};

export default ExternalLink;
