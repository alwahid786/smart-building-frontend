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

const Sensor = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])
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
                  // borderWidth: 2,
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
              <ArrowBackIosNewIcon sx={{ cursor: 'pointer' }} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Heating />
                <Typography
                  sx={{ fontWeight: 'medium', fontSize: { xs: 12, md: 16 } }}
                >
                  Heating
                </Typography>
              </Box>
              <ArrowForwardIosIcon sx={{ cursor: 'pointer' }} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 1,
                marginTop: 4,
              }}
            >
              <ArrowBackIosNewIcon sx={{ cursor: 'pointer' }} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Heating />
                <Typography
                  sx={{ fontWeight: 'medium', fontSize: { xs: 12, md: 16 } }}
                >
                  Heating
                </Typography>
              </Box>
              <ArrowForwardIosIcon sx={{ cursor: 'pointer' }} />
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
                  436
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
                  385
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
                  50
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
              <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
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
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default Sensor
