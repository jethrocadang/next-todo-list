"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "./ui/badge";
import { RiMore2Fill } from "react-icons/ri";

const TaskCard = () => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox />
      <Card className="flex w-full items-center rounded-lg p-5">
        <div className="w-full space-y-3">
          <div className="space-x-2">
            <Badge variant={"outline"}>High</Badge>
            <Badge>Personal</Badge>
            <Badge>Project</Badge>
          </div>
          <div className="">
            <p className="font-bold">This is my Task title.</p>
            <p className="font-normal">
              I have a very short description that has limits...
            </p>
          </div>
        </div>
        <RiMore2Fill />
      </Card>
    </div>
  );
};

export default TaskCard;
