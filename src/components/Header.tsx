import { LucideKanban } from "lucide-react";
import Link from "next/link";
import React from "react";
import ThemeSwitcher from "@/app/theme/theme-switcher";
import { buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-0 bg-background/95 backdrop-blur w-full flex justify-between py-2.5 px-5 border-b">
      <div className="flex items-center gap-x-2">
        <Link href="/" className={buttonVariants({ variant: "ghost" })}>
          <LucideKanban />
          <h1 className="ml-2text-lg font-semibold ">TicketBounty</h1>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <Link
          href="/tickets"
          className={buttonVariants({ variant: "outline" })}
        >
          Tickets
        </Link>
      </div>
    </nav>
  );
};

export default Header;
