"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "./ui/badge";
import { RiMore2Fill } from "react-icons/ri";
import { Task } from "@/lib/types";

const TaskCard = ({
  id,
  title,
  description,
  tags = [],
  status,
  priority,
  date,
}: Task) => {
  return (
    <div className="flex items-center gap-3" key={id}>
      <Checkbox />
      <Card className="flex w-full items-center rounded-lg p-5">
        <div className="w-full space-y-3">
          <div className="space-x-2">
            <Badge variant={"outline"}>{priority}</Badge>
            {tags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </div>
          <div>
            <p className="font-bold">{title}</p>
            <p className="font-normal">
              {description}
            </p>
          </div>
        </div>
        <RiMore2Fill />
      </Card>
    </div>
  );
};

export default TaskCard;
