import { Box, Button, Drawer, Typography, styled } from '@mui/material'
import { useState } from 'react'
import HeaderBgImg from '../../../asset/Images/main/HomeBg.png'
// import SaudiLogo from '../../../assets/images/saudi-arabia-logo.png'
import { MenuRounded } from '@mui/icons-material'

import Aside from './Aside'
import MenuIcon from '../../../asset/svgs/Menu'
import MailIcon from '../../../asset/svgs/header/MailIcon'
import NotificationIcon from '../../../asset/svgs/header/NotificationIcon'
import { Link } from 'react-router-dom'

const Header = () => {
  const [openNav, setOpenNav] = useState(false)

  const toggleNav = (newOpen) => {
    setOpenNav(newOpen)
  }

  return (
    <>
      {/* <HeaderBg> */}
      <Box
        onClick={() => toggleNav(true)}
        sx={{
          cursor: 'pointer',
          position: 'absolute',

          top: '5px',
          left: '14px',
          display: {
            xs: 'block',
            sm: 'none',
          },
        }}
      >
        <MenuIcon />
      </Box>

      <Drawer
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
        <Aside toggleNav={toggleNav} sx={{ xs: 'block' }} />
      </Drawer>
      {/* </HeaderBg> */}

      <Box sx={{ padding: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            gap: '21px',
          }}
        >
          <MailIcon />
          <NotificationIcon />
          <Link to="profile">
            <Button
              variant="contained"
              sx={{
                background: '#ffffff50',
                '&:hover': { background: 'inherit' },
              }}
            >
              Profile
            </Button>
          </Link>
        </Box>
      </Box>
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
