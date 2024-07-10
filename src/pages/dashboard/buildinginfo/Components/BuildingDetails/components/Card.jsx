import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardFavoriteIcon from '../../../../../../asset/svgs/CardFavoriteIcon'
import Mail from '../../../../../../asset/svgs/buildingdetails/Mail'
import Map from '../../../../../../asset/svgs/buildingdetails/Map'
import { BuildingCardSkeleton } from '../../../../../../components/Skeleton'
import { useGetSingleBuildingQuery } from '../../../../../../redux/api/buildingApi'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const BuildingCard = () => {
  const imageList = [
    'image',
    'image',
    'image',
    // Add more image URLs as needed
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  }

  const { id } = useParams()
  const { data } = useGetSingleBuildingQuery(id)
  const [image, setImage] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (data && Array.isArray(data.images) && data.images.length > 0) {
      const firstImageUrl = data.images[0]
      setImage(firstImageUrl)
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

  if (isLoading) {
    return <BuildingCardSkeleton />
  }

  return (
    <Card
      sx={{
        height: '100%',
        Width: 'fit-content !important',
        position: 'relative',
        // mb: 2,
        transition: 'border-bottom 0.1s',
        '&:hover': {
          '& .showHeart': {
            right: '1%',
          },
        },
      }}
    >
<<<<<<< Updated upstream
      <Slider {...settings}>
        {imageList.map((image, index) => (
          <div key={index}>
            <CardMedia
              component="img"
              height="170"
              image={image}
              alt="Featured Image"
              sx={{
                width: '100%',
                objectFit: 'cover',
                borderBottomLeftRadius: '16px',
                borderBottomRightRadius: '16px',
                boxShadow: '0px 4px 2px 0px rgba(0, 0, 0, 0.12)',
              }}
            />
          </div>
        ))}
      </Slider>
=======
      <CardMedia
        component="img"
        height="170"
        image={image}
        alt="Featured Image"
        sx={{
          width: '100%',
          objectFit: 'cover',
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px',
          boxShadow: '0px 4px 2px 0px rgba(0, 0, 0, 0.12)',
        }}
      />
>>>>>>> Stashed changes

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
        {/* <Box>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </Box> */}
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
                color: 'rgba(0, 0, 0, 1)',
                fontWeight: '400',
                fontSize: '16px',
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
  )
}

export default BuildingCard
