import Cards from "./_components/cards";
import Chart from "./_components/bar-chart";
import TeamPerformance from "./_components/performance-list";

const HomePage = () => {
  return (
    <div className="h-full w-full p-2.5">
      <Cards />
      <div className="flex mt-2.5 gap-2.5"> 
        <Chart />
        <TeamPerformance/>
        
      </div>
    </div>
  );
};

export default HomePage;
