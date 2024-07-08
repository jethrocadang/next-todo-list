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
      <div className="hidden md:block">
        <Checkbox />
      </div>
      <Card className="flex w-full flex-col items-center rounded-lg p-2.5 md:p-5 md:flex-row">
        <div className="w-full space-y-3">
          <div className="space-x-2">
            <Badge variant={"outline"} className="text-xs">{priority}</Badge>
            {tags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </div>
          <div>
            <p className="font-bold text-sm md:text-md">{title}</p>
            <p className="font-normal text-muted-foreground text-xs md:text-sm">{description}</p>
          </div>
        </div>
        <div className="hidden md:block"> 
          <RiMore2Fill />
        </div>
      </Card>
    </div>
  );
};

export default TaskCard;
