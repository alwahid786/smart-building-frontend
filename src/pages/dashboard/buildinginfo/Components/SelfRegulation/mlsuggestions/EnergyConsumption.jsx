import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import LineIcon from '../../../../../../asset/svgs/selfregulation/LineIcon'
import StairsIcon from '../../../../../../asset/svgs/selfregulation/StairsIcon'
import GrayBox from '../../../../../../asset/svgs/selfregulation/GrayBox'
import PurpleBox from '../../../../../../asset/svgs/selfregulation/PurpleBox'
import { styled } from '@mui/material/styles'
import { useSelector, useDispatch } from 'react-redux'

const EnergyConsumption = () => {
  const dispatch = useDispatch()
  // const { showSecondBar, chartType } = useSelector((state) => state.chart)
  const stats = [
    { label: 'Daily consumption', value: '332 Mwh' },
    { label: 'Weekly consumption', value: '1642 Mwh' },
    { label: 'Monthly consumption', value: '10421 Mwh' },
    { label: 'Yearly consumption', value: '152362 Mwh' },
  ]

  return (
    <>
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          height: { xs: 'auto', md: '80px' },
        }}
      >
        <Box
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            display: 'flex',
            justifyContent: 'space-between',
            width: { xs: 'full', md: '83%' },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: { xs: 400, lg: 600 },
                fontSize: { xs: 12, lg: 16 },
                color: 'rgba(17, 17, 17, 1)',
                lineHeight: '40px',
              }}
            >
              Energy consumption
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                flexDirection: { xs: 'row', md: 'row' },
                gap: 1,
                fontWeight: 400,
                fontSize: { xs: 12, md: 16 },
                fontFamily: 'Poppins',
                color: 'rgba(17, 17, 17, 0.6)',
              }}
            >
              {' '}
              <GrayBox /> Currently
              {/* {showSecondBar && <PurpleBox />}{' '}
              {showSecondBar && 'After changes'} */}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              mt: { xs: 1, md: 0 },
              gap: 1,
              flexDirection: { xs: 'row', md: 'row' },
            }}
          >
            <TextField
              type="date"
              defaultValue="Dec 29, 2019 - Jan 04, 2020"
              sx={{
                width: 'fit-content',
                '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                  height: 8,
                },
              }}
            />

            <Button
              // onClick={() => dispatch(setChartType("bar"))}
              sx={{
                background: 'rgba(123, 66, 246, 1)',
                width: 40,
                height: 40,
              }}
            >
              <LineIcon />
            </Button>
            <Button
              // onClick={() => dispatch(setChartType("line"))}
              sx={{
                background: 'rgba(217, 217, 217, 1)',
                width: 40,
                height: 40,
              }}
            >
              <StairsIcon />
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '20%' },
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {stats.map((stat, index) => (
            <>
              <Box>
                <TextBox key={index}>
                  <TextBoxChildFirst>
                    {stat.label.split(' ')[0]}
                  </TextBoxChildFirst>
                  <TextBoxChildFirst>
                    {stat.label.split(' ')[1]}
                  </TextBoxChildFirst>
                  <TextBoxChildSecond>{stat.value}</TextBoxChildSecond>
                </TextBox>
                {/* {showSecondBar && (
                  <TextBoxChildThird>{stat.value}</TextBoxChildThird>
                )} */}
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default EnergyConsumption
const TextBox = styled(Box)(({ showSecondBar }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'baseline',
  textAlign: 'left',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: '8px',
  border: '1.5px solid #00000030',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
  padding: '12px',
}))

const TextBoxChildFirst = styled(Typography)({
  color: 'rgba(17, 17, 17, 0.6)',
  fontWeight: 400,
  fontSize: '12px',
  // fontFamily: 'Poppins',
  textAlign: 'center',
})

const TextBoxChildSecond = styled(Typography)({
  color: 'rgba(17, 17, 17, 1)',
  fontWeight: 500,
  fontSize: '12px',
  // fontFamily: 'Poppins',
  textAlign: 'center',
})
const TextBoxChildThird = styled(Typography)({
  background: '#7B42F6',
  color: 'white',
  fontWeight: 500,
  fontSize: '12px',
  fontFamily: 'Poppins',
  textAlign: 'center',
  borderRadius: '0px 0px 12px 12px',
})
