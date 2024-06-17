"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../theme-toggle";

const NavBar = () => {
  const pathname = usePathname();

  const isAuthenticated = true;

  const hiddenNav = ["/login", "/register"];

  if (hiddenNav.includes(pathname)) {
    return null;
  }

  return (
    <nav className="container mt-2 flex w-full items-center justify-between bg-green-200 px-5 py-2">
      <div>
        <Link href={"/"} className="font-black text-2xl">
          <span className="text-blue-500">Task</span> Teams
        </Link>
      </div>
      <div className="flex gap-5">

        <Link
          href={"/login"}
          className="rounded-md border border-green-500 bg-green-300 px-5 py-2"
        >
          Sign In
        </Link>
        <Link
          href={"/register"}
          className="rounded-md border border-green-500 bg-green-300 px-5 py-2"
        >
          Sign Up
        </Link>
        {/* <Link href={"/dashboard"}>Dashboard</Link> */}
        <ThemeToggle/>
      </div>
    </nav>
  );
};

export default NavBar;
