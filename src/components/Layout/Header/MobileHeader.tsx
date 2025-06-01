"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import Logo from "@/components/Logo";
import {
  BurgerIcon,
  CloseIcon,
  CornerUpRightIcon,
} from "@/components/SvgIcons";
import Link from "next/link";
import { useSession } from "next-auth/react";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import Button from "@/components/Button";
import Show from "@/components/Show";


const MobileHeader = () => {
  const { pathname } = useAppNavigation();
  const { status } = useSession();
  const [open, setOpen] = useState(false);


  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Your original header style */}
      <header className="flex items-center justify-between w-full">
        <Logo />

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open mobile menu"
        >
          <BurgerIcon />
        </button>
      </header>

      {/* Mobile sidebar and backdrop */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-99"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-64 bg-white z-999 p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold text-gray-800">
                  Menu
                </span>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <CloseIcon className="w-6 h-6 text-gray-800" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 text-gray-700 font-medium">
                <Link href={"/review/1"} onClick={() => setOpen(false)}>
                  Write a review
                </Link>
                <Link href={""} onClick={() => setOpen(false)}>
                  Compare quotes
                </Link>
                <Link href={"#"} onClick={() => setOpen(false)}>
                  Blog
                </Link>

                <Link href={"/business"} onClick={() => setOpen(false)}>
                  For business
                </Link>

                <Show when={status === "unauthenticated"}>
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
                </Show>
                <Show when={status === "unauthenticated"}>
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
                </Show>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;
