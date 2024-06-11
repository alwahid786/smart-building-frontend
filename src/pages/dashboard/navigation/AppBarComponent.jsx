import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import MailIcon from "../../../asset/svgs/MailIcon";
import NotificationIcon from "../../../asset/svgs/NotificationIcon";
import DownwordArrowIcon from "../../../asset/svgs/DownwordArrowIcon";
import LineIcon from "../../../asset/svgs/LineIcon";
import EllipseImage from "../../../asset/Images/navbar/Ellipse.png";

const AppBarComponent = ({
  handleProfileMenuOpen,
  mobileMenuId,
  menuId,
  handleMobileMenuOpen,
  renderMobileMenu,
  renderMenu,
  SelectedComponent,
  drawerWidth,
}) => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: `calc(100% - ${drawerWidth}px)`,
          height: "80px !important",
          ml: `${drawerWidth}px`,
          bgcolor: "white",
          boxShadow:
            "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 1px 30px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Toolbar sx={{ height: "80px" }}>
          <Box sx={{ marginLeft: "10px" }}>
            <Typography variant="h6" noWrap component="div">
              {SelectedComponent}
            </Typography>
            {/* <Typography
        variant="body1"
        noWrap
        component="div"
        sx={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '28px',
            textAlign: 'left',
            color:' #FFFFFF99',
        }}
    >
        {subtitle}
    </Typography> */}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Typography component="span" sx={{ color: "white", mx: 0.5 }}>
              <LineIcon />
            </Typography>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              {/* <Badge badgeContent={4} color="error">
        </Badge> */}
              <MailIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              {/* <Badge badgeContent={17} color="error">
        </Badge> */}
              <NotificationIcon />
            </IconButton>
            <Typography component="span" sx={{ color: "white", mx: 0.5 }}>
              {" "}
              <LineIcon />
            </Typography>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar alt="Remy Sharp" src={EllipseImage} />
              <DownwordArrowIcon /> {/* Add the down arrow icon */}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              sx={{ backgroundColor: "#884299" }}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
};

export default AppBarComponent;
