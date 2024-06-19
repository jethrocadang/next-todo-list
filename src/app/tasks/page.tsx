import SideBar from "@/components/layout/SideBar";
import Header from "./_components/header";
import TagsFilter from "./_components/tags-filter";
import TaskList from "./_components/task-list-nav";

export default function TaskPage() {
  return (
    <div className="flex w-full p-2.5" >
      <div className="w-full space-y-2.5">
        <Header />
        <TagsFilter/>
        <TaskList/>
      </div>
    </div>
  );
}
