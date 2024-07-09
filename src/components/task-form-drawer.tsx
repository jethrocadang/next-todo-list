"use client";

import React, { useState } from "react";
//UI
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MultipleSelector, { Option } from "./ui/multi-selector";
import { Badge } from "./ui/badge";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popoverDialog";
//Calendar
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
//Hooks & Utils
import { cn } from "@/lib/utils";
import { useDateSelector } from "@/hooks/useDateSelector";
import { useMediaQuery } from "react-responsive";
//Icons
import { CalendarIcon } from "lucide-react";
//Data
import tags from "@/app/store/_components/tags-dummy";

//UI for sm devices
const TaskFormDrawer = () => {
  const { selectedDate, setSelectedDate } = useDateSelector();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const OPTIONS: Option[] = tags.map((tag) => ({
    value: tag.title,
    label: tag.title,
  }));

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {isMobile ? (
          <Button className={"w-full"} variant={"outline"} size={"sm"}>
            <span className="text-xl">+ &nbsp;</span> Add Task
          </Button>
        ) : (
          <Button>
            <span className="text-xl">+ &nbsp;</span> Add Task
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent className="px-7 pb-3">
        <DrawerHeader className="select-none">
          <DrawerTitle>Create New Task</DrawerTitle>
          <DrawerDescription>Add a new task for your Team.</DrawerDescription>
        </DrawerHeader>
        <div className="space-y-2.5">
          <div>
            <Label>Title</Label>
            <Input />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea />
          </div>
          <div>
            <Label>Tag</Label>
            <MultipleSelector options={OPTIONS} />
          </div>
          <div>
            <Label>Priority</Label>
            <div className="space-x-2.5">
              <Badge variant={"critical"} className="rounded-sm px-2.5 py-1.5">
                Critical
              </Badge>
              <Badge variant={"high"} className="rounded-sm px-2.5 py-1.5">
                High
              </Badge>
              <Badge variant={"medium"} className="rounded-sm px-2.5 py-1.5">
                Medium
              </Badge>
              <Badge variant={"low"} className="rounded-sm px-2.5 py-1.5">
                Low
              </Badge>
            </div>
          </div>
          <div>
            <Label>Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start bg-card text-left font-normal",
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
              </PopoverTrigger>
              <PopoverContent className="w-fit" align="start">
                <Calendar
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  mode="single"
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label>Owner</Label>
            <Input />
          </div>
          <Button className="w-full">Create Task</Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default TaskFormDrawer;
