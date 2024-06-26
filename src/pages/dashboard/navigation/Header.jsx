import {
  Badge,
  Box,
  Button,
  Drawer,
  Fade,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material'
import { useState } from 'react'

import Aside from './Aside'
import MenuIcon from '../../../asset/svgs/Menu'
import MailIcon from '../../../asset/svgs/header/MailIcon'
import NotificationIcon from '../../../asset/svgs/header/NotificationIcon'
import { Link, useNavigate } from 'react-router-dom'
import { Height } from '@mui/icons-material'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import profile from '../../../asset/Images/navbar/Ellipse.png'
import rectProfile from '../../../asset/Images/list/Rectangle.png'
const Header = () => {
  // open Menu
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  //  ---------
  const navigate = useNavigate()
  const profilePage = () => {
    navigate('profile')
    // setAnchorEl(null)
    // handleClose()
  }

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
          {/* <Link to="profile"> */}
          <Button
            id="fade-menu"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            variant="contained"
            sx={{
              background: '#ffffff40',
              '&:hover': { backgroundColor: 'inherit', boxShadow: 'none' },
              borderRadius: '10px',
              boxShadow: 'none',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
              }}
            >
              {/* <Badge color="secondary" badgeContent="M" showZero> */}
              <Box
                sx={{
                  // border: '2px solid red',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={profile}
                  alt="profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              FName
              <KeyboardArrowDownRoundedIcon />
            </Box>
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            sx={{
              '& .MuiPaper-root': {
                borderRadius: '4px',
                boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
                marginTop: '7px',
                width: '9rem',
              },
            }}
          >
            <MenuItem
              sx={{
                fontSize: '14px',
                fontWeight: '500',
              }}
              onClick={profilePage}
            >
              My Profile
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{ fontSize: '14px', fontWeight: '500' }}
            >
              Sign out
            </MenuItem>
          </Menu>
          {/* </Link> */}
        </Box>
      </Box>
    </>
  )
}

export default Header
