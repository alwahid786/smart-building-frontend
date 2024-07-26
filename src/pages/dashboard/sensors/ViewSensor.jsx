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
      <Box
        sx={{
          padding: '15px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'end' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
            Sensor Name:
          </Typography>
          <Typography sx={{ fontSize: '16px' }}>Fetch Sensor name</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'end' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
            IP:
          </Typography>
          <Typography sx={{ fontSize: '16px' }}>Fetch IP</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'end' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
            Unique ID:
          </Typography>
          <Typography sx={{ fontSize: '16px' }}>Fetch UID</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'end' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
            Port:
          </Typography>
          <Typography sx={{ fontSize: '16px' }}>Fetch port</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'end' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
            Type:
          </Typography>
          <Typography sx={{ fontSize: '16px' }}>Fetch Type</Typography>
        </Box>
      </Box>

      <EditSensor open={open} handleClose={handleClose} />
    </Box>
  )
}

export default ViewSensor
