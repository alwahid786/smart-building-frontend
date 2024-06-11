import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import BuildingCard from "./components/Card";
import PrimaryEnergy from "./components/PrimaryEnergy";
import InspectionHistory from "./components/InspectionHistory";
import Suggestions from "./components/Suggestions";
import Sensor from "./components/Sensor";
import FinancialProjection from "./components/FinancialProjection";
import MediaConsumption from "./components/MediaConsumption";
import EnergyUtilitiesCard from "./components/EnergyUtilitiesCard";
const BuildingDetails = () => {
  return (
    <>
      <Grid container spacing={1}>
        {/* Left Column */}
        <Grid item xs={12} md={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                // sx={{ width: { sm: "fit-content", lg: 286 } }}
                elevation={2}
              >
                <BuildingCard />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                //  sx={{ width: { sm: "fit-content", lg: 286 } }}
                elevation={2}
              >
                <PrimaryEnergy />
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Paper style={{}} elevation={2}>
                <Suggestions />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper style={{}} elevation={2}>
                <Sensor />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={2}>
                <FinancialProjection />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={2}>
                <MediaConsumption />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={2}>
                <EnergyUtilitiesCard />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{}} elevation={2}>
                <InspectionHistory />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BuildingDetails;
