import Cards from "./_components/cards";
import Chart from "./_components/bar-chart";

const HomePage = () => {
  return (
    <div className="h-full w-full p-2.5">
      <Cards />
      <div>
        <Chart />
      </div>
    </div>
  );
};

export default HomePage;
