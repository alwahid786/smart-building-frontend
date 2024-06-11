import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import MyLineChart from "./chart/MyLineChart";
import { EnergyUseCardSkeleton } from "../../../../../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../../features/loading/loadingSlice";

const EnergyUse = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <EnergyUseCardSkeleton />
      ) : (
        <Card variant="outlined" sx={{ maxWidth: "100%", maxHeight: 290 }}>
          <Box sx={{ p: { xs: 1, md: 2 }, height: 290 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: 14, md: 16 },
                  color: "rgba(17, 17, 17, 1)",
                  fontFamily: "'Poppins', sans-serif",
                }}
                component="div"
              >
                Energy use
              </Typography>
            </Stack>
            <Divider />
            <Box sx={{ alignItems: "left" }}>
              <MyLineChart />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              sx={{
                width: { xs: 250, md: 320 },
                height: 32,
                backgroundColor: "#F5F7FB",
                justifyContent: "space-between",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                "&::-webkit-scrollbar": {
                  width: 0,
                },
              }}
              p={{ xs: 1, md: 2 }}
            >
              <Typography
                component="div"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "4px",
                  fontSize: 12,
                  color: "#111111",
                  fontWeight: 400,
                }}
              >
                <Box
                  style={{
                    width: 15,
                    height: 5,
                    backgroundColor: "transparent",
                    marginRight: { xs: 2, md: 5 },
                    borderBottom: "3px dashed #884299",
                  }}
                ></Box>
                Wind
              </Typography>
              <Typography
                component="div"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "4px",
                  fontSize: 12,
                  color: "#111111",
                  fontWeight: 400,
                }}
              >
                <Box
                  style={{
                    width: 20,
                    height: 2,
                    backgroundColor: "skyblue",
                    marginRight: { xs: 0, md: 5 },
                    borderBottom: "3px solid #00C1D7",
                  }}
                ></Box>
                Solar
              </Typography>
              <Typography
                component="div"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "4px",
                  fontSize: 12,
                  color: "#111111",
                  fontWeight: 400,
                }}
              >
                <Box
                  style={{
                    width: 20,
                    height: 5,
                    backgroundColor: "transparent",
                    marginRight: { xs: 0, md: 5 },
                    borderBottom: "3px dashed #0C234D",
                  }}
                ></Box>
                Hydroelectric
              </Typography>
              <Typography
                component="div"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "4px",
                  fontSize: 12,
                  color: "#111111",
                  fontWeight: 400,
                }}
              >
                <Box
                  style={{
                    width: 20,
                    height: 2,
                    backgroundColor: "green",
                    marginRight: { xs: 0, md: 5 },
                    borderBottom: "3px solid #61CA94",
                  }}
                ></Box>
                Biomass
              </Typography>
            </Box>
          </Box>
        </Card>
      )}
    </>
  );
};

export default EnergyUse;
