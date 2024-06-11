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

const Aside = ({ toggleNav }) => {
  const [openPage, setOpenPage] = useState(null)
  const [isActivePage, setIsActivePage] = useState('home')
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
  ]

  return (
    <>
      <Asidemain
        sx={{
          backgroundImage:
            'linear-gradient(180deg, #7B42F680 0%, #5510CF80 100%)',
          height: '100vh',
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
            <Box>
              <Menu />
            </Box>
          </Box>
          {/* {/ Links  /} */}
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
                    handlePages(page.page)
                    setIsActivePage(page.page)
                    page.page === 'home' &&
                      window.innerWidth <= 1199 &&
                      toggleNav(false)
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
                    background: '#ffffff30',
                    // backgroundColor:
                    //   isActivePage === page.page ? '#ffffff' : 'transparent',
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
                      // color: isActivePage === page.page ? '#000' : '#fff',
                    }}
                  >
                    {page.label}
                  </Typography>
                  {/* {page.subPages &&
                    (openPage === page.page ? (
                      <ChevronIconUp />
                    ) : (
                      <ChevronIcon isActivePage={isActivePage === page.page} />
                    ))} */}
                </Box>
                {/* {page.subPages &&
                  page.subPages.map((subpage) => (
                    <Collapse
                      key={subpage.title}
                      in={openPage === page.page}
                      timeout="auto"
                      unmountOnExit
                      sx={{
                        paddingLeft: '15px',
                      }}
                    >
                      <Box
                        component={Link}
                        to={subpage.route}
                        onClick={() => {
                          setIsActivePage(subpage.page)
                          window.innerWidth <= 1199 && toggleNav(false)
                        }}
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          borderRadius: '8px',
                          padding: '9px 16px',
                          width: '100%',
                          backgroundColor:
                            isActivePage === subpage.page
                              ? '#fff'
                              : 'transparent',
                        }}
                      >
                        {isActivePage === subpage.page && subpage.icon}
                        <Typography
                          variant="h2"
                          sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: '20px',
                            fontWeight: '400',
                            lineHeight: '30px',
                            color:
                              isActivePage === subpage.page ? '#000' : '#fff',
                          }}
                        >
                          {subpage.title}
                        </Typography>
                      </Box>
                    </Collapse>
                  ))} */}
              </React.Fragment>
            ))}
          </Box>
        </Stack>
      </Asidemain>
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
  padding: '16px 8px',
  gap: '3rem',
  // background: 'linear-gradient(180deg, #ffffff 0%, #004A8B 100%)',
  // border: '2px solid red',
  '@media (min-width:991px)': {
    padding: '28px 14px 40px',
  },
  '@media (min-height:800px)': {
    height: '100%',
  },
})

const ImageContainer = styled(Box)({
  maxWidth: '100%',
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
