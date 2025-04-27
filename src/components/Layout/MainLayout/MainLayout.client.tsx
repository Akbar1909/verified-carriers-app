"use client";

import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface MainLayoutClientProps {
  children: ReactNode;
}

const MainLayoutClient = ({ children }: MainLayoutClientProps) => {
  const { pathname } = useAppNavigation();

  const isFullScreen = pathname.startsWith("/get-quote");

  return (
    <main
      id="main-layout"
      className={twMerge(
        "w-full",
        isFullScreen &&
          "w-screen h-screen flex flex-col [&_#children-container]:flex-1"
      )}
    >
      {children}
    </main>
  );
};

export default MainLayoutClient;
