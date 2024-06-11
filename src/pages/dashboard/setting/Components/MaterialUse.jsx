import React from "react";
import { Box, Typography, Grid, LinearProgress, styled } from "@mui/material";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const MaterialUse = () => {
  const categories = [
    { name: "Roof", value: 70 },
    { name: "Chimney", value: 50 },
    { name: "Window", value: 85 },
    { name: "Elevation", value: 25 },
    { name: "Electricity", value: 35 },
    { name: "Sewage system", value: 65 },
  ];
  return (
    <>
      {" "}
      <Card variant="outlined" sx={{ maxWidth: "100%", maxHeight: 290 }}>
        <Box sx={{ p: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              gutterBottom
              sx={{
                fontWeight: 600,
                fontSize: 16,
                color: "rgba(17, 17, 17, 1)",
                fontFamily: "'Poppins', sans-serif",
              }}
              component="div"
            >
              Material use
            </Typography>
          </Stack>
          <Divider />
          <Box sx={{ width: "100%", mt: 1 }}>
            {categories.map((category, index) => (
              <Stack
                key={index}
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ mb: 1 }}
              >
                <ProgressTitle
                  variant="body1"
                  sx={{ minWidth: 100, flexShrink: 0 }}
                >
                  {category.name}
                </ProgressTitle>
                <Box sx={{ width: "100%", position: "relative" }}>
                  <LinearProgress
                    variant="determinate"
                    value={category.value}
                    sx={{
                      height: 4,
                      borderRadius: 5,
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "rgba(123, 66, 246, 1)",
                      },
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      position: "absolute",
                      left: `calc(${category.value}% - 24px)`,
                      top: "-14px",
                      // backgroundColor: 'white',
                      color: "rgba(12, 35, 77, 1)",
                      fontWeight: 400,
                      fontSize: 12,
                      padding: "0 13px",
                      minWidth: "24px",
                      textAlign: "center",
                      borderRadius: "4px",
                      transition: "left 0.2s ease-out",
                    }}
                  >
                    {category.value}%
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Box>
        </Box>
      </Card>
    </>
  );
};
const ProgressTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 14,
  color: "rgba(17, 17, 17, 0.6)",
  fontFamily: "'Poppins', sans-serif",
}));
export default MaterialUse;
