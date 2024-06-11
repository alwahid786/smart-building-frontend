import React, { useState, useEffect } from "react";
import { Toolbar, ListItemIcon, Box } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AppBarComponent from "./navigation/AppBarComponent";
import DrawerComponent from "./navigation/DrawerComponent";
import HomeIcon from "../../asset/svgs/HomeIcon";
import GeneralIcon from "../../asset/svgs/GeneralIcon";
import MapIcon from "../../asset/svgs/MapIcon";
import ListIcon from "../../asset/svgs/ListIcon";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import { useMediaQuery, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MailIcon from "../../asset/svgs/MailIcon";
import NotificationIcon from "./../../asset/svgs/NotificationIcon";
import SettingIcon from "./../../asset/svgs/SettingIcon";
import ListTitle from "./lists/Components/Title";
import InfoTitle from "./buildinginfo/Components/Title";
import GeneralTitle from "./general/Components/Title";
import MApTitle from "./map/Components/Title";
import SettingTitle from "./setting/Components/Title";
import RenovationTitle from "./renovation/Components/Title";
import RenovationIcon from "./../../asset/svgs/RenovationIcon";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import ProfileTitle from "../profile/Title";
const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(() => {
    const pathname = location.pathname;
    const matchedPage = pages.find((page) => pathname.includes(page.route));
    if (matchedPage) {
      setSelectedPage(matchedPage.label);
    }
  }, [location.pathname]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleProfileClick = () => {
    handleMenuClose();
    setAnchorEl(null);
    setSelectedPage("");
    navigate("/dashboard/profile");
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleProfileClick}>
        <ListItemIcon>
          <ProfileIcon />
        </ListItemIcon>
        Profile
      </MenuItem>
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          {/* <Badge badgeContent={4} color="error">
          </Badge> */}
          <MailIcon />
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          {/* <Badge badgeContent={17} color="error">
          </Badge> */}
          <NotificationIcon />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(
    theme.breakpoints.up("sm") && theme.breakpoints.down("md")
  );
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  let drawerWidth;
  if (isXs) {
    drawerWidth = 60;
  } else if (isSm) {
    drawerWidth = 55;
  } else if (isMd) {
    drawerWidth = 120;
  }

  switch (drawerWidth) {
    case isXs:
      drawerWidth = 60;
      break;

    case isSm:
      drawerWidth = 55;
      break;

    default:
      drawerWidth = 120;
      break;
  }
  // const drawerWidth = 120;

  const pages = [
    {
      label: "List",
      icon: (
        <ListIcon
          size={{ xs: 24, sm: 32, md: 48, lg: 64, xl: 80 }}
          isActive={selectedPage === "List"}
        />
      ),
      route: "list",
    },
    {
      label: "Building info",
      icon: (
        <HomeIcon
          size={{ xs: 24, sm: 32, md: 48, lg: 64, xl: 80 }}
          isActive={selectedPage === "Building info"}
        />
      ),
      route: "building-info",
    },
    {
      label: "General",
      icon: (
        <GeneralIcon
          size={{ xs: 24, sm: 32, md: 48, lg: 64, xl: 80 }}
          isActive={selectedPage === "General"}
        />
      ),
      route: "general",
    },
    {
      label: "Map",
      icon: (
        <MapIcon
          size={{ xs: 24, sm: 32, md: 48, lg: 64, xl: 80 }}
          isActive={selectedPage === "Map"}
        />
      ),
      route: "map",
    },
    {
      label: "Renovation",
      icon: (
        <RenovationIcon
          size={{ xs: 24, sm: 32, md: 48, lg: 64, xl: 80 }}
          isActive={selectedPage === "Renovation"}
        />
      ),
      route: "renovation",
    },
    // {
    //   label: "Renovation",
    //   route: "account",
    // },
    {
      label: "Service",
      icon: (
        <SettingIcon
          size={{ xs: 24, sm: 32, md: 48, lg: 64, xl: 80 }}
          isActive={selectedPage === "Service"}
        />
      ),
      route: "service",
    },
  ];

  const componentsMap = {
    List: <ListTitle />,
    "Building info": <InfoTitle />,
    General: <GeneralTitle />,
    Map: <MApTitle />,
    Renovation: <RenovationTitle />,
    Service: <SettingTitle />,
  };

  const SelectedComponent = componentsMap[selectedPage] || <ProfileTitle />;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBarComponent
          handleProfileMenuOpen={handleProfileMenuOpen}
          mobileMenuId="primary-search-account-menu-mobile"
          menuId={menuId}
          handleMobileMenuOpen={handleMobileMenuOpen}
          handleMenuClose={handleMenuClose}
          anchorEl={anchorEl}
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          isMenuOpen={isMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
          SelectedComponent={SelectedComponent}
          drawerWidth={drawerWidth}
          renderMobileMenu={renderMobileMenu}
          renderMenu={renderMenu}
        />
        <DrawerComponent
          pages={pages}
          setSelectedPage={setSelectedPage}
          isActive={isActive}
          setIsActive={setIsActive}
          drawerWidth={drawerWidth}
          selectedPage={selectedPage}
        />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 0, width: `calc(100% - ${drawerWidth}px)` }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
