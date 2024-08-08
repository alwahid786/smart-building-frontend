/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from '@mui/material'

import { Fragment, useEffect, useState } from 'react'
import CardFavoriteIcon from '../../../../asset/svgs/CardFavoriteIcon'
import FloorIcon from '../../../../asset/svgs/buildingdetails/FloorIcon'

import AreaIcon from '../../../../asset/svgs/buildingdetails/AreaIcon'
import SensorIcon from '../../../../asset/svgs/buildingdetails/SensorIcon'
import CardBg from '../../../../asset/Images/list/image.png'
import { PieChart, Pie, Legend, Cell } from 'recharts'
import { Link } from 'react-router-dom'
const ListCard = ({
  imageUrl,
  subtitle,
  title,
  tags,
  numberOfFloors,
  totalArea,
  buildingId,
  sensorCount
}) => {
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
      label: 'Total Floors',
      value: numberOfFloors,
      // color: '#0F7FBA',
      // bgcolor: '#399ED316',
      icon: <FloorIcon />,
    },
    {
      label: 'Total Area',
      value: `${totalArea}(sq)`,
      // color: '#FF8932',
      // bgcolor: '#FF893216',
      icon: <AreaIcon />,
    },
    {
      label: 'Total Sensors',
      value: sensorCount,
      // color: '#61CA94',
      // bgcolor: '#61CA9416',
      icon: <SensorIcon />,
    },
  ]
  const data = [
    { name: 'Sensor 1', value: 33 },
    { name: 'Sensor 2', value: 41 },
    { name: 'Sensor 3', value: 48 },
  ]

  const COLORS = ['#5B61D6', '#3070F5', '#57BEB5']

  return (
    <>
      {/* {isLoading ? (
        <CardSkeleton />
      ) : ( */}
      <Card
        sx={{
          border: '1px solid #00000010',
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
            height: '12rem',
            objectFit: 'cover',
            transition: 'transform 0.3s',
            // borderBottomLeftRadius: '16px',
            // borderBottomRightRadius: '16px',
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
            right: '7%',
            top: 160,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            background: 'white',
            padding: '15px',
            borderRadius: '100%',
            // transform: 'translate(-50%, 0)',
            transition: 'right .6s ease',
            // height: '40px',
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          // className="showHeart"
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
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: '12px',
              lineHeight: '19.07px',
              fontWeight: '600',
              letterSpacing: '2px',
              color: '#81838B',
            }}
          >
            {subtitle}
          </Typography>
          <Divider sx={{ my: '10px' }} />

          <Grid
            container
            spacing={1}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '3px',
            }}
          >
            {statuses.map((item, index) => (
              <Fragment key={index}>
                <Grid item md={3}>
                  <Box
                    sx={{
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
                        fontSize: { xs: 10, md: 14 },
                        lineHeight: '16.34px',
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      {item.icon}
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#4F4F4F90',
                          fontWeight: '600',
                          fontSize: { xs: 10, md: 14 },
                          lineHeight: '15px',
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                {index < statuses.length - 1 && ( // Add divider conditionally
                  <Grid item>
                    <Box
                      sx={{
                        height: '100%',
                        width: '1px',
                        backgroundColor: '#E0E0E0',
                      }}
                    />
                  </Grid>
                )}
              </Fragment>
            ))}
          </Grid>

          <Box sx={{ position: 'absolute', bottom: '0', right: '0' }}>
            <img src={CardBg} style={{ width: '218px', height: '124px' }} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              // height: '70%',
              marginTop: '15px',
            }}
          >
            <Box>
              <Link to={`/dashboard/building-info/${buildingId}`}>
                <Button
                  variant="outlined"
                  sx={{
                    marginLeft: { sm: '0', md: '10px' },
                    padding: { xs: '5px 15px', md: '5px 20px' },
                    border: '1px solid #7C40F6 ',
                    textTransform: 'capitalize',
                    color: 'linear-gradient(90deg, #7C40F6 0%, #AD1FFE 100%)',
                    borderRadius: '10px',

                    // width: '110px',
                  }}
                  // className="showButton"
                >
                  <Typography
                    sx={{
                      color: '#7C40F6 ',
                      fontSize: {
                        xs: '10px',
                        md: '16px',
                      },
                    }}
                  >
                    See details
                  </Typography>{' '}
                </Button>
              </Link>
            </Box>
            <Box sx={{ mt: '10px' }}>
              <PieChart width={239} height={70}>
                <Pie
                  data={data}
                  cx="47%"
                  cy="120%"
                  innerRadius={40}
                  outerRadius={70}
                  startAngle={180}
                  endAngle={0}
                  paddingAngle={1}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  wrapperStyle={{ fontSize: { xs: '6px', sm: '12px' } }}
                  // height={150}
                />
              </PieChart>
            </Box>
          </Box>
        </CardContent>
      </Card>
      {/* )} */}
    </>
  )
}

export default ListCard
