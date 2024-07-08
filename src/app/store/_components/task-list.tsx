"use client";

import { Card } from "@/components/ui/card";
import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";
import TaskCard from "@/components/task-card";
import { format, isSameDay } from "date-fns";
import { useDateSelector } from "@/hooks/useDateSelector";
import tasks from "./dummy";
import TaskForm from "@/components/task-form";

const TaskList = () => {
  const { selectedDate, nextDay, previousDay } = useDateSelector();

  const filteredTasks = tasks.filter((task) =>
    isSameDay(new Date(task.date), selectedDate),
  );

  const formatDay = format(selectedDate, "EEEE");
  const formatDate = format(selectedDate, "dd MMMM yyyy");

  return (
    <Card className="flex flex-col p-6">
      <div className="flex w-full flex-col items-center justify-between md:flex-row gap-2.5">
        <div className="flex w-full flex-col items-center justify-between md:w-1/5 md:flex-row">
          <div className="flex w-full items-center justify-between">
            <button onClick={previousDay} className="md:hidden">
              <MdOutlineArrowCircleLeft  size={30}/>
            </button>
            <div className="leading-0 flex flex-col justify-center md:space-y-2 md:mr-5">
              <p className="text-lg font-bold">{formatDay}</p>
              <p className="text-xs text-muted-foreground text-nowrap">{formatDate}</p>
            </div>
            <button onClick={nextDay} className="md:hidden">
              <MdOutlineArrowCircleRight size={30} />
            </button>
          </div>
          <div className="hidden pr-7 text-2xl md:flex">
            <button onClick={previousDay}>
              <MdOutlineArrowCircleLeft />
            </button>
            <button onClick={nextDay}>
              <MdOutlineArrowCircleRight />
            </button>
          </div>
        </div>
        {/**Add Task Button */}
        <TaskForm
          className="w-full md:hidden"
          variant={"outline"}
          size={"sm"}
        />
        <TaskForm className="hidden md:inline-flex" />
      </div>
      <div className="space-y-2.5 md:px-5 py-10">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </Card>
  );
};

export default TaskList;
