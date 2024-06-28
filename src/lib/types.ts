export type Task = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    status: string;
    priority: "critical" | "high" | "medium" | "low";
    date: string;
  };