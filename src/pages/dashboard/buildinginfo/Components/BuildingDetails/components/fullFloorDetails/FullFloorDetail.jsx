import { Box, Grid, Paper, Typography } from '@mui/material'
import BuildingCard from '../Card'
import Suggestions from '../Suggestions'
import Sensor from '../Sensor'
import PrimaryEnergy from '../PrimaryEnergy'
import MediaConsumption from '../MediaConsumption'
import EnergyUtilitiesCard from '../EnergyUtilitiesCard'
import InspectionHistory from '../InspectionHistory'
import ImageWithSensors from './ImageWithSensors'
import Analytics from './Analytics'
import FloorMediaConsumption from './FloorMediaConsumption'
import FloorEnergyDetails from './FloorEnergyDetails'
import FloorPrimaryEnergy from './FloorPrimaryEnergy'
import FloorInspectionHistory from './FloorInspectionHistory'
import FloorBrief from './FloorBrief'

const FullFloorDetail = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <ImageWithSensors />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Analytics />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FloorBrief />
        </Grid>
        {/* <Grid item xs={12} lg={12}>
          <FinancialProjection />
        </Grid> */}

        <Grid item xs={12} lg={4}>
          <FloorMediaConsumption />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FloorEnergyDetails />
        </Grid>

        <Grid item xs={12} lg={4}>
          <FloorPrimaryEnergy />
        </Grid>

        <Grid item xs={12} lg={8}>
          <Paper style={{}} elevation={2}>
            <FloorInspectionHistory />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FullFloorDetail
