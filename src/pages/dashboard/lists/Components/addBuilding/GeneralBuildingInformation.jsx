import { Box, Button, Grid } from '@mui/material'
import {
  TextInput,
  TextDescription,
  TextConstruction,
} from './components/Input'

const GeneralBuildingInformation = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <TextInput label="Building Name" type="text" />
        <TextInput label="Owner Name" type="text" />
        <TextInput label="Phone" type="text" />
        <TextInput label="Email" type="text" />
        <TextInput label="Total area (sq ft/m)" type="number" />
        <TextInput label="No. of floors" type="number" />

        <TextDescription label="Description" type="text" />

        <TextInput type="date" placeholder="" />
        <TextInput label="Written Address" type="text" />
      </Grid>

      <Box
        sx={{
          marginTop: '20px',
          display: 'flex',
          gap: '10px',
          justifyContent: 'end',
        }}
      >
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">Submit</Button>
      </Box>
    </Box>
  )
}

export default GeneralBuildingInformation
