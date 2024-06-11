import React, { useEffect } from "react";
import {
  Card,
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  Box,
  CircularProgress,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import Electricity from "../../../../../../asset/svgs/buildingdetails/BuildingMedia/Electric";
import Water from "../../../../../../asset/svgs/buildingdetails/BuildingMedia/Water";
import Fire from "../../../../../../asset/svgs/buildingdetails/BuildingMedia/Fire";
import { BuildingMediaConsumptionSkeleton } from "../../../../../../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../../../features/loading/loadingSlice";

function MediaConsumption() {
  const [tenant, setTenant] = React.useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);
  const handleChange = (event) => {
    setTenant(event.target.value);
  };

  return (
    <>
      {isLoading ? (
        <BuildingMediaConsumptionSkeleton />
      ) : (
        <Card sx={{ padding: 1, width: "auto" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: 16, fontWeight: 600 }} gutterBottom>
              Media consumption
            </Typography>
            <Select
              value={tenant}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ mb: 1, width: 120, height: 40 }}
            >
              <MenuItem value="">
                <em sx={{ color: "rgba(17, 17, 17, 0.6)" }}>Tenants</em>
              </MenuItem>
              <MenuItem value="1">Tenant 1</MenuItem>
              <MenuItem value="2">Tenant 2</MenuItem>
            </Select>
          </Box>
          <Divider />
          <Grid container spacing={2} sx={{ mt: 2 }} justifyContent="center">
            <Grid item>
              <ProgressWithIcon
                value={70}
                text={"25MWh"}
                iconComponent={Electricity}
              />
              <EnergyText>Electricity</EnergyText>
              <Typography
                sx={{ textAlign: "center", color: "rgba(97, 202, 148, 1)" }}
              >
                80%
              </Typography>
            </Grid>
            <Grid item>
              <ProgressWithIcon value={20} text={"25m²"} iconComponent={Fire} />
              <EnergyText>Gas</EnergyText>
              <Typography
                sx={{ textAlign: "center", color: "rgba(250, 61, 69, 1)" }}
              >
                50%
              </Typography>
            </Grid>
            <Grid item>
              <ProgressWithIcon
                value={60}
                text={"50m²"}
                iconComponent={Water}
              />
              <EnergyText>Water</EnergyText>
              <Typography
                sx={{ textAlign: "center", color: "rgba(97, 202, 148, 1)" }}
              >
                20%
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              mt: 2,
            }}
          >
            <Button variant="contained" sx={{ mt: 2, ml: "auto" }}>
              See full report
            </Button>
          </Box>
        </Card>
      )}
    </>
  );
}

export default MediaConsumption;

const EnergyText = styled(Typography)(({ theme, value }) => ({
  textAlign: "center",
  fontSize: 14,
  fontWeight: 400,
  color: "rgba(17, 17, 17, 0.6)",
}));
const CustomCircularProgress = styled(CircularProgress)(({ theme, value }) => ({
  color: "rgba(123, 66, 246, 1)",
  position: "relative",
  "& .MuiCircularProgress-circle": {
    strokeLinecap: "round",
  },
}));

const ProgressWithIcon = ({ text, value, iconComponent: Icon }) => (
  <Box position="relative" display="inline-flex" sx={{ height: 80, width: 80 }}>
    <CustomCircularProgress
      variant="determinate"
      value={value}
      thickness={4}
      size={80}
    />
    <Box
      top={0}
      left={0}
      bottom={0}
      right={0}
      position="absolute"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Icon /> {/* Display the icon */}
      <Typography sx={{ fontSize: 14, fontWeight: 600, color: "" }}>
        {`${text}`}
      </Typography>
    </Box>
  </Box>
);
