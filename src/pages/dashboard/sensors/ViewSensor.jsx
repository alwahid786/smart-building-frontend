/* eslint-disable no-unused-vars */
import { Delete, Edit } from '@mui/icons-material'
import { Alert, Box, Button, Grid, Switch, Typography } from '@mui/material'
import EditSensor from './EditSensor'
import { useState } from 'react'
import { axisClasses } from '@mui/x-charts/ChartsAxis'
import { BarChart } from '@mui/x-charts/BarChart'
import { useNavigate, useParams } from 'react-router-dom'
import { useDeleteSensorMutation, useGetSingleBuildingSensorQuery } from '../../../redux/api/sensorApi'
import { useDispatch, useSelector } from 'react-redux'
import Stack from '@mui/material/Stack'
import { dataset } from '../../../../chartjsdata'
import { setSensorStatus } from '../../../redux/reducers/sensorStatus'

const ViewSensor = () => {
  const [open, setOpen] = useState(false)
  const { sensorStatus } = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate= useNavigate()

  const [deleteSensor] = useDeleteSensorMutation()

  // get id
  const { id } = useParams()
  const { data, error } = useGetSingleBuildingSensorQuery(id)
  
  const handleOpenEditComponent = () => {
    setOpen(true)
  }

  const handleChange = (event) => {
    const { name, checked } = event.target;
    dispatch(setSensorStatus({ uniqueId: name, status: checked }));
  };

  // delete sensor
  const handleDeleteSensor = async () => {
    try {

      await deleteSensor(id).unwrap();
    
      // window.location.reload();
      return navigate('/dashboard/sensors')

    } catch (err) {
      console.error('Failed to delete sensor:', err);
    }
  };


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

  const loop = [1]

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
            <Delete sx={{ color: '#7B42F6', cursor: 'pointer' }} onClick={handleDeleteSensor} />
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
                {data?.sensorId?.location}
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

              <Switch
                checked={sensorStatus[data?.uniqueId]}
                onChange={handleChange}
                name={data?.uniqueId}
                inputProps={{ 'aria-label': 'controlled' }}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#4caf50',
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#4caf50',
                  },
                }}
              />
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
                {data?.sensorId?.location}
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

            {error ? (
              loop?.map((item, index) => {
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
              })
            ) : (
              <Stack sx={{ width: '100%', marginTop: '20px' }} spacing={2}>
                <Alert
                  severity="info"
                  sx={{
                    fontSize: '16px',
                    color: '#686868',
                    textAlign: 'center',
                  }}
                >
                  No alerts found
                </Alert>
              </Stack>
            )}
          </Box>
        </Grid>
      </Grid>

      <EditSensor open={open} handleClose={handleClose} />
    </Box>
  )
}

export default ViewSensor
