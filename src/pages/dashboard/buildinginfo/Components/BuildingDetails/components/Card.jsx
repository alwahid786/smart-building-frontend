import React, { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  styled,
} from '@mui/material'
import Img from '../../../../../../asset/Images/list/Rectangle.png'
import CardFavoriteIcon from '../../../../../../asset/svgs/CardFavoriteIcon'
import Map from '../../../../../../asset/svgs/buildingdetails/Map'
import Mail from '../../../../../../asset/svgs/buildingdetails/Mail'
import Electric from '../../../../../../asset/svgs/buildingdetails/smartindicator/Electric'
import Boxes from '../../../../../../asset/svgs/buildingdetails/smartindicator/Boxes'
import Battery from '../../../../../../asset/svgs/buildingdetails/smartindicator/Battery'
import Setting from '../../../../../../asset/svgs/buildingdetails/smartindicator/Setting'
import { BuildingCardSkeleton } from '../../../../../../components/Skeleton'
import { useDispatch, useSelector } from 'react-redux'

const BuildingCard = () => {
  const dispatch = useDispatch()

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

  return (
    <>
      {isLoading ? (
        <BuildingCardSkeleton />
      ) : (
        <Card
          sx={{
            Width: 'fit-content !important',
            // height: 430,
            position: 'relative',
            mb: 2,
            transition: 'border-bottom 0.1s',
            // '&:hover': {
            //   borderBottom: '2px solid rgba(123, 66, 246, 1)',
            //   '& .imageEffect': {
            //     transform: 'scale(1.1)',
            //   },
            // },
            '&:hover': {
              '& .showHeart': {
                right: '1%',
              },
            },
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={Img}
            alt="Featured Image"
            // className="imageEffect"
            sx={{
              width: '100%',
              objectFit: 'cover',
              // transition: 'transform 0.3s',
              // '&:hover': {
              //   transform: 'scale(1.1)',
              // },

              borderBottomLeftRadius: '16px',
              borderBottomRightRadius: '16px',
              boxShadow: '0px 4px 2px 0px rgba(0, 0, 0, 0.12)',
            }}
          />

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
          <CardContent sx={{ p: 1, display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  color: 'rgba(17, 17, 17, 0.6)',
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                Oslo
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Map /> <Mail />
              </Box>
            </Box>

            <Typography
              sx={{
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '24.51px',
                color: '#414141',
              }}
            >
              Torshov 0476
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '24.51px',
                color: '#414141',
              }}
            >
              Estate building
            </Typography>

            <Box sx={{ display: 'flex', mt: 2 }}>
              <Box
                sx={{
                  width: '100%',
                  bgcolor: '#F5F7FB',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'left',
                  alignItems: 'left',
                  borderRadius: '6px',
                  p: 1,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'rgba(17, 17, 17, 0.6)',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '16.34px',
                  }}
                >
                  ID number
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(0, 0, 0, 1)',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '21.79px',
                  }}
                >
                  15415567215
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  bgcolor: '#F5F7FB',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'left',
                  alignItems: 'left',
                  borderRadius: '2px',
                  p: 1,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'rgba(17, 17, 17, 0.6)',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '16.34px',
                  }}
                >
                  Area
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(0, 0, 0, 1)',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '19.07px',
                  }}
                >
                  15 000m²
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '50%',
                  bgcolor: '#F5F7FB',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'left',
                  alignItems: 'left',
                  borderRadius: '6px',
                  p: 1,
                }}
              >
                <Typography
                  sx={{
                    color: 'rgba(17, 17, 17, 0.6)',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '16.34px',

                    // lineHeight: "22px",
                  }}
                >
                  Year of building
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(0, 0, 0, 1)',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '19.07px',
                  }}
                >
                  20/09/1996
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}
            >
              <Box
                sx={{
                  width: '50%',
                  // bgcolor: "rgba(245, 247, 251, 1)",
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'left',
                  alignItems: 'left',
                  borderRadius: '2px',
                  p: 1,
                }}
              >
                <Typography
                  sx={{
                    color: 'rgba(17, 17, 17, 0.6)',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '19.07px',
                  }}
                >
                  Energy class
                </Typography>
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
                    fontSize: '12px',
                  }}
                >
                  A+
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '50%',

                  // bgcolor: "rgba(245, 247, 251, 1)",
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'left',
                  alignItems: 'left',
                  borderRadius: '2px',
                  p: 1,
                }}
              >
                <Typography
                  sx={{
                    color: 'rgba(17, 17, 17, 0.6)',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '19.07px',

                    // lineHeight: "22px",
                  }}
                >
                  SRI
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.3 }}>
                  <SriBoxes>E</SriBoxes>
                  <SriBoxes>D</SriBoxes>
                  <SriBoxes>C</SriBoxes>
                  <SriBoxes sx={{ background: 'rgba(97, 202, 148, 1)' }}>
                    B
                  </SriBoxes>
                  <SriBoxes>A</SriBoxes>
                </Box>
              </Box>
            </Box>
            <Box sx={{ p: 1 }}>
              <Typography
                sx={{
                  color: 'rgba(17, 17, 17, 0.6)',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '19.07px',
                }}
              >
                Smart readiness indicator
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, pt: 1 }}>
                <IndicatorBoxes>
                  <Electric />
                </IndicatorBoxes>
                <IndicatorBoxes>
                  <Boxes />
                </IndicatorBoxes>
                <IndicatorBoxes>
                  <Setting />
                </IndicatorBoxes>
                <IndicatorBoxes>
                  <Battery />
                </IndicatorBoxes>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default BuildingCard
const SriBoxes = styled(Typography)(({ theme }) => ({
  background: 'rgba(17, 17, 17, 0.2)',
  color: 'white',
  padding: '2px 6px',
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.75rem',
  borderRadius: '0.8px',
}))
const IndicatorBoxes = styled(Typography)(({ theme }) => ({
  background: '#7E40F610',
  color: 'white',
  // padding: "8px",
  width: 30,
  height: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.75rem',
  borderRadius: '20px',
}))
