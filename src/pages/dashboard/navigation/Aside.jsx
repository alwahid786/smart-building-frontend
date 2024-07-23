import { Box, Button, Stack, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import ListIcon from '../../../asset/svgs/ListIcon'

import SettingIcon from '../../../asset/svgs/SettingIcon'
import RenovationIcon from '../../../asset/svgs/RenovationIcon'

import HomeIcon from '../../../asset/svgs/HomeIcon'
import GeneralIcon from '../../../asset/svgs/GeneralIcon'
import MapIcon from '../../../asset/svgs/MapIcon'
import LogoIcon from '../../../asset/svgs/LogoIcon'
import Menu from '../../../asset/svgs/Menu'
import PodcastsIcon from '@mui/icons-material/Podcasts'

const Aside = ({ toggleNav }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)
  const [showMenuAndLogo, setShowMenuAndLogo] = useState(false)
  const [openPage, setOpenPage] = useState(null)
  const [isActivePage, setIsActivePage] = useState('list')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const sideBarClose = () => {
    setIsSideBarOpen(false)
    setShowMenuAndLogo(true)
    // Close Drawer
    toggleNav(false)
    // console.log('clicked')
  }
  const handlePages = (page) => {
    setOpenPage(openPage === page ? null : page)
    setIsActivePage(page)
  }

  const [selectedPage, setSelectedPage] = useState('')
  useEffect(() => {
    const pathname = location.pathname
    const matchedPage = pages.find((page) => pathname.includes(page.route))
    if (matchedPage) {
      setSelectedPage(matchedPage.label)
    }
  }, [location.pathname])

  const handleLogout = () => {
    navigate('/login')
  }
  const pages = [
    {
      label: 'Dashboard',
      icon: (
        <ListIcon
          size={{ xs: 24, sm: 32, md: 48, lg: 64, xl: 80 }}
          isActive={selectedPage === 'List'}
        />
      ),
      route: 'list',
    },
    {
      label: 'Building info',
      icon: (
        <HomeIcon
          size={{ xs: 24, sm: 32, md: 48, lg: 64, xl: 80 }}
          isActive={selectedPage === 'Building info'}
        />
      ),
      route: 'building-info',
    },
    {
      label: 'General',
      icon: (
        <GeneralIcon
          size={{ xs: 24, sm: 32, md: 48, lg: 64, xl: 80 }}
          isActive={selectedPage === 'General'}
        />
      ),
      route: 'general',
    },
    {
      label: 'Map',
      icon: (
        <MapIcon
          size={{ xs: 24, sm: 32, md: 48, lg: 64, xl: 80 }}
          isActive={selectedPage === 'Map'}
        />
      ),
      route: 'map',
    },
    {
      label: 'Renovation',
      icon: (
        <RenovationIcon
          size={{ xs: 24, sm: 32, md: 48, lg: 64, xl: 80 }}
          isActive={selectedPage === 'Renovation'}
        />
      ),
      route: 'renovation',
    },
    // {
    //   label: "Renovation",
    //   route: "account",
    // },
    {
      label: 'Service',
      icon: (
        <SettingIcon
          size={{ xs: 24, sm: 32, md: 48, lg: 64, xl: 80 }}
          isActive={selectedPage === 'Service'}
        />
      ),
      route: 'service',
    },
    {
      label: 'Sensors',
      icon: (
        <PodcastsIcon
          size={{ xs: 24, sm: 32, md: 48, lg: 64, xl: 80 }}
          isActive={selectedPage === 'Service'}
        />
      ),
      route: 'sensors',
    },
  ]

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600) // Define your small screen breakpoint here

  // Function to handle window resize and update state accordingly
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 600) // Adjust breakpoint as needed
  }

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <Asidemain
        sx={{
          transform: isSideBarOpen ? 'translateX(0)' : 'translateX(-100%)',
          opacity: isSideBarOpen ? 1 : 0,
          width: isSideBarOpen ? '174px' : '0px',
          transition:
            'transform cubic-bezier(0.19, 1, 0.22, 1) 1s, opacity cubic-bezier(0.19, 1, 0.22, 1) 1s, width cubic-bezier(0.19, 1, 0.22, 1) 1s',
          backgroundImage:
            'linear-gradient(178.55deg, rgba(123, 66, 246 ) 2.95%, rgba(85, 16, 207) 84.68%)',
          // height: { sm: '65%', xs: '100%' },
          height: '90vh',
          overflowY: 'auto',
          borderRadius: isSideBarOpen ? '12px' : '0px',
          padding: '16px 8px',
          marginRight: isSideBarOpen ? { xs: '0', sm: '1rem' } : '0',
        }}
      >
        <Stack
          justifyContent="space-between"
          sx={{
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <ImageContainer>
                <LogoIcon />
              </ImageContainer>
            </Box>
            <Box onClick={sideBarClose} sx={{ cursor: 'pointer' }}>
              <Menu />
            </Box>
          </Box>

          {/* Links */}
          <Box
            sx={{
              marginTop: {
                xs: '30px',
                md: '40px',
                lg: '50px',
              },
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            {pages.map((page, i) => (
              <React.Fragment key={i}>
                <Box
                  component={Link}
                  to={page.route}
                  onClick={() => {
                    handlePages(page.route)
                    setIsActivePage(page.route)
                    if (page.route === 'home' && window.innerWidth <= 1199) {
                      toggleNav(false)
                    }
                  }}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    padding: '9px 16px',
                    marginBottom: '20px',
                    ':hover': {
                      backgroundColor: '#ffffff70',
                    },
                    backgroundColor:
                      isActivePage === page.route ? '#ffffff70' : '#ffffff20',
                  }}
                >
                  {page.icon}
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: '12px',
                      fontWeight: '600',
                      lineHeight: '16.34px',
                    }}
                  >
                    {page.label}
                  </Typography>
                </Box>
              </React.Fragment>
            ))}
          </Box>
        </Stack>
      </Asidemain>

      {!isSideBarOpen && showMenuAndLogo && (
        <Box
          sx={{
            transform: isSideBarOpen ? 'translateX(-100%)' : 'translateX(0)',
            opacity: isSideBarOpen ? 0 : 1,
            // transition: 'transform 0.5s ease, opacity 0.5s ease',
            position: 'absolute',
            top: '28px',
            left: '25px',
            display: {
              xs: 'none',
              sm: 'flex',
            },
            alignItems: 'center',
            justifyContent: 'space-between',
            width: {
              sm: '174px',
              xs: '0',
            },
          }}
        >
          <Box>
            <ImageContainer>
              <LogoIcon />
            </ImageContainer>
          </Box>
          <Box
            onClick={() => setIsSideBarOpen(true)}
            sx={{ cursor: 'pointer', marginLeft: '8px' }}
          >
            <Menu />
          </Box>
        </Box>
      )}
    </>
  )
}

export default Aside

const Asidemain = styled(Box)({
  width: '174px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  position: 'sticky',
  top: '10px',
  left: '0',

  // gap: '3rem',
  // background: 'linear-gradient(180deg, #ffffff 0%, #004A8B 100%)',
  // border: '2px solid red',
  // '@media (min-width:991px)': {
  //   padding: '28px 14px 40px',
  // },
  // '@media (min-height:800px)': {
  //   height: '100%',
  // },
})

const ImageContainer = styled(Box)({
  maxWidth: '100%',
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
