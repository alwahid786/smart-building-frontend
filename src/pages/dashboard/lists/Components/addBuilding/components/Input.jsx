import { Box, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

const TextInput = ({ label, type }) => {
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Box>
        <TextField
          // id="outlined-basic"
          label={label}
          variant="outlined"
          size="small"
          type={type}
          fullWidth
        />
      </Box>
    </Grid>
  )
}

const TextDescription = ({ label, type }) => {
  return (
    <Grid item md={12} sm={12} xs={12}>
      <Box>
        <TextField type={type} label={label} multiline rows={4} fullWidth />
      </Box>
    </Grid>
  )
}

const TextConstruction = ({ type, label }) => {
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Box>
        <TextField type={type} label={label} multiline rows={4} fullWidth />
      </Box>
    </Grid>
  )
}

export { TextInput, TextDescription, TextConstruction }
