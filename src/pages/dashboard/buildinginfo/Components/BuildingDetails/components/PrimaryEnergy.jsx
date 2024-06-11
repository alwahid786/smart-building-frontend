import React, { useState, useCallback, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import Slider from "@mui/material/Slider";
import { PrimaryEnergySkeleton } from "../../../../../../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../../../features/loading/loadingSlice";

const degreesToRadians = (degrees) => degrees * (Math.PI / 180);
const PrimaryEnergy = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);
  const [progress, setProgress] = useState(100);
  const handleChange = (event, newValue) => {
    setProgress(newValue);
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <PrimaryEnergySkeleton />
      ) : (
        <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 600,
                color: "rgba(17, 17, 17, 1)",
              }}
              color="text.secondary"
              gutterBottom
            >
              Primary Energy
            </Typography>
            <Divider />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "rgba(0, 0, 0, 1)",
                }}
              >
                123.3 kWh
              </Typography>
              <InfoOutlinedIcon
                sx={{ marginLeft: 1, color: "rgba(123, 66, 246, 1)" }}
              />
            </Box>
            <Typography
              sx={{
                mb: 1.5,
                fontSize: 14,
                fontWeight: 400,
                color: "rgba(17, 17, 17, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              color="text.secondary"
            >
              (m² years)
            </Typography>
            <Box sx={{ width: "100%", padding: 2 }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                color="secondary"
                sx={{ height: 5, borderRadius: 5, marginBottom: 2 }}
              />
              <Slider
                value={progress}
                onChange={handleChange}
                aria-labelledby="progress-slider"
                min={1}
                max={100}
                sx={{
                  "& .MuiSlider-thumb": {
                    transform: "rotate(-45deg)", // Rotate the thumb for a slight skewed effect
                  },
                  "& .MuiSlider-rail": {
                    opacity: 0.5, // Dim the rail a bit
                  },
                }}
              />
              <Typography variant="caption" display="block" gutterBottom>
                Adjust progress (1-100)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mt: 1 }}>
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "rgba(17, 17, 17, 0.6)",
                }}
              >
                Primary Energy Demand (EP)
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: 58,
                  background: "rgba(245, 247, 251, 1)",
                  p: 1,
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "rgba(0, 0, 0, 1)",
                    p: 0.2,
                  }}
                >
                  123.3 kWh
                  <br />
                  <Box
                    component="span"
                    sx={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: "rgba(17, 17, 17, 0.6)",
                    }}
                  >
                    m² years
                  </Box>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", mt: 1 }}>
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "rgba(17, 17, 17, 0.6)",
                }}
              >
                Final energy Demand (EK)
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: 58,
                  background: "rgba(245, 247, 251, 1)",
                  p: 1,
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "rgba(0, 0, 0, 1)",
                    p: 0.2,
                  }}
                >
                  123.3 kWh
                  <br />
                  <Box
                    component="span"
                    sx={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: "rgba(17, 17, 17, 0.6)",
                    }}
                  >
                    m² years
                  </Box>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default PrimaryEnergy;
