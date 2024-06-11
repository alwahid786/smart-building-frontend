import React from "react";
import BuildingStatus from "./Components/BuildingStatus";
import { Grid, Box } from "@mui/material";
import MediaUse from "./Components/MediaUse";
import MatirealUse from "./Components/MatirealUse";
import HeatingUse from "./Components/HeatingUse";
import InspectionBuilding from "./Components/InspectionBuilding";
import EnergyUse from "./Components/EnergyUse";
const index = () => {
  return (
    <>
      <Box
        sx={{
          opacity: 0,
          transform: "translateY(20px)",
          animation: "fadeInUp 2s ease forwards",
          "@keyframes fadeInUp": {
            "0%": {
              opacity: 0,
              transform: "translateY(20px)",
            },
            "100%": {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
      >
        <BuildingStatus />
        <Grid container spacing={1} sx={{ flexGrow: 1, display: "flex" }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={7.5}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Grid
              container
              spacing={1}
              sx={{ display: "flex", flexWrap: "wrap" }}
            >
              <Grid item xs={12} sm={6} md={6}>
                <MediaUse />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <MatirealUse />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <HeatingUse />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <EnergyUse />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4.5}>
            <InspectionBuilding />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default index;
