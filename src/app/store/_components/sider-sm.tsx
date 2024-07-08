"use client";

import { Card } from "@/components/ui/card";
import ProgressCard from "@/components/progress-card";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDateSelector } from "@/hooks/useDateSelector";
import DonutChart from "@/app/dashboard/_components/donut-chart";
import clsx from "clsx";

import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerHeader,
  DrawerDescription,
  DrawerTitle,
  DrawerFooter,
} from "@/components/ui/drawer";
import React from "react";

const StoreSiderSm = () => {
  const [open, setOpen] = React.useState(false);
  const { selectedDate, setSelectedDate } = useDateSelector();

  const dummyData = [
    { id: 1, tasks: 10, avatar: "/avatar.jpg", initials: "JC" },
    { id: 2, tasks: 10, avatar: "/avatar.jpg", initials: "JC" },
    { id: 3, tasks: 10, avatar: "/avatar.jpg", initials: "JC" },
    { id: 4, tasks: 10, avatar: "/avatar.jpg", initials: "JC" },
    { id: 5, tasks: 10, avatar: "/avatar.jpg", initials: "JC" },
  ];

  const data = [
    { name: "Member 01", value: 4 },
    { name: "Member 02", value: 3 },
    { name: "Member 03", value: 3 },
    { name: "Member 04", value: 2 },
    { name: "Member 05", value: 2 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF8042"];

  return (
    <Card className="flex h-full flex-col px-10 pb-5 pt-16 lg:hidden">
      <div className="flex w-full flex-col mb-2.5">
        <p className="mx-auto mb-3 text-xl font-semibold tracking-wide">
          Task Distribution
        </p>
        <DonutChart data={data} colors={COLORS} />
        <div className="mt-5 flex justify-center -space-x-2">
          {dummyData.map((item, index) => (
            <Avatar
              key={item.id}
              className={clsx("h-7 w-7 ring-2", {
                "ring-[#0088FE]": index % COLORS.length === 0,
                "ring-[#00C49F]": index % COLORS.length === 1,
                "ring-[#FFBB28]": index % COLORS.length === 2,
                "ring-[#FF8042]": index % COLORS.length === 3,
              })}
            >
              <AvatarImage src={item.avatar} />
              <AvatarFallback>{item.initials}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full items-center justify-between bg-card text-left font-normal",
              !selectedDate && "text-muted-foreground",
            )}
          >
            {selectedDate ? (
              format(selectedDate, "PPP")
            ) : (
              <span>Pick a date</span>
            )}
            <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <Calendar
            className="flex justify-center"
            selected={selectedDate}
            mode="single"
            onSelect={setSelectedDate}
          />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Okay</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Card>
  );
};

export default StoreSiderSm;
