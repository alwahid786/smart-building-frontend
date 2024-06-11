import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  styled,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../features/loading/loadingSlice";
import CardFavoriteIcon from "../../../../asset/svgs/CardFavoriteIcon";
import ArrowForwardIcon from "../../../../asset/svgs/ArrowForwardIcon";
import BadALertIcon from "../../../../asset/svgs/BadAlertIcon";
import { CardSkeleton } from "../../../../components/Skeleton";

const ListCard = ({ status, imageUrl, subtitle, title, tags, actionText }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "Good":
        return "rgba(214, 242, 227, 1);";
      case "Bad":
        return "rgba(255, 234, 235, 1)";
      case "Need Action":
        return "rgba(254, 237, 224, 1)";
      case "Inspection":
        return "rgba(255, 246, 219, 1)";
      default:
        return "rgba(245, 247, 251, 1)";
    }
  };
  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <Card
          sx={{
            minWidth: 0,
            height: 430,
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
            image={imageUrl}
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
              top: 10,
              left: 10,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                background: "orange",
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
              {tags[0]}
            </Typography>
            <Typography
              sx={{
                background: "green",
                color: "white",
                mt: 1,
                width: 23,
                height: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                borderRadius: "4px",
              }}
            >
              {tags[1]}
            </Typography>
          </Box>
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
          <CardContent
            sx={{
              p: { xs: 1, md: 2 },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle1" color="textSecondary">
              {subtitle}
            </Typography>
            <Typography variant="h6">{title}</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: { xs: 1, md: 2 },
              }}
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
                  gap: { xs: 1, md: 0 },
                  p: 1,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "rgba(17, 17, 17, 0.6)",
                    fontWeight: "400",
                    fontSize: { xs: 12, md: 14 },
                    lineHeight: "22px",
                  }}
                >
                  Energy usage
                </Typography>
                <BoxValue variant="body2">1140 KWh</BoxValue>
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
                  variant="subtitle2"
                  sx={{
                    color: "rgba(17, 17, 17, 0.6)",
                    fontWeight: "400",
                    fontSize: { xs: 12, md: 14 },
                    lineHeight: "22px",
                  }}
                >
                  Gas usage
                </Typography>
                <BoxValue variant="body2">1130-1149 L</BoxValue>
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
                    fontSize: { xs: 12, md: 14 },
                    lineHeight: "22px",
                  }}
                >
                  Water usage
                </Typography>
                <BoxValue variant="body2">1150-2532L</BoxValue>
              </Box>
              <Box
                sx={{
                  width: 123,
                  height: 58,
                  bgcolor: getStatusColor(status),
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  borderRadius: "2px",
                  p: 1,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "rgba(17, 17, 17, 0.6)",
                    fontWeight: "400",
                    fontSize: { xs: 12, md: 14 },
                    lineHeight: "22px",
                  }}
                >
                  Status
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(0, 0, 0, 1)",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    {status}
                  </Typography>
                  {status === "Bad" && <BadALertIcon />}
                </Box>
              </Box>
            </Box>
            <Button
              sx={{
                mt: 2,
                p: 0,
                minWidth: 0,
                background: "none",
                color: " rgba(123, 66, 246, 1)",
                boxShadow: "none",
                justifyContent: "start",
                fontSize: "16px",
                fontWeight: "400",
                "&:hover": {
                  background: "none",
                  textDecoration: "underline",
                },
                textTransform: "none",
              }}
              endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
              onClick={() => console.log("Details viewed")}
            >
              See details
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ListCard;
const BoxValue = styled(Typography)(({ theme }) => ({
  color: "rgba(0, 0, 0, 1)",
  fontWeight: "400",
  fontSize: { xs: 14, md: 16 },
}));
