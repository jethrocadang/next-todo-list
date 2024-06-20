"use client";

import Link from "next/link";
import { RiDashboardFill } from "react-icons/ri";
import { MdTask, MdOutlineLogout } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { Card } from "@/components/ui/card";
import CircularProgressBar from "@/components/circular-progress/circular-progress";

const TaskSider = () => {
  const pathname = usePathname();

  const hiddenNav = ["/"];

  if (hiddenNav.includes(pathname)) {
    return null;
  }

  return (
    <aside className="h-full rounded-md py-2.5">
      <Card className="flex h-full flex-col px-8 pt-16">
        <Card>
          <div className="flex flex-col items-center space-y-5 px-12 py-7">
            <p className="text-lg font-black tracking-wide">Progress</p>
            <CircularProgressBar percentage={10} />
            <div className="flex gap-12 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-sky-500" />
                <div className="leading-tight">
                  <p className="font-bold">10</p>
                  <p className="text-xs tracking-tight">Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-sky-500" />
                <div className="leading-tight">
                  <p className="font-bold">10</p>
                  <p className="w-full text-nowrap text-xs tracking-tight">
                    Total Tasks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Card>
    </aside>
  );
};

export default TaskSider;
