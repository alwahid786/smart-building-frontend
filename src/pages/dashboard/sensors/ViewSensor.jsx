/* eslint-disable no-unused-vars */
import { Delete, Edit } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'
import EditSensor from './EditSensor'
import { useState } from 'react'
import { axisClasses } from '@mui/x-charts/ChartsAxis'
import { BarChart } from '@mui/x-charts/BarChart'
import { useParams } from 'react-router-dom'
import { useGetSingleBuildingSensorQuery } from '../../../redux/api/sensorApi'
import { useSelector } from 'react-redux'

const ViewSensor = () => {
  const [open, setOpen] = useState(false)
  const { sensorStatus } = useSelector((state) => state)

  // get id
  const { id } = useParams()

  const { data } = useGetSingleBuildingSensorQuery(id)

  const handleOpenEditComponent = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const otherSetting = {
    height: 300,
    yAxis: [{ label: 'rainfall (mm)' }],
    grid: { horizontal: true },
    sx: {
      [`& .${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translateX(-10px)',
      },
    },
  }

  const dataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: 'January',
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: 'February',
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: 'March',
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: 'April',
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
      month: 'May',
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      month: 'June',
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
      month: 'July',
    },
    {
      london: 65,
      paris: 60,
      newYork: 106,
      seoul: 249,
      month: 'August',
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: 'September',
    },
    {
      london: 60,
      paris: 65,
      newYork: 97,
      seoul: 55,
      month: 'October',
    },
    {
      london: 67,
      paris: 64,
      newYork: 76,
      seoul: 48,
      month: 'November',
    },
    {
      london: 61,
      paris: 70,
      newYork: 103,
      seoul: 25,
      month: 'December',
    },
  ]

  const loop = [1, 2, 3, 4]

  const valueFormatter = (value) => `${value}mm`

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
              flexDirection: 'column',
              background: '#FFFFFF',
              p: 2,
              borderRadius: '8px',
              boxShadow: '-1px 2px 5px 3px rgba(0, 0, 0, 0.12)',
              height: '100%',
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
                {data?.sensorName}
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
                {data?.sensorType}
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
                IP.address
              </Typography>
              <Typography
                sx={{ fontSize: '18px', fontWeight: '500', color: '#A449EB' }}
              >
                {data?.ip}
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
            <BarChart
              colors={['#7B42F6']}
              dataset={dataset}
              xAxis={[
                {
                  scaleType: 'band',
                  dataKey: 'month',
                  valueFormatter: (month, context) =>
                    context.location === 'tick'
                      ? `${month.slice(0, 3)} \n2023`
                      : `${month} 2023`,
                },
              ]}
              series={[
                { dataKey: 'seoul', label: data?.sensorName, valueFormatter },
              ]}
              {...otherSetting}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 1 }}>
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
                text={
                  sensorStatus?.byqaE
                    ? 'Active'
                    : sensorStatus?.FEmVa
                    ? 'Active'
                    : sensorStatus?.Mh1ZO
                    ? 'Active'
                    : sensorStatus?.kbvaM
                    ? 'Active'
                    : 'Inactive'
                }
                sx={{
                  background: sensorStatus?.byqaE
                    ? '#52BE8A'
                    : sensorStatus?.FEmVa
                    ? '#52BE8A'
                    : sensorStatus?.Mh1ZO
                    ? '#52BE8A'
                    : sensorStatus?.kbvaM
                    ? '#52BE8A'
                    : '#E74C3C',
                  color: '#FFFFFF',
                  padding: '6px 15px',
                  borderRadius: '8px',
                }}
              >
                {sensorStatus?.byqaE
                  ? 'Active'
                  : sensorStatus?.FEmVa
                  ? 'Active'
                  : sensorStatus?.Mh1ZO
                  ? 'Active'
                  : sensorStatus?.kbvaM
                  ? 'Active'
                  : 'Inactive'}
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
              marginTop: 2,
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
            <Typography sx={{ fontSize: '16px' }}>Alert History</Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                alignItems: 'center',
                marginTop: '10px',
                borderRadius: '9px',
                padding: '15px',
              }}
            >
              <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                Date
              </Typography>
              <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                Alert Name
              </Typography>
              <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                Alert Name
              </Typography>
            </Box>

            {loop?.map((item, index) => {
              return (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '10px',
                      background: '#ECE8FF',
                      alignItems: 'center',
                      borderRadius: '9px',
                      padding: '22px',
                      marginBottom: '10px',
                    }}
                  >
                    <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                      22 May 2024
                    </Typography>
                    <Typography sx={{ fontSize: '16px', color: '#000000' }}>
                      Water Usage
                    </Typography>
                    <Typography sx={{ fontSize: '16px', color: '#686868' }}>
                      Floor-2 loundry Area
                    </Typography>
                  </Box>
                </>
              )
            })}
          </Box>
        </Grid>
      </Grid>

      <EditSensor open={open} handleClose={handleClose} />
    </Box>
  )
}

export default ViewSensor
