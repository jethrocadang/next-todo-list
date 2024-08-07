import Cards from "./_components/cards";
import Chart from "./_components/bar-chart";
import TeamPerformance from "./_components/performance-list";
import TagList from "./_components/tag-list";
import RecentTasks from "./_components/recent-tasks";
import { ScrollArea } from "@/components/ui/scroll-area";
import DonutChart from "./_components/donut-chart";
import { TaskTable } from "./_components/task-table";
import { columns } from "./_components/columns";
import tasks from "../store/_components/dummy";

const data = [
  { name: "Completed", value: 4 },
  { name: "In Progress", value: 3 },
  { name: "Done", value: 3 },
  { name: "Blocked", value: 2 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const HomePage = () => {
  return (
    <div className="flex w-full p-2.5">
      <ScrollArea className="w-full rounded-lg">
        <div className="w-full space-y-2.5">
          <Cards />
          <div className="flex flex-col gap-2.5 lg:flex-row">
            <Chart />
            <div className="grid grow gap-2.5">
              <TeamPerformance />
              <TagList />
            </div>
          </div>
          <div className="flex flex-col gap-2.5 lg:flex-row">
            <DonutChart data={data} colors={COLORS} title="Task Status" description="Current status oa all Tasks"/>
            <TaskTable columns={columns} data={tasks} />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default HomePage;
 