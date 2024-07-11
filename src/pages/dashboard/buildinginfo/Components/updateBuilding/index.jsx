import { Box, Typography } from '@mui/material'
import StepperComponent from './components/UpdateStepper'
// import StepperComponent from './components/StepperComponent'

const UpdateBuilding = () => {
  return (
    <Box
      sx={{
        background: '#FFFFFF',
        borderRadius: '14px',
        minHeight: '100vh',
        p: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
      }}
    >
      <Typography
        sx={{ fontSize: '34px', lineHeight: '51px', fontWeight: '600' }}
      >
        Update Building
      </Typography>
      <Box>
        <StepperComponent />
      </Box>

      {/* <Box>
        <GeneralBuildingInformation />
      </Box> */}
    </Box>
  )
}

export default UpdateBuilding
