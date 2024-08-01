import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
  Divider,
} from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { SensorsStatusSkeleton } from '../../../../../../components/Skeleton'
import Heating from '../../../../../../asset/svgs/BuildignInfo/Heating'
import Cooling from '../../../../../../asset/svgs/BuildignInfo/Heating'
import PropTypes from 'prop-types'

const data = [
  {
    type: 'Heating',
    installed: 436,
    active: 385,
    offline: 50,
  },
  {
    type: 'Cooling',
    installed: 320,
    active: 290,
    offline: 30,
  },
  // Add more data as needed
]

const icons = {
  Heating: Heating,
  Cooling: Cooling,
  // Add more icons as needed
}

const Sensor = ({ sensors }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [singleSensor, setSingleSensor] = useState(null)
  const [animationClass, setAnimationClass] = useState('')
  console.log('Sensors are', sensors)

  useEffect(() => {
    if (sensors && sensors.length > 0) {
      setSingleSensor(sensors[0]?.sensors[0])
    }
  }, [sensors])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleNext = () => {
    setAnimationClass('slide-in-right')
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
      setAnimationClass('')
    }, 500)
  }

  const handlePrev = () => {
    setAnimationClass('slide-in-left')
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      )
      setAnimationClass('')
    }, 500)
  }

  const CurrentIcon = icons[data[currentIndex].type]

  return (
    <>
      {isLoading ? (
        <SensorsStatusSkeleton />
      ) : (
        <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 12, md: 16 },
                  fontWeight: 600,
                  color: 'rgba(17, 17, 17, 1)',
                  marginBottom: 1,
                }}
              >
                Sensors status
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background:
                    'linear-gradient(95.25deg, #7B42F6 0%, #B01EFF 100%)',
                  textTransform: 'none',
                  borderRadius: '8px',
                  marginBottom: '6px',
                  color: 'white',
                  borderColor: 'transparent',
                  borderStyle: 'solid',
                  borderImageSlice: 1,
                  borderImageSource:
                    'linear-gradient(95.25deg, #7B42F6 0%, #B01EFF 100%)',
                }}
              >
                See full report
              </Button>
            </Box>

            <Divider />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 1,
                marginTop: 4,
              }}
            >
              <ArrowBackIosNewIcon
                sx={{ cursor: 'pointer', mb: '250px' }}
                onClick={handlePrev}
              />
              <Box
                className={animationClass}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <CurrentIcon />
                  <Typography
                    sx={{ fontWeight: 'medium', fontSize: { xs: 12, md: 16 } }}
                  >
                    {singleSensor?.sensorName}
                  </Typography>
                </Box>

                <Stack
                  direction="row"
                  sx={{ marginTop: 2 }}
                  spacing={1}
                  justifyContent="center"
                >
                  <Box
                    sx={{
                      // width: 'calc(40% - 16px)',

                      padding: '0px 20px',
                      height: 64,
                      fontSize: { xs: 9, md: 14 },
                      background: '#F5F7FB',
                      borderRadius: '6px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        fontWeight: '400',
                      }}
                    >
                      Installed
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: '400',
                      }}
                    >
                      {data[currentIndex].installed}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      // width: 'calc(40% - 16px)',
                      padding: '0px 20px',
                      height: 64,
                      fontSize: { xs: 9, md: 14 },
                      background: '#F5F7FB',
                      borderRadius: '6px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        fontWeight: '400',
                      }}
                    >
                      Active
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: '400',
                      }}
                    >
                      {data[currentIndex].active}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      // width: 'calc(40% - 16px)',
                      padding: '0px 20px',
                      height: 64,
                      fontSize: { xs: 9, md: 14 },
                      background: '#F5F7FB',
                      borderRadius: '6px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        fontWeight: '400',
                      }}
                    >
                      Offline
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: '400',
                      }}
                    >
                      {data[currentIndex].offline}
                    </Typography>
                  </Box>
                </Stack>

                <Box
                  sx={{
                    marginY: 7,
                    background: '#FFEAEB',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0px 12px',
                    color: 'black',
                    borderRadius: '6px',
                    borderLeft: '4px solid #FA3D45',
                    lineHeight: '24px',
                  }}
                >
                  <Typography sx={{ fontWeight: '600', fontSize: '13px' }}>
                    1 sensor has problem
                  </Typography>
                  <Box
                    sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}
                  >
                    <Typography sx={{ fontSize: '13px' }}>Error:</Typography>
                    <Typography
                      sx={{
                        fontSize: '13px',
                        background: '#ffffff',
                        padding: '3px 10px',
                      }}
                    >
                      u67fYHJ
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <ArrowForwardIosIcon
                sx={{ cursor: 'pointer', mb: '250px' }}
                onClick={handleNext}
              />
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  )
}

Sensor.propTypes = {
  sensors: PropTypes.arrayOf(
    PropTypes.shape({
      sensorName: PropTypes.string.isRequired,
    })
  ),
}

export default Sensor
