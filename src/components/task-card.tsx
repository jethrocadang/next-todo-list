import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "./ui/badge";

const TaskCard = () => {
  return (
    <div className="flex items-center gap-3">
      <Checkbox />
      <Card className="w-full rounded-lg p-5 space-y-3">
        <Badge variant={"outline"}>High</Badge>
        <div className="">
          <p className="font-bold">This is my Task title.</p>
          <p className="font-normal">
            I have a very short description that has limits...
          </p>
        </div>
        <div className="space-x-2">
          <Badge>Personal</Badge>
          <Badge>Project</Badge>
        </div>
      </Card>
    </div>
  );
};

export default TaskCard;
