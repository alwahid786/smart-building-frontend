import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InspectionHistory from "./InspectionHistory";
import SensorCard from "./SensorCard";

const Sensors = () => {

  console.log("DSSDFSD")
  return (
    <Box>
      <Grid sx={{ display: { sx: "flex", md: "none", lg: "flex", gap: 10 } }}>
        <Box sx={{ flexGrow: 1 }}>
          <SensorCard />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <InspectionHistory />
        </Box>
      </Grid>
    </Box>
  );
};

export default Sensors;
