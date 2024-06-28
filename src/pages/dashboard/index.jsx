import { Box, Grid, styled } from '@mui/material'

import Header from './navigation/Header'
import Aside from './navigation/Aside'
import Main from './navigation/Main'
import HeaderBgImg from '../../asset/Images/main/HomeBg.png'

const Dashboard = () => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          padding: {
            sm: '10px',
            xs: '10px',
          },
          // width: '100%',
          // maxWidth: '100%',
          // overflowX: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '230px',
            backgroundImage: `url(${HeaderBgImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            zIndex: -1,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            // gap: {
            //   xs: '0', sm: '1rem',
            // },
          }}
        >
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            <Aside />
          </Box>
          <Box sx={{ flex: '1 1 0%', overflowX: 'hidden' }}>
            <Header />
            <Main />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Dashboard
const AsideGrid = styled(Grid)({
  background: 'linear-gradient(180deg, #7B42F6 0%, #5510CF 100%)',
  // overflowY: 'visible',
  // overflowX: 'hidden',
  MSOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    width: 0,
    height: 0,
  },
})

const HeaderBg = styled(Box)({
  background: `url(${HeaderBgImg}) no-repeat center / cover`,
  padding: '78px 16px 90px 18px',
  '@media (min-width: 960px)': {
    padding: '68px 34px 149px 34px',
  },
  position: 'relative',
})
