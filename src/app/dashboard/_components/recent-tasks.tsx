import TaskCard from "@/components/task-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import tasks from "@/app/store/_components/dummy";

const RecentTasks = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Tasks</CardTitle>
        <CardDescription> Most Recent Completed Tasks.</CardDescription>
      </CardHeader>
      <CardContent>
        {tasks.slice(0,5).map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentTasks;
