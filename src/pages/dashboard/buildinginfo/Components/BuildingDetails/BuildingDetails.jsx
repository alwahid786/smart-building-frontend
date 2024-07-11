import { Box, Button, Grid, Paper } from '@mui/material'
import BuildingCard from './components/Card'
import PrimaryEnergy from './components/PrimaryEnergy'
import InspectionHistory from './components/InspectionHistory'
import Suggestions from './components/Suggestions'
import Sensor from './components/Sensor'
import FinancialProjection from './components/FinancialProjection'
import MediaConsumption from './components/MediaConsumption'
import EnergyUtilitiesCard from './components/EnergyUtilitiesCard'
const BuildingDetails = () => {
  return (
    <>
      <Box sx={{ textAlign: 'end', marginY: '10px' }}>
        <Button variant="contained">Update Building</Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <BuildingCard />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Suggestions />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Sensor />
        </Grid>
        <Grid item xs={12} lg={12}>
          <FinancialProjection />
        </Grid>
        <Grid item xs={12} lg={4}>
          <PrimaryEnergy />
        </Grid>

        <Grid item xs={12} lg={4}>
          <MediaConsumption />
        </Grid>
        <Grid item xs={12} lg={4}>
          <EnergyUtilitiesCard />
        </Grid>
        <Grid item xs={12} lg={12}>
          <Paper style={{}} elevation={2}>
            <InspectionHistory />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default BuildingDetails
