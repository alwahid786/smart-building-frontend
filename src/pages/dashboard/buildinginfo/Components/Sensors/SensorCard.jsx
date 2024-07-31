import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  styled,
} from '@mui/material'
import BulbIcon from '../../../../../asset/svgs/BulbIcon.svg'
import LightSensorONIcon from '../../../../../asset/svgs/LightSensorONIcon'
import LightSensorOffIcon from '../../../../../asset/svgs/LightSensorOffIcon'
import VantilationErrorIcon from '../../../../../asset/svgs/VantilationErrorIcon'
import { SensorCardSkeleton } from '../../../../../components/Skeleton'

const SensorCard = ({ subtitle, title, values, icons }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return isLoading ? (
    <SensorCardSkeleton />
  ) : (
    <CustomCard>
      <CardContent
        sx={{
          display: 'flex',
          gap: { xs: 0.5, md: 2 },
          justifyContent: { xs: 'justify-between', md: 'space-around' },
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box sx={{ flexBasis: '25%' }}>
          <IconButton>
            <StyledBulbIcon src={BulbIcon} alt="Bulb Icon" />
          </IconButton>
        </Box>
        <Box sx={{ flexBasis: '25%' }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'rgba(17, 17, 17, 0.6)',
              fontSize: { xs: 12, md: 14 },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'rgba(17, 17, 17, 0.6)',
              fontSize: { xs: 12, md: 14 },
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        {values?.map((value, index) => (
          <Box
            key={index}
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexBasis: '25%',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <IconButton>{icons[index]}</IconButton>
            <Typography sx={{ fontSize: { xs: 12, md: 14 } }}>
              {value}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </CustomCard>
  )
}

SensorCard.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])])).isRequired,
  icons: PropTypes.arrayOf(PropTypes.element).isRequired,
}

const TestPage = () => {
  const sensorInfo = [
    {
      title: 'Lighting ',
      subtitle: 'Sensor',
      values: [null, 41, 1],
      icons: [
        <Box sx={{ width: '24px', height: '24px' }}></Box>,
        <LightSensorONIcon key="on" />,
        <LightSensorOffIcon key="off" />,
      ],
    },
    {
      title: 'Ventilation ',
      subtitle: 'Sensor',
      values: [null, 22, 5],
      icons: [
        <Box sx={{ width: '24px', height: '24px' }}></Box>,
        <LightSensorONIcon key="on" />,
        <LightSensorOffIcon key="off" />,
      ],
    },
    {
      title: 'Ventilation ',
      subtitle: 'Sensor',
      values: [41, 1, 1],
      icons: [
        <LightSensorONIcon key="on" />,
        <LightSensorOffIcon key="off" />,
        <VantilationErrorIcon key="error" />,
      ],
    },
  ]

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {sensorInfo.map((sensor, index) => (
        <SensorCard key={index} {...sensor} />
      ))}
      <Box
        sx={{
          display: 'flex',
          gap: 6,
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <StyledIcon>
          <LightSensorONIcon />
          Active
        </StyledIcon>
        <StyledIcon>
          <LightSensorOffIcon />
          Off
        </StyledIcon>
        <StyledIcon>
          <VantilationErrorIcon />
          Error
        </StyledIcon>
      </Box>
    </Box>
  )
}

export default TestPage

const StyledIcon = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}))

const CustomCard = styled(Card)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  marginBottom: '10px',
}))

const StyledBulbIcon = styled('img')(({ theme }) => ({
  width: 30,
  height: 30,
  [theme.breakpoints.up('md')]: {
    width: 50,
    height: 50,
  },
}))
