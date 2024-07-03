"use client";

import Link from "next/link";

import { RiDashboardFill } from "react-icons/ri";
import { MdTask, MdOutlineLogout } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

import { usePathname } from "next/navigation";
import { Card } from "../ui/card";

const SideBar = () => {
  const pathname = usePathname();

  const hiddenNav = ["/"];

  if (hiddenNav.includes(pathname)) {
    return null;
  }

  return (
    <aside className="h-full rounded-md py-2.5 hidden md:block">
      <Card className="flex h-full flex-col pt-10">
        <div className="hidden w-full text-2xl font-semibold lg:inline-block lg:px-10">
          <span className="rounded-md bg-sky-500 px-3 font-black text-white">
            Todo
          </span>
          Teams
        </div>
        <div className="flex h-full flex-col justify-around lg:px-16 lg:pl-12 px-5">
          <div className="flex w-full flex-col space-y-2 self-center">
            <Link
              href={"/dashboard"}
              className={`flex items-center gap-2 rounded-lg p-2 font-medium ${pathname === "/dashboard" ? "bg-sky-500 text-white" : "hover:text-sky-500"}`}
            >
              <RiDashboardFill size={20} />
              <span className="hidden lg:inline-block">Dashboard</span>
            </Link>
            <Link
              href={"/tasks"}
              className={`flex items-center gap-2 rounded-lg p-2 font-medium ${pathname === "/tasks" ? "bg-sky-500 text-white" : "hover:text-sky-500"}`}
            >
              <MdTask size={20} />
              <span className="hidden lg:inline-block">Task</span>
            </Link>
            <Link
              href={"/store"}
              className={`flex items-center gap-2 rounded-lg p-2 font-medium ${pathname === "/store" ? "bg-sky-500 text-white" : "hover:text-sky-500"}`}
            >
              <FaCartShopping size={20} />
              <span className="hidden lg:inline-block">Store</span>
            </Link>
          </div>
          <div>
            <Link
              href={"#"}
              className="flex items-center gap-2 p-2 font-medium hover:text-sky-500"
            >
              <MdOutlineLogout size={20} className="" />
              <span className="hidden lg:inline-block">Sign Out</span>
            </Link>
          </div>
        </div>
      </Card>
    </aside>
  );
};

export default SideBar;
