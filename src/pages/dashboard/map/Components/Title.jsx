import React from "react";
import MapTitleIcon from "../../../../asset/svgs/MapTitleIcon";
import { Box, Typography } from "@mui/material";

const Title = () => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <MapTitleIcon />
        <Box sx={{ display: "flex", flexDirection: "column", mx: 1 }}>
          <Typography
            sx={{
              color: "rgba(123, 66, 246, 1)",
              fontWeight: "bold",
              fontSize: "1.25rem",
            }}
          >
            Map
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Title;
