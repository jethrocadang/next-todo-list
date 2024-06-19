import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";

const TaskListNav = () => {
  return (
    <Card className="flex items-center justify-between p-6">
      <div className="items-center w-1/5 flex justify-between">
        <div className="space-y-2">
          <p className="text-lg font-bold">Monday</p>
          <p className="text-sm">19 June 2024</p>
        </div>
        <div className="flex text-2xl pr-7">
          <MdOutlineArrowCircleLeft />
          <MdOutlineArrowCircleRight />
        </div>
      </div>
      <Button>
        <span className="text-xl">+</span> Add Task
      </Button>
    </Card>
  );
};

export default TaskListNav;
