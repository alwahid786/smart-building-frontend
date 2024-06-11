import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
  Box,
  Divider,
  Alert,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SensorsStatusSkeleton } from "../../../../../../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../../../features/loading/loadingSlice";

const Sensor = () => {
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
        <SensorsStatusSkeleton />
      ) : (
        <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 12, md: 16 },
                  fontWeight: 600,
                  color: "rgba(17, 17, 17, 1)",
                  marginBottom: 1,
                }}
              >
                Sensors status
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(95.25deg, #7B42F6 0%, #B01EFF 100%)",
                  textTransform: "none",
                  borderRadius: "8px",
                  marginBottom: "6px",
                  color: "white",
                  borderColor: "transparent",
                  // borderWidth: 2,
                  borderStyle: "solid",
                  borderImageSlice: 1,
                  borderImageSource:
                    "linear-gradient(95.25deg, #7B42F6 0%, #B01EFF 100%)",
                }}
              >
                See full report
              </Button>
            </Box>

            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 1,
                marginTop: 4,
              }}
            >
              <ArrowBackIosNewIcon sx={{ cursor: "pointer" }} />
              <Typography
                sx={{ fontWeight: "medium", fontSize: { xs: 12, md: 16 } }}
              >
                Heating
              </Typography>
              <ArrowForwardIosIcon sx={{ cursor: "pointer" }} />
            </Box>

            <Stack
              direction="row"
              sx={{ marginTop: 2 }}
              spacing={1}
              justifyContent="center"
            >
              <Chip
                sx={{
                  width: "calc(40% - 16px)",
                  height: 64,
                  fontSize: { xs: 9, md: 14 },
                }}
                label="Installed 436"
                color="default"
              />
              <Chip
                sx={{
                  width: "calc(40% - 16px)",
                  height: 64,
                  fontSize: { xs: 9, md: 14 },
                }}
                label="Active 385"
                color="default"
              />
              <Chip
                sx={{
                  width: "calc(40% - 16px)",
                  height: 64,
                  fontSize: { xs: 9, md: 14 },
                }}
                label="Offline 50"
                color="default"
              />
            </Stack>

            <Box
              sx={{
                marginTop: 3,
                marginBottom: 1,
                padding: 1,
                borderRadius: 1,
              }}
            >
              <Alert severity="error" sx={{ marginBottom: 2 }}>
                Heating - 1 sensor has problem
              </Alert>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Sensor;
