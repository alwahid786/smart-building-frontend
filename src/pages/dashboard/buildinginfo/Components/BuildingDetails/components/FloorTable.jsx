/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

const FloorTable = ({ sensors }) => {

  return (
    <Card
      sx={{
        minWidth: 275,
        boxShadow: 3,
        borderRadius: 2,
        marginTop: 2,
      }}
    >
      {sensors?.map((sensor) => (
        <CardContent sx={{ padding: 2 }} key={sensor._id}>
          <Grid container columnSpacing={3}>
            <Grid item xs={12} md={2}>
              <img src={sensor?.floorImage} width="100%" alt="Floor" />
              {/* </Box> */}
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '20px',
                  lineHeight: '27.28px',
                  fontWeight: '700',
                }}
              >
                Floor Number
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#414141',
                  fontSize: '14px',
                  lineHeight: '19.1px',
                  fontWeight: '600',
                }}
              >
                {sensor?.floor}
              </Typography>
              <Grid container sx={{ marginTop: '9px' }}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: 'flex',
                    flexDirection: {
                      md: 'column',
                      xs: 'row',
                    },
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: '600',
                      fontSize: '15px',
                      lineHeight: '21.82px',
                    }}
                  >
                    Total rooms {sensor?.rooms}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: '500',
                      fontSize: '14px',
                      lineHeight: '21.82px',
                    }}
                  >
                    187 spaces
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: 'flex',
                    flexDirection: {
                      md: 'column',
                      xs: 'row',
                    },
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: '600',
                      fontSize: '15px',
                      lineHeight: '21.82px',
                    }}
                  >
                    Floor Type
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: '500',
                      fontSize: '14px',
                      lineHeight: '21.82px',
                    }}
                  >
                    {sensor?.floorType}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: 'flex',
                    flexDirection: {
                      md: 'column',
                      xs: 'row',
                    },
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: '600',
                      fontSize: '15px',
                      lineHeight: '21.82px',
                    }}
                  >
                    Floor Area(sq ft/m)
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: '500',
                      fontSize: '14px',
                      lineHeight: '21.82px',
                    }}
                  >
                    {sensor?.area} Sqm
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Link to={`/dashboard/floor-detail/${sensor?.buildingId}`}>
                <Button
                  sx={{
                    textTransform: 'none',
                    color: '#7B42F6',
                    fontSize: '16px',
                    lineHeight: '21px',
                    fontWeight: '700',
                    textDecoration: 'underline',
                  }}
                >
                  See Details
                </Button>
              </Link>
            </Grid>
          </Grid>
          <Divider />
        </CardContent>
      ))}
    </Card>
  )
}

export default FloorTable
