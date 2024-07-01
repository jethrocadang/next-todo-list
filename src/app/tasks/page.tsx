import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "./_components/header";
import TagsFilter from "../../components/tag-filter";
import TaskList from "./_components/task-list";
import TaskSider from "./_components/sider";

export default function TaskPage() {
  return (
    <div className="flex w-full">
      <ScrollArea className="flex w-full rounded-lg p-2.5">
        <div className="w-full space-y-2.5">
          <Header />
          <TagsFilter />
          <TaskList />
        </div>
      </ScrollArea>
      <TaskSider />
    </div>
  );
}
