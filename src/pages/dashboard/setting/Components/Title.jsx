import React from "react";
import SettingTitleIcon from "../../../../asset/svgs/SettingTitleIcon";
import { Box, Typography } from "@mui/material";

const Title = () => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <SettingTitleIcon />
        <Box sx={{ display: "flex", flexDirection: "column", mx: 2 }}>
          <Typography variant="h6" sx={{ color: "rgba(123, 66, 246, 1)" }}>
            Service
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "gray" }}>
            General statistic
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Title;
