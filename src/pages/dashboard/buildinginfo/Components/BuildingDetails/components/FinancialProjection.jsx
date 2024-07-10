import { useEffect, useState } from 'react'
import { Card, CardContent, Grid, Typography, Button, Box } from '@mui/material'
import { BuildingCustomCardSkeleton } from '../../../../../../components/Skeleton'

const FinancialProjection = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {isLoading ? (
        <BuildingCustomCardSkeleton />
      ) : (
        <Card sx={{ minWidth: 275, boxShadow: 3, borderRadius: 2 }}>
          <CardContent sx={{ padding: 2 }}>
            <Typography
              sx={{
                fontSize: { xs: 12, md: 16 },
                fontWeight: 600,
                color: 'rgba(17, 17, 17, 1)',
              }}
              gutterBottom
            >
              Financial projections
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography
                  variant="h5"
                  color="text.primary"
                  sx={{ fontWeight: 'bold' }}
                >
                  <Box
                    component="span"
                    sx={{ fontSize: { xs: 12, md: 14 }, fontWeight: 500 }}
                  >
                    approx.
                  </Box>{' '}
                  <Box
                    component="span"
                    sx={{ fontSize: { xs: 16, md: 24 }, fontWeight: 700 }}
                  >
                    13 mln
                  </Box>{' '}
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: 12, md: 14 },
                      fontWeight: 500,
                      color: 'rgba(17, 17, 17, 0.6)',
                    }}
                  >
                    / years 2020
                  </Box>
                </Typography>
                <Typography color="text.secondary"></Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1.5,
                    color: 'rgba(17, 17, 17, 0.6)',
                    fontSize: { xs: 12, md: 14 },
                    fontWeight: 500,
                  }}
                >
                  Building renovation
                </Typography>
              </Grid>
              <Grid item xs={3} md={1}>
                <Typography variant="body2" color="text.secondary">
                  Roof
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  -5 mln
                </Typography>
                {/* <Box sx={{ display: 'flex' }}> */}

                {/* </Box> */}
              </Grid>
              <Grid
                item
                xs={1}
                md={1}
                display={'flex'}
                justifyContent={'center'}
              >
                <Box
                  sx={{
                    border: '1px solid #11111120',
                    height: '50px',
                    width: '0',
                  }}
                />
              </Grid>
              <Grid item xs={3} md={1}>
                <Typography variant="body2" color="text.secondary">
                  Elevator
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  -5 mln
                </Typography>
              </Grid>
              <Grid
                item
                xs={1}
                md={1}
                display={'flex'}
                justifyContent={'center'}
              >
                <Box
                  sx={{
                    border: '1px solid #11111120',
                    height: '50px',
                    width: '0',
                  }}
                />
              </Grid>
              <Grid item xs={4} md={2}>
                <Typography variant="body2" color="text.secondary">
                  Energy
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  -3 mln
                </Typography>
              </Grid>
              <Grid item xs={12} md={2}>
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
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default FinancialProjection
