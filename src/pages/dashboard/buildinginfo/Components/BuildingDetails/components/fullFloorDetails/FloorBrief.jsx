import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'

import { useEffect, useState } from 'react'
import { CardSkeleton } from '../../../../../../../components/Skeleton'

import image from '../../../../../../../asset/Images/list/Rectangle.png'
const FloorBrief = () => {
  // const { isLoading } = useSelector((state) => state.loading)
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const statuses = [
    {
      label: 'Total rooms',
      value: '1140 KWh',
      color: '#000000',

      bgcolor: '#F5F7FB',
    },
    {
      label: 'Floor type',
      value: '1120-2122 L',
      color: '#000000',

      bgcolor: '#F5F7FB',
    },
    {
      label: 'Sensor Issue',
      value: '2251-3520 L',
      color: '#000000',
      bgcolor: '#FFEAEB',
    },
  ]

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <Card
          sx={{
            height: '100%',
            minWidth: 0,
            position: 'relative',
            borderRadius: '10px',
            mb: 2,
            '&:hover': {
              '& .showButton': {
                bottom: '3%',
              },
              '& .showHeart': {
                right: '2%',
              },
            },
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt="Featured Image"
            className="imageEffect"
            sx={{
              width: '100%',
              height: '15rem',
              objectFit: 'cover',
              transition: 'transform 0.3s',
              borderBottomLeftRadius: '16px',
              borderBottomRightRadius: '16px',
              boxShadow: '0px 4px 2px 0px rgba(0, 0, 0, 0.12)',
            }}
          />

          <CardContent
            sx={{
              p: { xs: 1, md: 2 },
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: '18px',
                lineHeight: '24.51px',
                fontWeight: '600',
                color: '#414141',
              }}
            >
              floor number
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: '14px',
                lineHeight: '19.07px',
                fontWeight: '400',
                color: '#11111180',
              }}
            >
              Floor name
            </Typography>

            <Grid container spacing={1}>
              {statuses.map((item, index) => (
                <Grid item sm={12} md={4} key={index}>
                  <Box
                    sx={{
                      padding: '5px',
                      bgcolor: item.bgcolor,
                      borderRadius: '6px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '5px',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: 'center',
                        color: item.color,
                        fontWeight: '600',
                        fontSize: { xs: 10, md: 12 },
                        lineHeight: '16.34px',
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                    >
                      {item.icon}
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#121212',
                          fontWeight: '600',
                          fontSize: { xs: 8, md: 10 },
                          lineHeight: '15px',
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default FloorBrief
