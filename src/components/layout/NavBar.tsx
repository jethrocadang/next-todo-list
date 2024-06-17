"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const hiddenNav = ["/login", "/register"];

  if (hiddenNav.includes(pathname)) {
    return null;
  }

  return (
    <nav className="container mt-2 flex w-full items-center justify-between bg-green-200 px-5 py-2">
      <div>
        <Link href={"/"}>TODO-TEAMS</Link>
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
      </div>
    </nav>
  );
};

export default NavBar;
