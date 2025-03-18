import React from "react";
import Image from "next/image";
import TextField from "@/components/TextField";
import { CornerUpRightIcon, SearchIcon } from "@/components/SvgIcons";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";

const Header = () => {
  return (
    <header className="py-4.5  border border-gray-200">
      <Container className="flex items-center gap-10">
      <Image
        alt="Verified carriers logo"
        width={116}
        height={32}
        src="/images/main-logo.png"
      />
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
              href="#"
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
              href="#"
              className="text-md-medium text-gray-500 hover:text-gray-600"
            >
              For business
            </Link>
          </li>
          <li className="px-3 py-2.5">
            {" "}
            <Link
              href="#"
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
