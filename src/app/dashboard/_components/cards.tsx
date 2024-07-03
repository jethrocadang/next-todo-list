"use client";

import { Users } from "lucide-react";
import DataCard from "./data-card";

const Cards = () => {
  return (
    <div className="grid gap-2.5 md:grid-cols-2 lg:grid-cols-4">
      <DataCard title="Members" description="Total" value="05" icon={Users} />
      <DataCard title="Tasks" description="Total" value="05" icon={Users} />
      <DataCard title="Completed" description="Total" value="05" icon={Users} />
      <DataCard title="Blocked" description="Total" value="05" icon={Users} />
    </div>
  );
};

export default Cards;
