import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardHeader } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { MoreHorizontal } from "lucide-react";

const TaskView = () => {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"}>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="justify-center">
            <DialogTrigger asChild>
              <Button variant={"ghost"}>View Task</Button>
            </DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Completed Task</DialogTitle>
        </DialogHeader>
        <Card className="flex w-full items-center rounded-lg p-5">
          <div className="w-full space-y-3">
            <Badge variant={"outline"}>Completed</Badge>
            <div className="space-x-2">
              <Badge variant={"low"}>Priority</Badge>
              <Badge>Tags</Badge>
            </div>
            <div className="space-y-2.5">
              <p className="rounded-md border px-3 py-1 font-bold">
                Task Title
              </p>
              <p className="rounded-md border px-3 py-1 font-normal">
                Task Description
              </p>
              <p className="rounded-md border px-3 py-1">Date</p>
              <p className="rounded-md border px-3 py-1">Owner</p>
            </div>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default TaskView;
