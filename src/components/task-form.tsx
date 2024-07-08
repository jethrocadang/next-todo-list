"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button, ButtonProps } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import tags from "@/app/store/_components/tags-dummy";
import MultipleSelector, { Option } from "./ui/multi-selector";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useDateSelector } from "@/hooks/useDateSelector";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface TaskFormProps
  extends Pick<ButtonProps, "variant" | "size" | "asChild"> {
  className?: string;
}

const TaskForm = ({ className, variant, size, asChild }: TaskFormProps) => {
  const { selectedDate, setSelectedDate } = useDateSelector();
  const [calendarOpen, setCalendarOpen] = useState(false);

  const OPTIONS: Option[] = tags.map((tag) => ({
    value: tag.title,
    label: tag.title,
  }));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("", className)} variant={variant} size={size}>
          <span className="text-xl">+ &nbsp;</span> Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[1000px] p-10">
        <DialogHeader className="select-none">
          <DialogTitle>Create New Task</DialogTitle>
          <DialogDescription>Add a new task for your Team.</DialogDescription>
        </DialogHeader>
        <div className="space-y-5">
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
            <Button
              onClick={(e) => {
                setCalendarOpen(true);
              }}
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
            {calendarOpen && (
              <Card className="z-50 w-fit">
                <Calendar
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  mode="single"
                />
                <Button
                  onClick={(e) => {
                    setCalendarOpen(false);
                  }}
                >
                  Select
                </Button>
              </Card>
            )}
          </div>
          <div>
            <Label>Owner</Label>
            <Input />
          </div>
          <Button className="w-full">Create Task</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskForm;
