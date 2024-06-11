import React from "react";
import ElectricityIcon from "../../../../asset/svgs/ElectricityIcon";
import GasIcon from "../../../../asset/svgs/GasIcon";
import WaterICon from "../../../../asset/svgs/WaterIcon";
import DownArrowIcon from "../../../../asset/svgs/DownArrowIcon";
import { Box, Typography, LinearProgress, styled } from "@mui/material";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import MediaUseLineGraph from "../../../../asset/svgs/MediaUseLineGraph";
import Stack from "@mui/material/Stack";

const MediaUse = () => {
  return (
    <Card variant="outlined" sx={{ maxWidth: "100%", maxHeight: "100%" }}>
      <Box sx={{ p: 2 }}>
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
          Media Use
        </Typography>
        <Divider />
        <Box sx={{ mt: 2 }}>
          {[
            {
              Icon: ElectricityIcon,
              labelLeft: "Electricity",
              labelRight: "25Mwh",
              value: 80,
            },
            {
              Icon: GasIcon,
              labelLeft: "Gas",
              labelRight: "25m²",
              value: 30,
            },
            {
              Icon: WaterICon,
              labelLeft: "Water",
              labelRight: "50m²",
              value: 75,
            },
          ].map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <CenteredIcon>
                  <item.Icon />
                </CenteredIcon>
                <Box sx={{ width: "100%" }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ProgressTitle variant="body2">
                      {item.labelLeft}
                    </ProgressTitle>
                    <Typography variant="body2">{item.labelRight}</Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={item.value}
                    sx={{
                      height: 4,
                      borderRadius: 5,
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "rgba(123, 66, 246, 1)",
                      },
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    mr: 1,
                    fontWeight: "400",
                    fontSize: 14,
                    color:
                      item.value < 50
                        ? "rgba(250, 61, 69, 1)"
                        : "rgba(97, 202, 148, 1)",
                  }}
                >
                  {item.value}%
                </Typography>
                <DownArrowIcon
                  color={
                    item.value < 50
                      ? "rgba(250, 61, 69, 1)"
                      : "rgba(97, 202, 148, 1)"
                  }
                />
              </Stack>
            </Box>
          ))}
          <Box
            sx={{
              mt: 4,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MediaUseLineGraph />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

const CenteredIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

const ProgressTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 12,
  color: "rgba(17, 17, 17, 0.2)",
  fontFamily: "'Poppins', sans-serif",
}));

export default MediaUse;
