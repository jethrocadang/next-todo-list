import TagsFilter from "../../components/tag-filter";
import TaskList from "./_components/task-list";
import Header from "./_components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import StoreSider from "./_components/sider";

export default function StorePage() {
  return (
    <div className="flex w-full">
      <ScrollArea className="flex w-full rounded-lg p-2.5">
        <div className="w-full space-y-2.5">
          <Header />
          <TagsFilter />
          <TaskList />
        </div>
      </ScrollArea>
      <StoreSider />
    </div>
  );
}
