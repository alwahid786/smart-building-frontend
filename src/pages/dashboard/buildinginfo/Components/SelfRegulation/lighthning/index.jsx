import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import EnergyConsumption from "./EnergyConsumption";
import BarChart from "./BarChart ";
import StandardControl from "./StandardControl";

const index = () => {
  const data = [
    { date: "1 June, 2020", mwh: 240 },
    { date: "2 June, 2020", mwh: 333 },
    { date: "3 June, 2020", mwh: 353 },
    { date: "4 June, 2020", mwh: 258 },
    { date: "5 June, 2020", mwh: 285 },
    { date: "6 June, 2020", mwh: 285 },
    { date: "7 June, 2020", mwh: 159 },
  ];
  return (
    <>
      <EnergyConsumption />
      <BarChart data={data} />
      <Box
        sx={{
          width: { xs: "100%", md: "75%" },
          background: "white",
          p: { xs: 1, md: 2 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 12, md: 16 },
            fontWeight: 600,
            fontFamily: "Poppins",
            color: "rgba(17, 17, 17, 1)",
          }}
        >
          Standard control
        </Typography>
        <Divider />
        <StandardControl />
      </Box>
    </>
  );
};

export default index;
