import { Box, Drawer, Typography, styled } from '@mui/material'
import { useState } from 'react'
import HeaderBgImg from '../../../asset/Images/main/HomeBg.png'
// import SaudiLogo from '../../../assets/images/saudi-arabia-logo.png'
import { MenuRounded } from '@mui/icons-material'

import Aside from './Aside'
import Menu from '../../../asset/svgs/Menu'

const Header = () => {
  const [openNav, setOpenNav] = useState(false)

  const toggleNav = (newOpen) => {
    setOpenNav(newOpen)
  }

  return (
    <>
      <HeaderBg>
        <Box
          onClick={() => toggleNav(true)}
          sx={{
            cursor: 'pointer',
            position: 'absolute',
            top: '5px',
            left: '14px',
            display: {
              sm: 'block',
              lg: 'none',
            },
          }}
        >
          <Menu
            sx={{
              border: '2px solid red',
              width: '1.5em',
              height: '1.5em',
              color: '#006bce',
            }}
          ></Menu>
        </Box>
        {/* <Drawer
          open={openNav}
          onClose={() => toggleNav(false)}
          PaperProps={{
            sx: {
              width: '174px',
              '&::-webkit-scrollbar': {
                width: 0,
                height: 0,
              },
            },
          }}
        >
          <Aside toggleNav={toggleNav} />
        </Drawer> */}
      </HeaderBg>
    </>
  )
}

export default Header

const HeaderBg = styled(Box)({
  background: `url(${HeaderBgImg}) no-repeat center / cover`,
  padding: '78px 16px 90px 18px',
  '@media (min-width: 960px)': {
    padding: '68px 34px 149px 34px',
  },
  position: 'relative',
})
