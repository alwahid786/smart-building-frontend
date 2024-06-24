import { Box, Button, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Greenbox from '../../../../asset/svgs/Greenbox'
import MapIconSmall from '../../../../asset/svgs/MapIconSmall'
import OrangeBox from '../../../../asset/svgs/OrangeBox'
import RedBox from '../../../../asset/svgs/RedBox'
import YellowBox from '../../../../asset/svgs/YellowBox'
import { BuildingStatusSkeleton } from '../../../../components/Skeleton'
import BuildingIcon from '../../../../asset/svgs/BuildingIcon'

const BuildingStatus = () => {
  const navigate = useNavigate()
  // const { isLoading } = useSelector((state) => state.loading)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {/* {isLoading ? (
        <BuildingStatusSkeleton />
      ) : ( */}
      <Box
        sx={{
          flexGrow: 1,
          p: { xs: 1, md: 0 },
          display: 'flex',
          // marginTop: '2rem',
          // marginBottom: { xs: 0, md: 2 },
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          gap: { xs: 1, md: 4 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: { xs: 'row', sm: 'row' },
            gap: { xs: 2, md: 4 },
            mb: { xs: 0, sm: 0 },
            alignItems: { xs: 'start', md: 'center' },
            fontSize: { xs: '8px', sm: '10px', md: '12px', lg: '14px' },
          }}
        >
          <StatusBox>
            <BuildingIcon />
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.8)',
                mb: { xs: 0, sm: 0 },
                fontSize: { xs: '16px', sm: '10px', md: '12px', lg: '16px' },
              }}
            >
              Total Number Of Yours Buildings: 20
            </Typography>
          </StatusBox>
          <StatusBox>
            <Greenbox />
            <CustomText>Good: 12</CustomText>
          </StatusBox>
          <StatusBox>
            <YellowBox />
            <CustomText>Need inspection: 1</CustomText>
          </StatusBox>
          <StatusBox>
            <OrangeBox />
            <CustomText>Need action: 1</CustomText>
          </StatusBox>
          <StatusBox>
            <RedBox />
            <CustomText>Bad: 2</CustomText>
          </StatusBox>
        </Box>
      </Box>
      {/* )
      } */}
    </>
  )
}

export default BuildingStatus
const CustomText = styled(Typography)(({ theme }) => ({
  fontWeight: { xs: 400, md: 600 },
  FontSize: { xs: 8, md: 10 },
  color: '#414141',
}))
const StatusBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 6,
  flexWrap: 'wrap',
  alignItems: 'center',
}))
