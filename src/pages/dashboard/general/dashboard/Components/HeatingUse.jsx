import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, styled } from "@mui/material";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import HeatingUseGraph from "../../../../../asset/svgs/HeatingUseGraph";
import { HeatingUseSkeleton } from "../../../../../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../../features/loading/loadingSlice";

const HeatingUse = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);
  const data = [
    { percentage: "80%", text: "Central", color: "#FF0000" },
    { percentage: "30%", text: "Gas", color: "#00FF00" },
    { percentage: "75%", text: "Geothermal", color: "#0000FF" },
  ];
  return (
    <>
      {isLoading ? (
        <HeatingUseSkeleton />
      ) : (
        <Card variant="outlined" sx={{ maxWidth: "100%", maxHeight: 290 }}>
          <Box sx={{ p: { xs: 1, md: 2 } }}>
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
                }}
              >
                Heating use
              </Typography>
            </Stack>
            <Divider />
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1} sx={{ alignItems: "center" }}>
                <Grid item xs={6} sx={{ alignItems: "start" }}>
                  <HeatingUseGraph />
                </Grid>
                <Grid item xs={6}>
                  {data.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 2,
                      }}
                    >
                      <CustomText
                        sx={{ fontSize: { xs: 14, md: 16 }, paddingRight: 1 }}
                      >
                        {item.percentage}
                      </CustomText>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ bgcolor: item.color }}
                      />
                      <CustomText
                        sx={{ fontSize: { xs: 14, md: 16 }, paddingLeft: 1 }}
                      >
                        {item.text}
                      </CustomText>
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Card>
      )}
    </>
  );
};
const CustomText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 16,
  color: "rgba(17, 17, 17, 0.6)",
  fontFamily: "'Poppins', sans-serif",
}));
export default HeatingUse;
