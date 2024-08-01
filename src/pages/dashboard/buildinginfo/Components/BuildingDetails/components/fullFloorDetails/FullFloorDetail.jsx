import { Box, Grid, Paper } from '@mui/material'
import ImageWithSensors from './ImageWithSensors'
import Analytics from './Analytics'
import FloorMediaConsumption from './FloorMediaConsumption'
import FloorEnergyDetails from './FloorEnergyDetails'
import FloorPrimaryEnergy from './FloorPrimaryEnergy'
import FloorInspectionHistory from './FloorInspectionHistory'
import FloorBrief from './FloorBrief'
import { useGetBuldingFloorsQuery } from '../../../../../../../redux/api/sensorApi'
import { useParams } from 'react-router-dom'

const FullFloorDetail = () => {

  const { id } = useParams();
  const { data } = useGetBuldingFloorsQuery(id);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <ImageWithSensors data={data} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Analytics />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FloorBrief data={data} />
        </Grid>

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
