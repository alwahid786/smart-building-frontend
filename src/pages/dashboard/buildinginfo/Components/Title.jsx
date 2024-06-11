import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import Elispe2 from "../../../../asset/Images/navbar/Ellipse 2.png";
const Title = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: { xs: 1, sm: 2, md: 3 },
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Avatar
        sx={{
          width: { xs: 36, sm: 36, md: 56 },
          height: { xs: 36, sm: 36, md: 56 },
          marginRight: { sm: 1, md: 1 },
        }}
        src={Elispe2}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "rgba(123, 66, 246, 1)",
            fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem" },
          }}
        >
          Building Info
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: "black",
            display: { xs: "none", sm: "none", md: "block" },
            // fontSize: { xs: '1rem', sm: '0.5rem', }
          }}
        >
          Details <span style={{ margin: "0 4px" }}>/</span>{" "}
          <span style={{ color: "gray" }}>Building Details</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Title;
