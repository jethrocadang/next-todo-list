"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React, { MouseEvent } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type DonutChartProps = {
  data: { name: string; value: number }[];
  colors: string[];
  title?: string;
  description?: string;
  className?: string;
};

const DonutChart = ({
  data,
  colors,
  title,
  description,
  className,
}: DonutChartProps) => {
  const handleClick = (event: MouseEvent<SVGElement>) => {
    event.preventDefault();
  };

  return (
    <Card className={cn("w-full", className)}>
      {(title || description) && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      )}
      <CardContent className="h-[300px] p-5">
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
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: "10px" }} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DonutChart;
