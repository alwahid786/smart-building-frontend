import React from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Lightboxsmall from "../../../asset/svgs/Lightboxsmall";

const DrawerComponent = ({
  pages,
  setSelectedPage,
  isActive,
  setIsActive,
  drawerWidth,
  selectedPage,
}) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        display: "flex",
        // flexDirection: 'column-reverse',
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "white",
        },
      }}
    >
      <Box
        sx={{
          marginLeft: { xs: 0.5, sx: 0, md: 5, lg: 5 },
          marginTop: "10px",
        }}
      >
        <Lightboxsmall />
      </Box>
      <Divider
        sx={{
          width: "70%",
          mx: "auto",
        }}
      />
      <Box
        sx={{
          height: "100vh !important",
          overflow: "hidden",
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: {
              xs: "flex-start",
              sm: "flex-start",
              md: "center",
            },
            color: "white",
          }}
        >
          {pages.map((page, index) => (
            <ListItem
              button
              component={Link}
              to={`${page.route}`}
              key={page.label}
              onClick={() => {
                setSelectedPage(page.label);
                setIsActive(!isActive);
              }}
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: { xs: "space-between", sm: "center" },
                alignItems: "center",
                padding: {
                  xs: "1rem",
                  sm: index === 4 ? "unset" : "0px",
                  md: index === 4 ? "unset" : "0px",
                  lg: index === 4 ? "unset" : "0px",
                },

                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { xs: "space-between", sm: "center" },
                  alignItems: "center",
                  mt: {
                    xs: index !== 0 ? "0.1rem" : 0,
                    sm: index !== 0 ? "3rem" : 0,
                    md: index !== 0 ? "3rem" : 0,
                    lg: index !== 0 ? "1rem" : 0,
                  },
                  background:
                    selectedPage === page.icon
                      ? "linear-gradient(180deg, #84DFFF 0%, #0094E3 100%)"
                      : "none",
                  "& svg": {
                    width: { xs: 26, sm: 24, md: 28, lg: 32, xl: 36 },
                    height: { xs: 26, sm: 24, md: 28, lg: 32, xl: 36 },
                  },
                }}
                isActive={selectedPage === page.label}
              >
                {page.icon}
                <ListItemText
                  primary={
                    page.label === "Building info" ? (
                      <Typography
                        component="div"
                        sx={{
                          fontSize: "14px",
                          color:
                            selectedPage === "Building info"
                              ? "transparent"
                              : "gray",
                          background:
                            selectedPage === "Building info"
                              ? "rgba(123, 66, 246, 1)"
                              : "none",
                          "-webkit-background-clip":
                            selectedPage === "Building info" ? "text" : "none",
                          "background-clip":
                            selectedPage === "Building info" ? "text" : "none",
                          display: {
                            xs: "none",
                            sm: "none",
                            md: "none",
                            lg: "block",
                          },
                        }}
                      >
                        Building
                        <br />
                        <span style={{ marginLeft: "15px" }}>Info</span>
                      </Typography>
                    ) : (
                      <Typography sx={{ fontSize: "14px" }}>
                        {page.label}
                      </Typography>
                    )
                  }
                  primaryTypographyProps={{
                    sx: {
                      color:
                        selectedPage === page.label ? "transparent" : "gray",
                      background:
                        selectedPage === page.label
                          ? "rgba(123, 66, 246, 1)"
                          : "none",
                      "-webkit-background-clip":
                        selectedPage === page.label ? "text" : "none",
                      "background-clip":
                        selectedPage === page.label ? "text" : "none",
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "block",
                      },
                    },
                  }}
                />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box>
      {/* <Toolbar /> */}
    </Drawer>
  );
};

export default DrawerComponent;
