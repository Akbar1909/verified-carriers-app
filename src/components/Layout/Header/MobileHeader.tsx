"use client";

import Logo from "@/components/Logo";
import { BurgerIcon } from "@/components/SvgIcons";

const MobileHeader = () => {
  return (
    <header className="flex items-center justify-between w-full">
      <Logo />

      <button type="button">
        <BurgerIcon />
      </button>
    </header>
  );
};

export default MobileHeader;
