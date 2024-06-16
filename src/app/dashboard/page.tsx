import DashCards from "@/components/dash-cards";

const HomePage = () => {
  return (
    <div className="container bg-slate-300 h-full">
      <div className="grid  grid-cols-2 lg:grid-cols-4 lg:grid-flow-col ">
        <div className="p-2 ">
          <DashCards />
        </div>
        <div className="p-2">
          <DashCards />
        </div>
        <div className="p-2">
          <DashCards />
        </div>
        <div className="p-2">
          <DashCards />
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default HomePage;
