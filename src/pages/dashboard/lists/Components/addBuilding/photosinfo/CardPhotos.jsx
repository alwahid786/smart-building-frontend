import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const CardPhotos = ({ image }) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={3} xl={2}>
        <Box
          sx={{
            width: '240px',
            height: '220px',
          }}
        >
          {/* <Box sx={{ position: 'relative' }}> */}

          <img
            src={image}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          ></img>

          {/* </Box> */}
        </Box>
      </Grid>
    </>
  )
}

export default CardPhotos
