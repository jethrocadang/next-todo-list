"use client";

import { Card } from "@/components/ui/card";
import ProgressCard from "@/components/progress-card";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDateSelector } from "@/hooks/useDateSelector";

const StoreSider = () => {
  const {selectedDate, setSelectedDate} = useDateSelector();

  return (
    <aside className="h-full rounded-md py-2.5 hidden">
      <Card className="flex h-full flex-col px-8 pt-16">
        <p className="mx-auto mb-3 tracking-wide font-semibold text-xl">Team</p>
        <div className="space-y-2.5">
          <Card className="flex flex-row items-center gap-3 p-2.5">
            <Avatar className="h-7 w-7">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>JC</AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium tracking-normal">10 Tasks</p>
          </Card>
          <Card className="flex flex-row items-center gap-3 p-2.5">
            <Avatar className="h-7 w-7">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>JC</AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium tracking-normal">10 Tasks</p>
          </Card>
          <Card className="flex flex-row items-center gap-3 p-2.5">
            <Avatar className="h-7 w-7">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>JC</AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium tracking-normal">10 Tasks</p>
          </Card>
          <Card className="flex flex-row items-center gap-3 p-2.5">
            <Avatar className="h-7 w-7">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>JC</AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium tracking-normal">10 Tasks</p>
          </Card>
          <Card className="flex flex-row items-center gap-3 p-2.5">
            <Avatar className="h-7 w-7">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>JC</AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium tracking-normal">10 Tasks</p>
          </Card>
        </div>
        <Card className="mt-10">
          <Calendar className="flex justify-center" selected={selectedDate} mode="single" onSelect={setSelectedDate}/>
        </Card>
      </Card>
    </aside>
  );
};

export default StoreSider;
