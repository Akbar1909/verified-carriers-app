"use client";
import TextField from "@/components/TextField";
import { CornerUpRightIcon, SearchIcon } from "@/components/SvgIcons";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const { pathname } = useAppNavigation();

  return (
    <header className={twMerge("py-4.5  border border-gray-200", pathname === "/about" && "bg-orange-50")}>
      <Container className="flex items-center gap-10">
        <Logo />
        <TextField
          placeholder="Company name"
          startIcon={<SearchIcon />}
          rootClassName="flex-1 max-w-[492px]"
        />

        <nav className="ml-auto">
          <ul className="flex items-center">
            <li className="px-3 py-2.5">
              {" "}
              <Link
                href="/review/2"
                className="text-md-medium text-gray-500 hover:text-gray-600"
              >
                Write a review
              </Link>
            </li>
            <li className="px-3 py-2.5">
              {" "}
              <Link
                href="#"
                className="text-md-medium text-gray-500 hover:text-gray-600"
              >
                Compare quotes
              </Link>
            </li>
            <li className="px-3 py-2.5">
              {" "}
              <Link
                href="#"
                className="text-md-medium text-gray-500 hover:text-gray-600"
              >
                Blog
              </Link>
            </li>
            <li className="px-3 py-2.5">
              {" "}
              <Link
                href="business"
                className="text-md-medium text-gray-500 hover:text-gray-600"
              >
                For business
              </Link>
            </li>
            <li className="px-3 py-2.5">
              {" "}
              <Link
                href="/auth/login"
                className="text-md-medium text-gray-500 hover:text-gray-600"
              >
                Log in
              </Link>
            </li>
            <li>
              <Link href="#">
                <Button
                  size="lg"
                  startIcon={<CornerUpRightIcon />}
                  color="secondary-gray"
                  className="rounded-[999px]"
                >
                  Sign up
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
