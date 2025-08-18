"use client";
import TextField from "@/components/TextField";
import {
  CornerUpRightIcon,
  LogoutIcon,
  SearchIcon,
} from "@/components/SvgIcons";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { twMerge } from "tailwind-merge";
import { useSession } from "next-auth/react";
import Show from "@/components/Show";
import useTabletOrMobile from "@/hooks/helpers/useTabletOrMobile";
import MobileHeader from "./MobileHeader";
import useGetMe from "@/hooks/endpoints/users/useGetMe";
import useGetCurrentCompany from "@/hooks/endpoints/companies/useGetCurrentCompany";
import Avatar from "@/components/Avatar";
import { joinStrings } from "@/utils/common";
import dynamic from "next/dynamic";
import useAppToggle from "@/hooks/helpers/useAppToggle";

const LogoutModal=dynamic(()=>import('./LogoutModal'),{ssr:false})

const Header = () => {
  const { status, data } = useSession();
  const { pathname } = useAppNavigation();
  const { isTabletOrMobile } = useTabletOrMobile();

  const {open,close,modal} = useAppToggle<'logout-modal'>()

  const companyAuthenticated =
    data?.role === "company" && status === "authenticated";

  const userAuthenticated = data?.role === "user" && status === "authenticated";

  const { company } = useGetCurrentCompany({
    enabled: companyAuthenticated,
  });

  

  const { data: user } = useGetMe({ enabled: userAuthenticated });

  console.log(company);

  return (
    <header
      className={twMerge(
        "py-4.5  border border-gray-200",
        (pathname === "/about" || pathname === "/get-quote") &&
          "lg:bg-orange-50"
      )}
    >
      <Container className="flex items-center gap-10">
        <Show when={isTabletOrMobile}>
          <MobileHeader />
        </Show>
        <Show when={!isTabletOrMobile}>
          <>
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
                  <Link
                    href="#"
                    className="text-md-medium text-gray-500 hover:text-gray-600"
                  >
                    Blog
                  </Link>
                </li>
                <li className="px-3 py-2.5">
                  <Link
                    href="business"
                    className="text-md-medium text-gray-500 hover:text-gray-600"
                  >
                    For business
                  </Link>
                </li>
                <Show when={status === "unauthenticated"}>
                  <li className="px-3 py-2.5">
                    <Link
                      href={
                        pathname === "/business"
                          ? "/auth/login?mode=company"
                          : "/auth/login?mode=user"
                      }
                      className="text-md-medium text-gray-500 hover:text-gray-600"
                    >
                      Log in
                    </Link>
                  </li>
                </Show>
                <Show when={status === "unauthenticated"}>
                  <li>
                    <Link
                      href={
                        pathname === "/business"
                          ? "/auth/sign-up?mode=company"
                          : "/auth/sign-up?mode=user"
                      }
                    >
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
                </Show>

                <Show when={status === "authenticated" && data?.role === 'user'}>
                  <div className="flex items-center gap-3">
                    <Avatar
                      url={`${process.env.NEXT_PUBLIC_API_URL}/files/download/${user?.image?.id}`}
                      size="lg"
                    />

                    <div className="flex flex-col">
                      <span className="text-md-medium text-gray-900">
                        {joinStrings([user?.firstName, user?.lastName])}
                      </span>
                      <span className="text-md text-gray-500">
                        {user?.email}
                      </span>
                    </div>

                    <button onClick={()=>open('logout-modal')} type="button">
                      <LogoutIcon />
                    </button>
                  </div>
                </Show>
                <Show when={status === "authenticated" && data?.role === 'company'}>
                  <div className="flex items-center gap-3">
                    <Avatar
                      url={`${process.env.NEXT_PUBLIC_API_URL}/files/download/${company?.companyLogos?.[0]?.file?.id}`}
                      size="lg"
                    />

                    <div className="flex flex-col">
                      <span className="text-md-medium text-gray-900">
                        {company.name}
                      </span>
                      <span className="text-md text-gray-500">
                        {company?.workEmail}
                      </span>
                    </div>

                    <button onClick={()=>open('logout-modal')} type="button">
                      <LogoutIcon />
                    </button>
                  </div>
                </Show>
              </ul>
            </nav>
          </>
        </Show>
      </Container>

      <LogoutModal isOpen={modal==='logout-modal'} onClose={close} handleSuccess={()=>{}} />
    </header>
  );
};

export default Header;
