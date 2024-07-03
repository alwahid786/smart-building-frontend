/* eslint-disable react/prop-types */
import { Box, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

const TextInput = ({ basic, valAndHandler, formik, md }) => {
  const { label, type, name } = basic
  // const { value, handleBlur, handleChange } = valAndHandler
  // const { touched, errors } = formik
  return (
    <Grid item md={md} sm={6} xs={12}>
      <Box>
        <TextField
          // id="outlined-basic"
          label={label}
          name={name}
          // value={value}
          // onChange={handleChange}
          // onBlur={handleBlur}
          variant="outlined"
          size="small"
          type={type}
          fullWidth
          // error={touched && Boolean(errors)}
          // helperText={touched && errors}
        />
      </Box>
    </Grid>
  )
}

const TextDescription = ({ basic, valAndHandler, formik }) => {
  const { label, type, name } = basic
  const { value, handleBlur, handleChange } = valAndHandler
  const { touched, errors } = formik
  return (
    <Grid item md={12} sm={12} xs={12}>
      <Box>
        <TextField
          type={type}
          label={label}
          multiline
          name={name}
          rows={4}
          fullWidth
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched && Boolean(errors)}
          helperText={touched && errors}
        />
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
