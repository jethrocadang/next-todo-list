"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const Chart = () => {
  const activity = [
    { name: "Day 1", completed: 5, total: 8 },
    { name: "Day 2", completed: 3, total: 6 },
    { name: "Day 3", completed: 7, total: 10 },
    { name: "Day 4", completed: 4, total: 7 },
    { name: "Day 5", completed: 6, total: 9 },
    { name: "Day 6", completed: 2, total: 5 },
    { name: "Day 7", completed: 8, total: 12 },
  ];

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Activity Report</CardTitle>
        <CardDescription>Weekly Report for Completed Tasks</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px] md:h-[500px] w-full lg:min-w-[500px]">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart
            data={activity}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis width={25} />
            <Tooltip contentStyle={{borderRadius: '10px'}}/>
            <Legend />
            <Bar
              dataKey="completed"
              fill="#82ca9d"
              name="Completed Tasks"
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="total"
              fill="#8884d8"
              name="Total Tasks"
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;
