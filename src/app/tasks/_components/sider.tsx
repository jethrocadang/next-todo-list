"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import ProgressCard from "@/components/progress-card";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TaskSider = () => {
  return (
    <aside className="h-full rounded-md py-2.5">
      <Card className="flex h-full flex-col px-8 pt-16">
        <div className="flex flex-col items-center mb-12 gap-3">
          <Avatar>
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <p className="tracking-normal text-sm font-semibold">Jethro Cadang</p>
        </div>
        <ProgressCard />
        <Card className="mt-10">
          <Calendar className="flex justify-center" />
        </Card>
      </Card>
    </aside>
  );
};

export default TaskSider;
