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
    <nav className="bg-green-300 w-full container flex">
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      <div className="flex"> 
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
      </div>
    </nav>
  );
};

export default NavBar;
