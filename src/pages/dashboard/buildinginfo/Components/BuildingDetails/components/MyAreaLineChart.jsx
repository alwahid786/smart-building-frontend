import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  ReferenceDot,
} from "recharts";

const MyAreaLineChart = ({ data }) => {
  return (
    <ResponsiveContainer width="98%" height={150}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7B42F6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" />
        <YAxis hide={true} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#7B42F6"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        {data
          .filter((d) => d.max)
          .map((entry, index) => (
            <ReferenceDot
              key={`dot-${index}`}
              r={5}
              fill="#7B42F6"
              stroke="white"
              cx={entry.time}
              cy={entry.value}
            />
          ))}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MyAreaLineChart;
