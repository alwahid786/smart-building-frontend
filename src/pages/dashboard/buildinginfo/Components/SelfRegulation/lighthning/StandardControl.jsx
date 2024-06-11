import React, { useState } from "react";
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StandardControl = () => {
  const [selectedPlace, setSelectedPlace] = useState("");

  const data = [
    {
      place: "Place A",
      schedule: [
        {
          day: "Mon",
          tasks: [{ name: "Auto", start: 5, duration: 1.2, end: 6.2 }],
        },
      ],
    },
    {
      place: "Place B",
      schedule: [
        {
          day: "Tue",
          tasks: [{ name: "Workout", start: 5, duration: 1.5, end: 6.5 }],
        },
      ],
    },
    { place: "Place C", schedule: [] },
  ];

  const handleChange = (event) => {
    setSelectedPlace(event.target.value);
  };

  const selectedData =
    data.find((place) => place.place === selectedPlace)?.schedule || [];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const task = payload[0].payload.tasks[0];
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccccc",
          }}
        >
          <p className="label">{`${task.name} from ${task.start} to ${task.end}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Container sx={{ p: { xs: 0 } }}>
      <Typography
        sx={{ fontSize: { xs: 12, md: 16 }, color: "rgba(17, 17, 17, 0.6)" }}
      >
        First you need to choose a place
      </Typography>
      <FormControl sx={{ width: { xs: "100%", md: "20%" } }}>
        <InputLabel id="place-select-label">Choose place</InputLabel>
        <Select
          labelId="place-select-label"
          id="place-select"
          value={selectedPlace}
          onChange={handleChange}
        >
          <MenuItem value="Place A">Place A</MenuItem>
          <MenuItem value="Place B">Place B</MenuItem>
          <MenuItem value="Place C">Place C</MenuItem>
        </Select>
      </FormControl>
      {selectedData.length > 0 && (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            layout="vertical"
            data={selectedData}
            margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 24]} />
            <YAxis dataKey="day" type="category" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            {selectedData.map((entry, index) => (
              <Bar key={index} dataKey="tasks[0].duration" fill="#8884d8" />
            ))}
          </BarChart>
        </ResponsiveContainer>
      )}
    </Container>
  );
};

export default StandardControl;
