import { Delete, Edit } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import EditSensor from './EditSensor'
import { useState } from 'react'

const ViewSensor = () => {
  const [open, setOpen] = useState(false)

  const handleOpenEditComponent = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box
      sx={{
        background: '#FFFFFF',
        borderRadius: '14px',
        p: { lg: 2, xl: 4 },
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'fadeInUp 2s ease forwards',
        '@keyframes fadeInUp': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontSize: '24px', fontWeight: '600' }}>
          Sensor Detail
        </Typography>
        <Box sx={{ display: 'flex', gap: '15px' }}>
          <Box>
            <Edit
              sx={{ color: '#7B42F6', cursor: 'pointer' }}
              onClick={handleOpenEditComponent}
            />
          </Box>
          <Box>
            <Delete sx={{ color: '#7B42F6', cursor: 'pointer' }} />
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              background: '#FFFFFF',
              // background: 'orange',
              p: 2,
              borderRadius: '8px',
              boxShadow: '-1px 2px 5px 3px rgba(0, 0, 0, 0.12)',
            }}
          >
            <Typography sx={{ fontSize: '16px' }}>
              Basic Sensor Information
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                background: '#ECE8FF',
                alignItems: 'center',
                marginTop: '10px',
                borderRadius: '9px',
                padding: '15px',
              }}
            >
              <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                sensorName
              </Typography>
              <Typography
                sx={{ fontSize: '18px', fontWeight: '500', color: '#A449EB' }}
              >
                Temperature
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                background: '#ECE8FF',
                alignItems: 'center',
                marginTop: '10px',
                borderRadius: '9px',
                padding: '15px',
              }}
            >
              <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                Type
              </Typography>
              <Typography
                sx={{ fontSize: '18px', fontWeight: '500', color: '#A449EB' }}
              >
                Temperature
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                background: '#ECE8FF',
                alignItems: 'center',
                marginTop: '10px',
                borderRadius: '9px',
                padding: '15px',
              }}
            >
              <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                Location
              </Typography>
              <Typography
                sx={{ fontSize: '18px', fontWeight: '500', color: '#A449EB' }}
              >
                Floor-2
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                background: '#ECE8FF',
                alignItems: 'center',
                marginTop: '10px',
                borderRadius: '9px',
                padding: '15px',
              }}
            >
              <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                IP.adress
              </Typography>
              <Typography
                sx={{ fontSize: '18px', fontWeight: '500', color: '#A449EB' }}
              >
                02919839801
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#FFFFFF',
              p: 2,
              borderRadius: '8px',
              boxShadow: '-1px 2px 5px 3px rgba(0, 0, 0, 0.12)',
            }}
          >
            <h2>Right</h2>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              background: '#FFFFFF',
              p: 2,
              borderRadius: '8px',
              boxShadow: '-1px 2px 5px 3px rgba(0, 0, 0, 0.12)',
              marginTop: '25px',
            }}
          >
            <Typography sx={{ fontSize: '16px', color: ' #686868' }}>
              Status and Data
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                background: '#ECE8FF',
                alignItems: 'center',
                marginTop: '10px',
                borderRadius: '9px',
                padding: '15px',
              }}
            >
              <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                Status
              </Typography>

              <Button
                text="Active"
                sx={{
                  background: '#52BE8A',
                  color: '#FFFFFF',
                  padding: '6px 15px',
                  borderRadius: '8px',
                }}
              >
                Active
              </Button>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                background: '#ECE8FF',
                alignItems: 'center',
                marginTop: '10px',
                borderRadius: '9px',
                padding: '15px',
              }}
            >
              <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                Location
              </Typography>
              <Typography
                sx={{ fontSize: '18px', fontWeight: '500', color: '#A449EB' }}
              >
                Floor-2
              </Typography>
            </Box>            
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              background: '#FFFFFF',
              p: 2,
              borderRadius: '8px',
              boxShadow: '-1px 2px 5px 3px rgba(0, 0, 0, 0.12)',
              marginTop: '25px',
            }}
          >
            <Typography sx={{ fontSize: '16px', color: ' #686868' }}>
              Sensor-Specific Information
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                background: '#ECE8FF',
                alignItems: 'center',
                marginTop: '10px',
                borderRadius: '9px',
                padding: '15px',
              }}
            >
              <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                Normal Tem-
              </Typography>

              <Typography
                sx={{ fontSize: '18px', fontWeight: '500', color: '#A449EB' }}
              >
                23°C
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                background: '#ECE8FF',
                alignItems: 'center',
                marginTop: '10px',
                borderRadius: '9px',
                padding: '15px',
              }}
            >
              <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                Peak Tem-
              </Typography>
              <Typography
                sx={{ fontSize: '18px', fontWeight: '500', color: '#A449EB' }}
              >
                23°C
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
        <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              background: '#FFFFFF',
              p: 2,
              borderRadius: '8px',
              boxShadow: '-1px 2px 5px 3px rgba(0, 0, 0, 0.12)',
            }}
          >
            <Typography sx={{ fontSize: '16px' }}>
            Alert History
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                background: '#ECE8FF',
                alignItems: 'center',
                marginTop: '10px',
                borderRadius: '9px',
                padding: '15px',
              }}
            >
              <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                sensorName
              </Typography>
              <Typography
                sx={{ fontSize: '18px', fontWeight: '500', color: '#A449EB' }}
              >
                Temperature
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                background: '#ECE8FF',
                alignItems: 'center',
                marginTop: '10px',
                borderRadius: '9px',
                padding: '15px',
              }}
            >
              <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                Type
              </Typography>
              <Typography
                sx={{ fontSize: '18px', fontWeight: '500', color: '#A449EB' }}
              >
                Temperature
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                background: '#ECE8FF',
                alignItems: 'center',
                marginTop: '10px',
                borderRadius: '9px',
                padding: '15px',
              }}
            >
              <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                Location
              </Typography>
              <Typography
                sx={{ fontSize: '18px', fontWeight: '500', color: '#A449EB' }}
              >
                Floor-2
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                background: '#ECE8FF',
                alignItems: 'center',
                marginTop: '10px',
                borderRadius: '9px',
                padding: '15px',
              }}
            >
              <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                IP.adress
              </Typography>
              <Typography
                sx={{ fontSize: '18px', fontWeight: '500', color: '#A449EB' }}
              >
                02919839801
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
         
        </Grid>
      </Grid>

      <EditSensor open={open} handleClose={handleClose} />
    </Box>

    
  
  )
}

export default ViewSensor
