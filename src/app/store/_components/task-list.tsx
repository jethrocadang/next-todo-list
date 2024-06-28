"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";
import TaskCard from "@/components/task-card";
import { tasks } from "./dummy";
import { format } from "date-fns";
import { useDateSelector } from "@/hooks/useDateSelector";

const TaskList = () => {
  const {selectedDate, setSelectedDate, nextDay, previousDay} = useDateSelector();
  const formatDay = format(selectedDate, "EEEE");
  const formatDate = format(selectedDate, "dd MMMM yyyy");


  return (
      <Card className="flex flex-col p-6">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-1/5 items-center justify-between">
            <div className="space-y-2">
              <p className="text-lg font-bold">{formatDay}</p>
              <p className="text-sm">{formatDate}</p>
            </div>
            <div className="flex pr-7 text-2xl">
              <button onClick={previousDay}>
                <MdOutlineArrowCircleLeft />
              </button>
              <button onClick={nextDay}>
                <MdOutlineArrowCircleRight />
              </button>
            </div>
          </div>
          <Button>
            <span className="text-xl">+ &nbsp;</span> Add Task
          </Button>
        </div>
        <div className="space-y-2.5 px-5 py-10">
          {tasks.map((task) => (
            <TaskCard key={task.id} {...task} />
          ))}
        </div>
      </Card>
  );
};

export default TaskList;
