import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";
import TaskCard from "../../../components/task-card";
import TaskForm from "@/components/task-form";

const TaskList = () => {
  return (
    <>
      <Card className="flex flex-col p-6">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-1/5 items-center justify-between">
            <div className="space-y-2">
              <p className="text-lg font-bold">Monday</p>
              <p className="text-sm">19 June 2024</p>
            </div>
            <div className="flex pr-7 text-2xl">
              <MdOutlineArrowCircleLeft />
              <MdOutlineArrowCircleRight />
            </div>
          </div>
          <TaskForm/>
        </div>
        <div className="px-5 py-10 space-y-2.5">
        
        </div>
      </Card>
      <Card className="p-6">
        <div className="text-lg font-bold tracking-tighter">
          Completed Tasks
        </div>
        <div className="px-5 py-10 space-y-2.5">
        </div>
      </Card>
    </>
  );
};

export default TaskList;
