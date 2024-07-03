"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Task } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import TaskView from "@/components/task-view";


export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "title",
    header: "",
  },
  {
    accessorKey: "tag",
    header: "",
    cell: ({ row }) => (
      <div className="hidden">
        {row.original.tags.map((tag: string, index: number) => (
          <Badge key={index} variant={"outline"} className="mr-1">
            {tag}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const task = row.original;

      return (
        <TaskView/>
      );
    },
  },
];
