"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Task = {
  id: string;
  title: string;
  tag: string;
  status: string;
  priority: string;
  date: string;
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "tag",
    header: "Tag",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];
