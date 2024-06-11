import React, { useState, useEffect } from "react";
import Greenbox from "../../../../../asset/svgs/Greenbox";
import YellowBox from "../../../../../asset/svgs/YellowBox";
import RedBox from "../../../../../asset/svgs/RedBox";
import OrangeBox from "../../../../../asset/svgs/OrangeBox";
import { Box, Typography, styled } from "@mui/material";
import { BuildingInfoSkeleton } from "../../../../../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../../features/loading/loadingSlice";

const BuildingStatus = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);
  return (
    <>
      {" "}
      {isLoading ? (
        <BuildingInfoSkeleton />
      ) : (
        <Box
          sx={{
            flexGrow: 1,
            p: { xs: 0, md: 1 },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: { xs: 1, md: 4 },
          }}
        >
          <Typography
            sx={{
              whiteSpace: "nowrap",
              fontWeight: "400",
              color: "rgba(17, 17, 17, 0.8)",
              mb: { xs: 0, sm: 0 },
              fontSize: { xs: "16px", sm: "10px", md: "12px", lg: "16px" },
            }}
          >
            You have <strong>13</strong> buildings:
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: { xs: "row", sm: "row" },
              gap: { xs: 1, md: 4 },
              mb: { xs: 2, sm: 0 },
              alignItems: { xs: "start", md: "center" },
              fontSize: { xs: "8px", sm: "10px", md: "12px", lg: "14px" },
            }}
          >
            <StatusBox>
              <Greenbox />
              <CustomText>Good: 9</CustomText>
            </StatusBox>
            <StatusBox>
              <YellowBox />
              <Typography>Need inspection: 1</Typography>
            </StatusBox>
            <StatusBox>
              <OrangeBox />
              <CustomText>Need action: 1</CustomText>
            </StatusBox>
            <StatusBox>
              <RedBox />
              <CustomText>Bad: 2</CustomText>
            </StatusBox>
          </Box>
        </Box>
      )}
    </>
  );
};

export default BuildingStatus;
const CustomText = styled(Typography)(({ theme }) => ({
  fontWeight: { xs: 400, md: 600 },
  FontSize: { xs: 12, md: 14 },
  color: "rgba(17, 17, 17, 0.8)",
}));
const StatusBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 6,
  flexWrap: "wrap",
  alignItems: "center",
}));
