import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Greenbox from "../../../../asset/svgs/Greenbox";
import YellowBox from "../../../../asset/svgs/YellowBox";
import RedBox from "../../../../asset/svgs/RedBox";
import OrangeBox from "../../../../asset/svgs/OrangeBox";
import MapIconSmall from "../../../../asset/svgs/MapIconSmall";
import { Box, Typography, Button, styled } from "@mui/material";
import { BuildingStatusSkeleton } from "../../../../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../features/loading/loadingSlice";

const BuildingStatus = () => {
  const navigate = useNavigate();
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
        <BuildingStatusSkeleton />
      ) : (
        <Box
          sx={{
            flexGrow: 1,
            p: { xs: 1, md: 0 },
            display: "flex",
            marginTop: "2rem",
            marginBottom: { xs: 0, md: 2 },
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
              gap: { xs: 2, md: 4 },
              mb: { xs: 0, sm: 0 },
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
          <Button
            onClick={() => navigate("/dashboard/map")}
            variant="contained"
            startIcon={<MapIconSmall />}
            sx={{
              ml: { xs: 0, sm: "auto" },
              padding: "7px 20px",
              background: "rgba(123, 66, 246, 1) ",
              width: { xs: "100%", sm: "auto" },
              fontSize: { xs: "8px", sm: "10px", md: "14px" },
            }}
          >
            <span sx={{ fontWeight: "400", lineHeight: "28px" }}>
              Go to Map View
            </span>
          </Button>
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
