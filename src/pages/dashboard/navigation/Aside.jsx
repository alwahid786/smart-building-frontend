import { Box, Stack, Typography, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ListIcon from '../../../asset/svgs/ListIcon';
import SettingIcon from '../../../asset/svgs/SettingIcon';
import RenovationIcon from '../../../asset/svgs/RenovationIcon';
import HomeIcon from '../../../asset/svgs/HomeIcon';
import GeneralIcon from '../../../asset/svgs/GeneralIcon';
import MapIcon from '../../../asset/svgs/MapIcon';
import LogoIcon from '../../../asset/svgs/LogoIcon';
import Menu from '../../../asset/svgs/Menu';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import PropTypes from 'prop-types';

const pages = [
  {
    label: 'Dashboard',
    icon: <ListIcon />,
    route: 'list',
  },
  {
    label: 'Building info',
    icon: <HomeIcon />,
    route: 'building-info',
  },
  {
    label: 'General',
    icon: <GeneralIcon />,
    route: 'general',
  },
  {
    label: 'Map',
    icon: <MapIcon />,
    route: 'map',
  },
  {
    label: 'Renovation',
    icon: <RenovationIcon />,
    route: 'renovation',
  },
  {
    label: 'Service',
    icon: <SettingIcon />,
    route: 'service',
  },
  {
    label: 'Sensors',
    icon: <PodcastsIcon />,
    route: 'sensors',
  },
];

const Aside = ({ toggleNav }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [showMenuAndLogo, setShowMenuAndLogo] = useState(false);
  const [isActivePage, setIsActivePage] = useState('list');
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const matchedPage = pages.find((page) => pathname.includes(page.route));
    if (matchedPage) {
      setIsActivePage(matchedPage.route);
    }
  }, [location.pathname]);

  const sideBarClose = () => {
    setIsSideBarOpen(false);
    setShowMenuAndLogo(true);
    toggleNav(false);
  };

  const handlePages = (page) => {
    setIsActivePage(page);
    if (page === 'home' && window.innerWidth <= 1199) {
      toggleNav(false);
    }
  };

  return (
    <>
      <Asidemain
        sx={{
          transform: isSideBarOpen ? 'translateX(0)' : 'translateX(-100%)',
          opacity: isSideBarOpen ? 1 : 0,
          width: isSideBarOpen ? '174px' : '0px',
          transition: 'transform 1s, opacity 1s, width 1s',
          backgroundImage:
            'linear-gradient(178.55deg, rgba(123, 66, 246) 2.95%, rgba(85, 16, 207) 84.68%)',
          height: '90vh',
          overflowY: 'auto',
          borderRadius: isSideBarOpen ? '12px' : '0px',
          padding: '16px 8px',
          marginRight: isSideBarOpen ? { xs: '0', sm: '1rem' } : '0',
        }}
      >
        <Stack justifyContent="space-between" sx={{ width: '100%' }}>
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

          <Box
            sx={{
              marginTop: { xs: '30px', md: '40px', lg: '50px' },
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            {pages.map((page, i) => (
              <Box
                component={Link}
                to={page.route}
                onClick={() => handlePages(page.route)}
                key={i}
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
                  backgroundColor: isActivePage === page.route ? '#ffffff70' : '#ffffff20',
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
            ))}
          </Box>
        </Stack>
      </Asidemain>

      {!isSideBarOpen && showMenuAndLogo && (
        <Box
          sx={{
            transform: isSideBarOpen ? 'translateX(-100%)' : 'translateX(0)',
            opacity: isSideBarOpen ? 0 : 1,
            position: 'absolute',
            top: '28px',
            left: '25px',
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            justifyContent: 'space-between',
            width: { sm: '174px', xs: '0' },
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
  );
};

Aside.propTypes = {
  toggleNav: PropTypes.func.isRequired,
};

export default Aside;

const Asidemain = styled(Box)({
  width: '174px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  borderRadius: '12px',
  padding: '16px 8px',
  '@media (max-width: 600px)': {
    position: 'absolute',
    height: '100%',
    zIndex: '10',
  },
});

const ImageContainer = styled(Box)({
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: 'white',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
});
