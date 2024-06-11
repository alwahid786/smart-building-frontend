/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Tabs from "./Tabs";
import CardsRow from "./CardsRow";
import EnergyConsumption from "./EnergyConsumption";
import BarChart from "./BarChart ";

const index = () => {
  const [showSecondBar, setShowSecondBar] = useState(false);
  const data = [
    { date: "1 June, 2020", mwh: 240, mwh2: 180 },
    { date: "2 June, 2020", mwh: 333, mwh2: 170 },
    { date: "3 June, 2020", mwh: 353, mwh2: 140 },
    { date: "4 June, 2020", mwh: 258, mwh2: 120 },
    { date: "5 June, 2020", mwh: 285, mwh2: 190 },
    { date: "6 June, 2020", mwh: 285, mwh2: 110 },
    { date: "7 June, 2020", mwh: 159, mwh2: 130 },
  ];
  return (
    <>
      <EnergyConsumption
        ShowSecondBar={setShowSecondBar}
        showSecondBar={showSecondBar}
      />
      <BarChart data={data} showSecondBar={showSecondBar} />
      <Box sx={{ width: "100%", background: "white" }}>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 600,
            p: 2,
            fontFamily: "Poppins",
            color: "rgba(17, 17, 17, 1)",
          }}
        >
          ML suggestion
        </Typography>
        <Box sx={{ background: "white" }}>
          <Tabs />
        </Box>
        <Divider />
        <CardsRow />
      </Box>
    </>
  );
};

export default index;
