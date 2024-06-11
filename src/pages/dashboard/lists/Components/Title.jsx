import React from "react";
import { Typography, Box } from "@mui/material";

const Title = () => {
  return (
    <Box sx={{ marginLeft: { xs: "5px", sm: "10px", md: "15px" } }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontFamily: "Poppins",
          fontSize: {
            xs: "18px",
            sm: "16px",
            md: "20px",
            lg: "24px",
            xl: "24px",
          },
          fontWeight: 600,
          lineHeight: { xs: "24px", sm: "16px", md: "24px" },
          color: "rgba(123, 66, 246, 1)",
          textAlign: "left",
        }}
      >
        Your Building
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{
          fontFamily: "Poppins",
          fontSize: {
            xs: "12px",
            sm: "10px",
            md: "12px",
            lg: "16px",
            xl: "16px",
          },
          fontWeight: 400,
          lineHeight: { xs: "20px", sm: "22px", md: "24px" },
          textAlign: "left",
          color: "rgba(17, 17, 17, 0.6)",
        }}
      >
        List of buildings
      </Typography>
    </Box>
  );
};

export default Title;
