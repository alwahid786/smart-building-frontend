import { Box, Typography } from '@mui/material'
import React from 'react'
import GeneralBuildingInformation from './GeneralBuildingInformation'

const AddBuilding = () => {
  return (
    <Box
      sx={{
        background: '#FFFFFF',
        borderRadius: '14px',
        p: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
      }}
    >
      <Typography
        sx={{ fontSize: '34px', lineHeight: '51px', fontWeight: '600' }}
      >
        Add Building
      </Typography>
      <Box>
        <GeneralBuildingInformation />
      </Box>
    </Box>
  )
}

export default AddBuilding
