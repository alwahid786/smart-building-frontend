/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'

import { useEffect, useState } from 'react';
import CardFavoriteIcon from '../../../../asset/svgs/CardFavoriteIcon'
import { CardSkeleton } from '../../../../components/Skeleton'
import Bulb from '../../../../asset/svgs/buildingdetails/Bulb'
import GasFire from '../../../../asset/svgs/buildingdetails/GasFire'
import Drop from '../../../../asset/svgs/buildingdetails/Drop'
import Bad from '../../../../asset/svgs/buildingdetails/Bad'
import CardBg from '../../../../asset/Images/list/image.png'


const ListCard = ({ imageUrl, subtitle, title, tags }) => {
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
      label: 'Energy usage',
      value: '1140 KWh',
      color: '#0F7FBA',
      bgcolor: '#399ED316',
      icon: <Bulb />,
    },
    {
      label: 'Gas usage',
      value: '1120-2122 L',
      color: '#FF8932',
      bgcolor: '#FF893216',
      icon: <GasFire />,
    },
    {
      label: 'Water usage',
      value: '2251-3520 L',
      color: '#61CA94',
      bgcolor: '#61CA9416',
      icon: <Drop />,
    },
    {
      label: 'Building Status',
      value: 'BAD',
      color: '#F83D44',
      bgcolor: '#F83D4416',
      icon: <Bad />,
    },
  ]

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <Card
          sx={{
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
            image={imageUrl}
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
          <Box
            sx={{
              position: 'absolute',
              top: 10,
              left: 10,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              sx={{
                background: '#7E40F6',
                color: 'white',
                p: 0.5,
                width: 39,
                height: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                borderRadius: '4px',
              }}
            >
              {tags[0]}
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              right: '-20%',
              top: 10,
              transform: 'translate(-50%, 0)',
              transition: 'right .6s ease',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
            className="showHeart"
            onClick={toggleFavorite}
          >
            <CardFavoriteIcon filled={isFavorite} />
          </Box>
          <CardContent
            sx={{
              p: { xs: 1, md: 2 },
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: '14px',
                lineHeight: '19.07px',
                fontWeight: '400',
                color: '#11111180',
              }}
            >
              {subtitle}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: '18px',
                lineHeight: '24.51px',
                fontWeight: '600',
                color: '#414141',
              }}
            >
              {title}
            </Typography>
            <Grid container spacing={1}>
              {statuses.map((item, index) => (
                <Grid item sm={12} md={6} key={index}>
                  <Box
                    sx={{
                      padding: '5px 15px',
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
            <Box sx={{ position: 'absolute', bottom: '0', right: '0' }}>
              <img src={CardBg} style={{ width: '218px', height: '124px' }} />
            </Box>
            <Box sx={{ marginTop: '20px', height: '20px' }}>
              <Button
                variant="contained"
                sx={{
                  position: 'absolute',
                  left: '50%',
                  bottom: '-15%',
                  transform: 'translate(-50%, 0)',
                  transition: 'bottom .6s ease',
                  textTransform: 'capitalize',
                  background:
                    'linear-gradient(90deg, #7C40F6 0%, #AD1FFE 100%)',
                  borderRadius: '10px',
                }}
                className="showButton"
              >
                See details
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default ListCard
