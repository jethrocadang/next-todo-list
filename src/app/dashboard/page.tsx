
import DataCard from "./_components/data-card";

const HomePage = () => {
  return (
    <div className=" h-full w-full p-2.5">
        <div className="flex w-full bg-green-200">
          <DataCard/>
          <DataCard/>
          <DataCard/>
          <DataCard/>
        </div>
    </div>
  );
};

export default HomePage;
