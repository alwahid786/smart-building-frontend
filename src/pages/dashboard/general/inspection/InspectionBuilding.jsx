import React, { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Grid,
  Card,
  Chip,
  Stack,
  Divider,
  styled,
} from '@mui/material'
import { RecentlyInspectedBuildingsSkeleton } from '../../../../components/Skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../../../features/loading/loadingSlice'

const InspectionBuilding = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.loading)

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 3000)
  }, [])
  const data = [
    {
      building: 'Block of Flats',
      date: '29-06-2019',
      status: 'Good',
      subtext: 'Subtext 1',
      icon: true,
    },
    {
      building: 'Office Building',
      date: '15-08-2020',
      status: 'Good',
      subtext: 'Subtext 2',
      icon: true,
    },
    {
      building: 'Retail Store',
      date: '01-12-2021',
      status: 'Good',
      subtext: 'Subtext 3',
      icon: true,
    },
    {
      building: 'Warehouse',
      date: '18-03-2022',
      status: 'Good',
      subtext: 'Subtext 4',
      icon: true,
    },
    {
      building: 'Block of Flats',
      date: '29-06-2019',
      status: 'Good',
      subtext: 'Subtext 5',
      icon: true,
    },
    {
      building: 'Office Building',
      date: '15-08-2020',
      status: 'Good',
      subtext: 'Subtext 6',
      icon: true,
    },
    {
      building: 'Retail Store',
      date: '01-12-2021',
      status: 'Good',
      subtext: 'Subtext 7',
      icon: true,
    },
    {
      building: 'Warehouse',
      date: '18-03-2022',
      status: 'Good',
      subtext: 'Subtext 8',
      icon: true,
    },
    {
      building: 'Block of Flats',
      date: '29-06-2019',
      status: 'Good',
      subtext: 'Subtext 9',
      icon: true,
    },
    {
      building: 'Office Building',
      date: '15-08-2020',
      status: 'Good',
      subtext: 'Subtext 10',
      icon: true,
    },
    {
      building: 'Retail Store',
      date: '01-12-2021',
      status: 'Good',
      subtext: 'Subtext 11',
      icon: true,
    },
    {
      building: 'Warehouse',
      date: '18-03-2022',
      status: 'Good',
      subtext: 'Subtext 12',
      icon: true,
    },
  ]

  return (
    <>
      {isLoading ? (
        <RecentlyInspectedBuildingsSkeleton />
      ) : (
        <Card variant="outlined" width="xl" sx={{ overflow: 'auto' }}>
          <Box sx={{ p: { xs: 1, md: 2 } }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: 12, md: 14 },
                  color: 'rgba(17, 17, 17, 1)',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Recently Inspected Buildings
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: 12,
                  color: 'rgba(12, 35, 77, 1)',
                  fontFamily: "'Poppins', sans-serif",
                  cursor: 'pointer',
                }}
              >
                See full report
              </Typography>
            </Stack>
            <Divider sx={{ my: 1 }} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                maxHeight: 31,
                alignItems: 'center',
                p: 1,
                backgroundColor: 'rgba(216, 218, 219, 1)',
              }}
            >
              <CustomText
                sx={{
                  flex: 1,
                  fontSize: { xs: 10, md: 12 },
                }}
                variant="body1"
              >
                Building
              </CustomText>
              <CustomText
                sx={{
                  flex: 1,
                  fontSize: { xs: 10, md: 12 },
                }}
                variant="body2"
              >
                Inspection date
              </CustomText>
              <CustomText
                sx={{
                  flex: 1,
                  fontSize: { xs: 10, md: 12 },
                  // width: '60px'
                }}
                variant="body2"
              >
                Status
              </CustomText>
              <CustomText
                sx={{
                  flex: 'none',
                  width: '60px',
                }}
                variant="body2"
              ></CustomText>
            </Box>
            <Grid container>
              {data.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      p: 1,
                      //   gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                      }}
                    >
                      <CustomText variant="body1">{item.building}</CustomText>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(17, 17, 17, 0.2)',
                          fontWeight: 400,
                          fontSize: 12,
                        }}
                      >
                        {item.subtext}
                      </Typography>
                    </Box>
                    <CustomText
                      sx={{
                        flex: 1,
                      }}
                      variant="body2"
                    >
                      {item.date}
                    </CustomText>
                    <Typography
                      sx={{
                        color: 'rgba(97, 202, 148, 1)',
                        fontWeight: 400,
                        fontSize: { xs: 12, md: 14 },
                        flex: 1,
                        // width: '60px',
                      }}
                    >
                      {item.status}
                    </Typography>
                    <Box
                      sx={{
                        flex: 'none',
                        width: '60px',
                      }}
                    >
                      {item.icon && (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                            stroke="#111111"
                            strokeOpacity="0.2"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14 2V8H20"
                            stroke="#111111"
                            strokeOpacity="0.2"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </Box>
                  </Box>
                  <Divider variant="middle" sx={{ my: 0.5 }} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Card>
      )}
    </>
  )
}
const CustomText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 12,
  color: 'rgba(17, 17, 17, 0.6)',
  fontFamily: "'Poppins', sans-serif",
}))
export default InspectionBuilding
