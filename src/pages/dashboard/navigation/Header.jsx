import {
  Box,
  Button,
  Drawer,
  Fade,
  Menu,
  MenuItem,
} from '@mui/material'
import { useState } from 'react'

import Aside from './Aside'
import MenuIcon from '../../../asset/svgs/Menu'
import MailIcon from '../../../asset/svgs/header/MailIcon'
import NotificationIcon from '../../../asset/svgs/header/NotificationIcon'
import { useNavigate } from 'react-router-dom'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import { useLogoutUserMutation} from '../../../redux/api/authApi'
import { useGetUserDetailQuery } from '../../../redux/api/buildingApi'

const Header = () => {

  const {data} =useGetUserDetailQuery();
  const navigate = useNavigate()

  // open Menu
  const [anchorEl, setAnchorEl] = useState(null)
  const [logoutUser] = useLogoutUserMutation()

  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = async() => {
    setAnchorEl(null)

    const res = await logoutUser();

    if (res.data.success=== true) {

      navigate(`/login`)
    }
  }
 
  const profilePage = () => {


    navigate(`profile`)
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
                  src={data?.profilePic}
                  alt="profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
                {data?.firstName}
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
        </Box>
      </Box>
    </>
  )
}

export default Header
