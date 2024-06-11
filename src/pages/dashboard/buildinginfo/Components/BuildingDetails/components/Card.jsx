import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  styled,
} from "@mui/material";
import Img from "../../../../../../asset/Images/list/Rectangle.png";
import CardFavoriteIcon from "../../../../../../asset/svgs/CardFavoriteIcon";
import Map from "../../../../../../asset/svgs/buildingdetails/Map";
import Mail from "../../../../../../asset/svgs/buildingdetails/Mail";
import Electric from "../../../../../../asset/svgs/buildingdetails/smartindicator/Electric";
import Boxes from "../../../../../../asset/svgs/buildingdetails/smartindicator/Boxes";
import Battery from "../../../../../../asset/svgs/buildingdetails/smartindicator/Battery";
import Setting from "../../../../../../asset/svgs/buildingdetails/smartindicator/Setting";
import { BuildingCardSkeleton } from "../../../../../../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../../../features/loading/loadingSlice";

const BuildingCard = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <BuildingCardSkeleton />
      ) : (
        <Card
          sx={{
            Width: "fit-content !important",
            // height: 430,
            position: "relative",
            mb: 2,
            transition: "border-bottom 0.1s",
            "&:hover": {
              borderBottom: "2px solid rgba(123, 66, 246, 1)",
              "& .imageEffect": {
                transform: "scale(1.1)",
              },
            },
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={Img}
            alt="Featured Image"
            className="imageEffect"
            sx={{
              width: "100%",
              objectFit: "cover",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />

          <Box
            sx={{
              position: "absolute",
              right: 10,
              top: 10,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={toggleFavorite}
          >
            <CardFavoriteIcon filled={isFavorite} />
          </Box>
          <CardContent sx={{ p: 1, display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  color: "rgba(17, 17, 17, 0.6)",
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                Oslo
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Map /> <Mail />
              </Box>
            </Box>

            <Typography
              sx={{
                fontWeight: 600,
                fontsize: 16,
                color: "rgba(17, 17, 17, 1)",
              }}
            >
              Torshov 0476
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontsize: 16,
                color: "rgba(17, 17, 17, 1)",
              }}
            >
              Estate building
            </Typography>

            <Box sx={{ display: "flex", mt: 2 }}>
              <Box
                sx={{
                  width: "100%",
                  height: 58,
                  bgcolor: "rgba(245, 247, 251, 1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                  alignItems: "left",
                  borderRadius: "2px",
                  p: 1,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "rgba(17, 17, 17, 0.6)",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  ID number
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(0, 0, 0, 1)",
                    fontWeight: "400",
                    fontSize: "16px",
                  }}
                >
                  15415567215
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Box
                sx={{
                  width: 123,
                  height: 58,
                  bgcolor: "rgba(245, 247, 251, 1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                  alignItems: "left",
                  borderRadius: "2px",
                  p: 1,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "rgba(17, 17, 17, 0.6)",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  Area
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(0, 0, 0, 1)",
                    fontWeight: "400",
                    fontSize: "16px",
                  }}
                >
                  15 000m²
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 123,
                  height: 58,
                  bgcolor: "rgba(245, 247, 251, 1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                  alignItems: "left",
                  borderRadius: "2px",
                  p: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(17, 17, 17, 0.6)",
                    fontWeight: "400",
                    fontSize: "12px",
                    // lineHeight: "22px",
                  }}
                >
                  Year of building
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(0, 0, 0, 1)",
                    fontWeight: "400",
                    fontSize: "16px",
                  }}
                >
                  20/09/1996
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Box
                sx={{
                  width: 123,
                  height: 58,
                  // bgcolor: "rgba(245, 247, 251, 1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                  alignItems: "left",
                  borderRadius: "2px",
                  p: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(17, 17, 17, 0.6)",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "22px",
                  }}
                >
                  Energy class
                </Typography>
                <Typography
                  sx={{
                    background: "rgba(245, 107, 56, 1)",
                    color: "white",
                    p: 0.5,
                    width: 43,
                    height: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    borderRadius: "4px",
                  }}
                >
                  A+
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 123,
                  height: 58,
                  // bgcolor: "rgba(245, 247, 251, 1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                  alignItems: "left",
                  borderRadius: "2px",
                  p: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(17, 17, 17, 0.6)",
                    fontWeight: "400",
                    fontSize: "16px",
                    // lineHeight: "22px",
                  }}
                >
                  SRI
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <SriBoxes>E</SriBoxes>
                  <SriBoxes>D</SriBoxes>
                  <SriBoxes>C</SriBoxes>
                  <SriBoxes sx={{ background: "rgba(97, 202, 148, 1)" }}>
                    B
                  </SriBoxes>
                  <SriBoxes>A</SriBoxes>
                </Box>
              </Box>
            </Box>
            <Box sx={{ p: 1 }}>
              <Typography
                sx={{
                  color: "rgba(17, 17, 17, 0.6)",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "22px",
                }}
              >
                Smart readiness indicator
              </Typography>
              <Box sx={{ display: "flex", gap: 2, pt: 1 }}>
                <IndicatorBoxes>
                  <Electric />
                </IndicatorBoxes>
                <IndicatorBoxes>
                  <Boxes />
                </IndicatorBoxes>
                <IndicatorBoxes>
                  <Setting />
                </IndicatorBoxes>
                <IndicatorBoxes>
                  <Battery />
                </IndicatorBoxes>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default BuildingCard;
const SriBoxes = styled(Typography)(({ theme }) => ({
  background: "rgba(17, 17, 17, 0.2)",
  color: "white",
  p: 0.5,
  width: 20,
  height: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.75rem",
  borderRadius: "4px",
}));
const IndicatorBoxes = styled(Typography)(({ theme }) => ({
  background: "rgba(17, 17, 17, 0.2)",
  color: "white",
  // padding: "8px",
  width: 30,
  height: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.75rem",
  borderRadius: "20px",
}));
