"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ChartProps {
  incomeChartData: { year: string; total: number }[];
  xKey: string;
  lineKey: string;
  description: string;
}

const Chart = ({ incomeChartData, xKey, lineKey, description }: ChartProps) => {
  return (
    <div>
      <ResponsiveContainer minWidth={50} minHeight={300}>
        <LineChart data={incomeChartData}>
          <CartesianGrid />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Line dataKey={lineKey} type="monotone" name={description} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
