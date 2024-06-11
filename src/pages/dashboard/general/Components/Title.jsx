import React from "react";
import GeneralTtleIcon from "../../../../asset/svgs/GeneralTtleIcon";
import { Box, Avatar, Typography } from "@mui/material";

const Title = () => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", p: { xs: 0, md: 2 } }}>
        <GeneralTtleIcon />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mx: { xs: 0, md: 2 },
          }}
        >
          <Typography
            sx={{
              color: "rgba(123, 66, 246, 1)",
              fontsize: { xs: 14, md: 24 },
              fontWeight: "600",
            }}
          >
            General
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "gray" }}>
            Details all buildings statistic
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Title;
