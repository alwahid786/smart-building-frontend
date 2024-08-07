import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Button,
  Select,
  MenuItem,
  Box,
  Divider,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import MyAreaLineChart from './MyAreaLineChart'
import Car from '../../../../../../asset/svgs/buildingdetails/BuildingMedia/Car'
import { BuildingCustomCardSkeleton } from '../../../../../../components/Skeleton'

const data = [
  { time: '07:00', value: 0 },
  { time: '08:00', value: 0 },
  { time: '03:00', value: 0 },
  { time: '04:00', value: 0 },
  { time: '09:00', value: 0, max: true },
  { time: '11:00', value: 0 },
  { time: '12:00', value: 0 },
  { time: '13:00', value: 0 },
]

const EnergyUtilitiesCard = () => {
  const [tenant, setTenant] = useState('')
  const handleChange = (event) => {
    setTenant(event.target.value)
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {isLoading ? (
        <BuildingCustomCardSkeleton />
      ) : (
        <Card sx={{ width: 'auto', height: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              paddingY: '1rem',
            }}
          >
            <Typography sx={{ fontSize: { sx: 12, md: 16 }, fontWeight: 600 }}>
              Energy utilities
            </Typography>
            <Select
              value={tenant}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ height: 30 }}
            >
              <MenuItem value="">
                <span
                  style={{ color: 'rgba(17, 17, 17, 0.6)', fontSize: '14px' }}
                >
                  {' '}
                  <Car /> Car Chargers
                </span>
              </MenuItem>
              <MenuItem value="1">Tenant 1</MenuItem>
              <MenuItem value="2">Tenant 2</MenuItem>
            </Select>
          </Box>
          <Divider />
          <GraphContent>
            <MyAreaLineChart data={data} />
          </GraphContent>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                my: 6,
              }}
            >
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
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default EnergyUtilitiesCard

const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
}))

const TitleContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px',
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

const GraphContent = styled(CardContent)(({ theme }) => ({
  padding: 0,
}))
