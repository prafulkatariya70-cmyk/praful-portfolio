"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", projects: 1 },
  { month: "Feb", projects: 2 },
  { month: "Mar", projects: 2 },
  { month: "Apr", projects: 3 },
  { month: "May", projects: 4 },
  { month: "Jun", projects: 5 },
  { month: "Jul", projects: 7 },
];

export default function PortfolioChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: -20,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="projects" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3BFF8A" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#3BFF8A" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid
          stroke="#253047"
          strokeDasharray="3 3"
          vertical={false}
        />

        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#94A3B8", fontSize: 12 }}
        />

        <YAxis
          hide
          domain={[0, 8]}
        />

        <Tooltip
          cursor={{
            stroke: "#3BFF8A",
            strokeOpacity: 0.3,
          }}
          contentStyle={{
            background: "#111827",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: "12px",
            color: "#fff",
          }}
        />

        <Area
          type="monotone"
          dataKey="projects"
          stroke="#3BFF8A"
          strokeWidth={3}
          fill="url(#projects)"
          animationDuration={1800}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}