"use client";

import Link from "next/link";
import { RiDashboardFill } from "react-icons/ri";
import { MdTask, MdOutlineLogout } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { Card } from "../ui/card";

const SideBar = () => {
  const pathname = usePathname();

  const hiddenNav = ["/"];

  if (hiddenNav.includes(pathname)) {
    return null;
  }

  return (
    <aside className="h-full rounded-md py-2.5">
        <Card className="flex h-full flex-col pt-16 shadow-none">
          <div className="w-full px-10 text-2xl font-semibold">
            <span className="rounded-md bg-sky-500 px-3 font-black text-white">
              Todo
            </span>
            Teams
          </div>
          <div className="flex h-full flex-col justify-around px-16 pl-12">
            <div className="flex w-full flex-col space-y-2 self-center">
              <Link
                href={"/dashboard"}
                className={`flex items-center gap-2 rounded-lg p-2 font-medium ${pathname === "/dashboard" ? "bg-sky-500 text-white" : "hover:text-sky-500"}`}
              >
                <RiDashboardFill size={20} />
                Dashboard
              </Link>
              <Link
                href={"/tasks"}
                className={`flex items-center gap-2 rounded-lg p-2 font-medium ${pathname === "/tasks" ? "bg-sky-500 text-white" : "hover:text-sky-500"}`}
              >
                <MdTask size={20} />
                Task
              </Link>
              <Link
                href={"/team"}
                className={`flex items-center gap-2 rounded-lg p-2 font-medium ${pathname === "/team" ? "bg-sky-500 text-white" : "hover:text-sky-500"}`}
              >
                <FaUsers size={20} />
                Team
              </Link>
            </div>
            <div>
              <Link
                href={"#"}
                className="flex items-center gap-2 p-2 font-medium"
              >
                <MdOutlineLogout size={20} className="" /> Sign Out
              </Link>
            </div>
          </div>
        </Card>
    </aside>
  );
};

export default SideBar;
