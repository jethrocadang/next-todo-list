import { Task } from "@/lib/types";

export const tasks: Task[] = [
  {
    id: "1",
    title: "Setup project repository",
    description: "Initialize the project repository with initial configurations.",
    tags: ["Infrastructure", "Setup"],
    status: "Completed",
    priority: "high",
    date: "2024-01-10"
  },
  {
    id: "2",
    title: "Design database schema",
    description: "Create and design the database schema for the application.",
    tags: ["Backend", "Database"],
    status: "In Progress",
    priority: "medium",
    date: "2024-01-15"
  },
  {
    id: "3",
    title: "Develop authentication module",
    description: "Implement authentication and authorization mechanisms.",
    tags: ["Backend", "Security"],
    status: "Pending",
    priority: "critical",
    date: "2024-01-20"
  },
  {
    id: "4",
    title: "Implement user interface",
    description: "Develop the user interface for the main application.",
    tags: ["Frontend", "UI"],
    status: "In Progress",
    priority: "high",
    date: "2024-01-25"
  },
  {
    id: "5",
    title: "Setup CI/CD pipeline",
    description: "Configure the continuous integration and delivery pipeline.",
    tags: ["DevOps", "Automation"],
    status: "Completed",
    priority: "medium",
    date: "2024-02-01"
  }
];

  