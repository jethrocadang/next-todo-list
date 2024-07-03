"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { MouseEvent } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DonutChart = () => {
  const data = [
    { name: "Completed", value: 4 },
    { name: "In Progress", value: 3 },
    { name: "Done", value: 3 },
    { name: "Blocked", value: 2 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const handleClick = (event: MouseEvent<SVGElement>) => {
    event.preventDefault();
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Task Status</CardTitle>
        <CardDescription>Status Comparison</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              cornerRadius={10}
              style={{ outline: "none" }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: "10px" }} />
            <Legend/>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DonutChart;
