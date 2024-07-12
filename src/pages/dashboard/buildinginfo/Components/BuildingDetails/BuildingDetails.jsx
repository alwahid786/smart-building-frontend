import { Box, Button, Grid, Paper } from '@mui/material'
import BuildingCard from './components/Card'
import PrimaryEnergy from './components/PrimaryEnergy'
import InspectionHistory from './components/InspectionHistory'
import Suggestions from './components/Suggestions'
import Sensor from './components/Sensor'
import FinancialProjection from './components/FinancialProjection'
import MediaConsumption from './components/MediaConsumption'
import EnergyUtilitiesCard from './components/EnergyUtilitiesCard'
import { Link } from 'react-router-dom'
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt'
const BuildingDetails = () => {
  return (
    <>
      <Link to="/dashboard/updatebuilding">
        <Box sx={{ textAlign: 'end', marginY: '10px' }}>
          <Button
            variant="outlined"
            startIcon={<EditLocationAltIcon />}
            sx={{
              color: '#7E40F6',
              textTransform: 'none',
              fontSize: '14px', // Text size ko chhota karne ke liye
              border: ' 2px solid #7E40F6', // Border color ko red karne ke liye
              '&:hover': {
                border: ' 2px solid #AD20FE',
                color: '#AD20FE',
                // Hover state mein border color ko dark red karne ke liye
              },
            }}
          >
            Update Building
          </Button>
        </Box>
      </Link>
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
