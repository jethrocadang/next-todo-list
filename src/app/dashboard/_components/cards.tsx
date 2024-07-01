"use client";

import { Users } from "lucide-react";
import DataCard from "./data-card";

const Cards = () => {
  return (
    <div className="flex w-full gap-3">
      <DataCard title="Members" description="Total" value="05" icon={Users} />
      <DataCard title="Tasks" description="Total" value="05" icon={Users} />
      <DataCard title="Completed" description="Total" value="05" icon={Users} />
      <DataCard title="Blocked" description="Total" value="05" icon={Users} />
    </div>
  );
};

export default Cards;
