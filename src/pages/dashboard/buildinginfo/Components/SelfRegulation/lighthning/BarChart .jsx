import { Card } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const MyBarChart = ({ data }) => {
  // const showSecondBar = useSelector((state) => state.chart.showSecondBar);
  // const chartType = useSelector((state) => state.chart.chartType);

  // const Chart = chartType === "bar" ? BarChart : LineChart;
  // const ChartElement = chartType === "bar" ? Bar : Line;

  return (
    // width="80%" height={300}
    <ResponsiveContainer>
      {/* <Chart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ChartElement
          dataKey="mwh"
          fill="#808080"
          stroke="#808080"
          barSize={20}
        />
        {showSecondBar && (
          <ChartElement
            dataKey="mwh2"
            fill="rgba(123, 66, 246, 1)"
            stroke="rgba(123, 66, 246, 1)"
            barSize={20}
          />
        )}
      </Chart> */}

      <Card>
        <h1>Hello</h1>
      </Card>
    </ResponsiveContainer>
  )
}

export default MyBarChart
