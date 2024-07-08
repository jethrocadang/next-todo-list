"use client";

import React from "react";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import ProgressCard from "@/components/progress-card";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useDateSelector } from "@/hooks/useDateSelector";

import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerFooter,
} from "@/components/ui/drawer";

const AvatarComponent = React.memo(() => (
  <Avatar>
    <AvatarImage src="/avatar.jpg" />
    <AvatarFallback>JC</AvatarFallback>
  </Avatar>
));

AvatarComponent.displayName = "AvatarComponent";

const TaskSider = () => {
  return (
    <aside className="hidden h-full rounded-md py-2.5 lg:block">
      <Card className="flex h-full flex-col pt-16 px-5">
        <div className="mb-12 flex flex-col items-center gap-3">
          <AvatarComponent />
          <p className="text-sm font-semibold tracking-normal">Jethro Cadang</p>
        </div>
        <ProgressCard />
        <Card className="mt-10">
          <Calendar className="flex justify-center" />
        </Card>
      </Card>
    </aside>
  );
};

const TaskSiderSm = () => {
  const [open, setOpen] = React.useState(false);
  const { selectedDate, setSelectedDate } = useDateSelector();

  return (
    <Card className="flex h-full flex-col px-8 pt-0 lg:hidden">
      <ProgressCard />
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "my-2.5 w-full items-center justify-between bg-card text-left font-normal",
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

export { TaskSider, TaskSiderSm };
