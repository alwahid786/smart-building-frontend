import React, { useEffect, useState, useRef } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
  Divider,
} from '@mui/material'
import Slider from 'react-slick'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { SensorsStatusSkeleton } from '../../../../../../components/Skeleton'
import Heating from '../../../../../../asset/svgs/BuildignInfo/Heating'
import Cooling from '../../../../../../asset/svgs/BuildignInfo/Heating' // Example of another icon

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

const CustomArrow = ({ direction, onClick }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      [direction === 'prev' ? 'left' : 'right']: '10px',
      zIndex: 1,
    }}
    onClick={onClick}
  >
    {direction === 'prev' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
  </div>
)

const Sensor = () => {
  const [isLoading, setIsLoading] = useState(true)
  const sliderRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      {isLoading ? (
        <SensorsStatusSkeleton />
      ) : (
        <Card
          sx={{
            height: '100%',
            borderRadius: 2,
            boxShadow: 3,
            position: 'relative',
          }}
        >
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

            <Slider {...settings} ref={sliderRef}>
              {data.map((item, index) => {
                const CurrentIcon = icons[item.type]
                return (
                  <Box key={index}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 1,
                        marginTop: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                      >
                        <CurrentIcon />
                        <Typography
                          sx={{
                            fontWeight: 'medium',
                            fontSize: { xs: 12, md: 16 },
                          }}
                        >
                          {item.type}
                        </Typography>
                      </Box>
                    </Box>

                    <Stack
                      direction="row"
                      sx={{ marginTop: 2 }}
                      spacing={1}
                      justifyContent="center"
                    >
                      <Box
                        sx={{
                          width: 'calc(40% - 16px)',
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
                          {item.installed}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: 'calc(40% - 16px)',
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
                          {item.active}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: 'calc(40% - 16px)',
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
                          {item.offline}
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
                        sx={{
                          display: 'flex',
                          gap: '5px',
                          alignItems: 'center',
                        }}
                      >
                        <Typography sx={{ fontSize: '13px' }}>
                          Error:
                        </Typography>
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
                )
              })}
            </Slider>
            {/* <Box sx={{ border: '2px solid red' }}> */}
            <CustomArrow
              direction="prev"
              onClick={() => sliderRef.current.slickPrev()}
            />
            <CustomArrow
              direction="next"
              onClick={() => sliderRef.current.slickNext()}
            />
            {/* </Box> */}
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default Sensor
