import { Box, Button, Drawer } from '@mui/material'
import { useState } from 'react'

import Aside from './Aside'
import MenuIcon from '../../../asset/svgs/Menu'
import MailIcon from '../../../asset/svgs/header/MailIcon'
import NotificationIcon from '../../../asset/svgs/header/NotificationIcon'
import { Link } from 'react-router-dom'
import { Height } from '@mui/icons-material'

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
          top: '38px',
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
        sx={{
          width: '174px',
        }}
      >
        <Aside toggleNav={toggleNav} />
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
