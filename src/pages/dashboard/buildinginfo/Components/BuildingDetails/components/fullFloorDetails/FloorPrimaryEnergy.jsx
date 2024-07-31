import React, { useState, useCallback, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import Box from '@mui/material/Box'
import { Divider } from '@mui/material'
import Slider from '@mui/material/Slider'
import { PrimaryEnergySkeleton } from '../../../../../../../components/Skeleton'
import { useDispatch, useSelector } from 'react-redux'

const degreesToRadians = (degrees) => degrees * (Math.PI / 180)
const FloorPrimaryEnergy = () => {
  const dispatch = useDispatch()
  const [progress, setProgress] = useState(100)
  const handleChange = (event, newValue) => {
    setProgress(newValue)
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {isLoading ? (
        <PrimaryEnergySkeleton />
      ) : (
        <Card sx={{ height: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
            }}
          >
            <Typography sx={{ fontSize: 16, fontWeight: 600 }} gutterBottom>
              Primary Energy
            </Typography>
          </Box>
          <Divider />
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: 'rgba(0, 0, 0, 1)',
                }}
              >
                123.3 kWh
              </Typography>
              <InfoOutlinedIcon
                sx={{ marginLeft: 1, color: 'rgba(123, 66, 246, 1)' }}
              />
            </Box>
            <Typography
              sx={{
                mb: 1.5,
                fontSize: 14,
                fontWeight: 400,
                color: 'rgba(17, 17, 17, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              color="text.secondary"
            >
              (m² years)
            </Typography>
            <Box sx={{ padding: 2 }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                color="secondary"
                sx={{ height: 5, borderRadius: 5, marginBottom: 2 }}
              />
              <Slider
                value={progress}
                onChange={handleChange}
                aria-labelledby="progress-slider"
                min={1}
                max={100}
                sx={{
                  '& .MuiSlider-thumb': {
                    transform: 'rotate(-45deg)', // Rotate the thumb for a slight skewed effect
                  },
                  '& .MuiSlider-rail': {
                    opacity: 0.5, // Dim the rail a bit
                  },
                }}
              />
              <Typography variant="caption" display="block" gutterBottom>
                Adjust progress (1-100)
              </Typography>
            </Box>
            <Box
              sx={{ display: 'flex', mt: 1, justifyContent: 'space-between' }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: 'rgba(17, 17, 17, 0.6)',
                }}
              >
                Primary Energy Demand (EP)
              </Typography>
              <Box
                sx={{
                  minWidth: '130px',
                  background: 'rgba(245, 247, 251, 1)',
                  p: 1,
                  alignItems: 'center',
                  borderRadius: '10px',
                }}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: 'rgba(0, 0, 0, 1)',
                    p: 0.2,
                  }}
                >
                  123.3
                  <br />
                  <Box
                    component="span"
                    sx={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: 'rgba(17, 17, 17, 0.6)',
                    }}
                  >
                    Kwh / m² years
                  </Box>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: 'flex', mt: 1, justifyContent: 'space-between' }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: 'rgba(17, 17, 17, 0.6)',
                }}
              >
                Final energy Demand (EK)
              </Typography>
              <Box
                sx={{
                  minWidth: '130px',
                  background: 'rgba(245, 247, 251, 1)',
                  p: 1,
                  alignItems: 'center',
                  borderRadius: '10px',
                }}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: 'rgba(0, 0, 0, 1)',
                    p: 0.2,
                  }}
                >
                  123.3
                  <br />
                  <Box
                    component="span"
                    sx={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: 'rgba(17, 17, 17, 0.6)',
                    }}
                  >
                    kWh / m² years
                  </Box>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default FloorPrimaryEnergy
