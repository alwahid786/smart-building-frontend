import React, { useEffect, useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  IconButton,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import CardFavoriteIcon from '../../../../../../asset/svgs/CardFavoriteIcon'
import Mail from '../../../../../../asset/svgs/buildingdetails/Mail'
import Map from '../../../../../../asset/svgs/buildingdetails/Map'
import { BuildingCardSkeleton } from '../../../../../../components/Skeleton'
import { useGetSingleBuildingQuery } from '../../../../../../redux/api/buildingApi'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CloseIcon from '@mui/icons-material/Close'

const BuildingCard = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: 'flex' }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: 'white',
        }}
      />
    ),
  }

  const { id } = useParams()
  const { data } = useGetSingleBuildingQuery(id)
  const [images, setImages] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (data?.images && data.images.length > 0) {
      setImages(data.images)
    } else {
      setImages([]) // Set empty array if no images
    }
  }, [data])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  if (isLoading) {
    return <BuildingCardSkeleton />
  }

  return (
    <>
      <Card
        sx={{
          height: '100%',
          Width: 'fit-content !important',
          position: 'relative',
          transition: 'border-bottom 0.1s',
          '&:hover': {
            '& .showHeart': {
              right: '1%',
            },
          },
        }}
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <CardMedia
                component="img"
                height="170"
                image={image}
                alt={`Featured Image ${index}`}
                onClick={handleOpen}
                sx={{
                  width: '100%',
                  objectFit: 'cover',
                  borderBottomLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                  boxShadow: '0px 4px 2px 0px rgba(0, 0, 0, 0.12)',
                  cursor: 'pointer',
                }}
              />
            </div>
          ))}
        </Slider>

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
              {data?.ownerName}
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
            {data?.buildingName}
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
                variant="body2"
                sx={{
                  color: '#414141',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '21.79px',
                }}
              >
                {data.description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mt: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
            <Box
              sx={{
                width: '100%',
                bgcolor: '#F5F7FB',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'left',
                alignItems: 'left',
                borderRadius: '6px',
                p: 2,
              }}
            >
              <Typography
                sx={{
                  color: '#11111190',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '16.34px',
                }}
              >
                Area
              </Typography>
              <Typography
                sx={{
                  color: '#414141',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '19.07px',
                }}
              >
                1500m
              </Typography>
            </Box>
            <Box
              sx={{
                width: '100%',
                bgcolor: '#F5F7FB',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'left',
                alignItems: 'left',
                borderRadius: '6px',
                p: 2,
              }}
            >
              <Typography
                sx={{
                  color: '#11111190',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '16.34px',
                }}
              >
                Year of building
              </Typography>
              <Typography
                sx={{
                  color: '#414141',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '19.07px',
                }}
              >
                20-09-1996
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          },
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 1000,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <Slider {...settings} style={{ width: '100%' }}>
            {images.map((img, index) => (
              <div key={index}>
                <Box
                  component="img"
                  src={img}
                  alt={`image ${index}`}
                  sx={{
                    width: '100%',
                    height: '100vh',
                    objectFit: 'contain',
                  }}
                />
              </div>
            ))}
          </Slider>
        </Box>
      </Dialog>
    </>
  )
}

export default BuildingCard
