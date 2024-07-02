import Cards from "./_components/cards";
import Chart from "./_components/bar-chart";
import TeamPerformance from "./_components/performance-list";
import TagList from "./_components/tag-list";

const HomePage = () => {
  return (
    <div className="h-full w-full p-2.5">
      <Cards />
      <div className="mt-2.5 flex gap-2.5">
        <Chart />
        <div className="grow grid gap-2.5">
          <TeamPerformance />
          <TagList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
