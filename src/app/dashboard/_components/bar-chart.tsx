"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
      <CardHeader>Activity Report</CardHeader>
      <CardContent>
        <ResponsiveContainer width={"100%"} height={500}>
          <BarChart data={activity}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="completed" fill="#82ca9d" name="Completed Tasks" />
            <Bar dataKey="total" fill="#8884d8" name="Total Tasks" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;
