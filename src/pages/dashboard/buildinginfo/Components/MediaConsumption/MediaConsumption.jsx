import React, { useState, useEffect } from "react";
import {
  Box,
  Tab,
  Tabs,
  Button,
  styled,
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Electricity from "../../../../../asset/svgs/mediaconsumption/Electricity";
import Water from "../../../../../asset/svgs/mediaconsumption/Water";
// import Ventilation from '../../../../../asset/svgs/mediaconsumption/Ventilation.svg';
import Gas from "../../../../../asset/svgs/mediaconsumption/Gas";
import Car from "../../../../../asset/svgs/mediaconsumption/Car";
// import Smoke from './../../../../../asset/svgs/mediaconsumption/Smoke.svg';
import Conditioning from "./../../../../../asset/svgs/mediaconsumption/Conditioning.svg";
import Persons from "../../../../../asset/svgs/mediaconsumption/Persons";
import House from "../../../../../asset/svgs/mediaconsumption/House";
import PurpleBox from "../../../../../asset/svgs/PurpleBox";
import Divider from "@mui/material/Divider";
import InspectionHistory from "./InspectionHistory";
import Graph from "./Graph";
import {
  MediaTabsAndSelectSkeleton,
  MediaButtonsAndDatePickerSkeleton,
  MediaGraphSkeleton,
} from "../../../../../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../../features/loading/loadingSlice";

const buttonLabels = ["1D", "1W", "1M", "1Y"];
const buttonsData = [
  { icon: <Electricity />, label: "Electricity" },
  { icon: <Gas />, label: "Gas" },
  { icon: <Water />, label: "Water" },
  { icon: <Car />, label: "Car Charging" },
  { icon: <Electricity />, label: "Heating" },
  { icon: <Gas />, label: "Ventilation" },
  { icon: <Car />, label: "Air Conditioning" },
];

const MediaConsumption = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);
  console.log("value", value);

  const data = [
    { time: "2021-01-01T00:00:00Z", value: 20 },
    { time: "2021-01-02T00:00:00Z", value: 30 },
    { time: "2021-01-02T00:00:00Z", value: 40 },
    { time: "2021-01-02T00:00:00Z", value: 45 },
    { time: "2021-01-02T00:00:00Z", value: 55 },
    { time: "2021-01-02T00:00:00Z", value: 60 },
    { time: "2021-01-02T00:00:00Z", value: 75 },
    { time: "2021-01-02T00:00:00Z", value: 90 },
    { time: "2021-01-02T00:00:00Z", value: 20 },
    { time: "2021-01-02T00:00:00Z", value: 45 },
    { time: "2021-01-02T00:00:00Z", value: 100 },
    { time: "2021-01-02T00:00:00Z", value: 150 },
    // more data
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue || event.target.value);
    console.log("value", value);
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <MediaTabsAndSelectSkeleton />
      ) : (
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid item xs={12} lg={10}>
            {isSmallScreen ? (
              <Select
                fullWidth
                value={value}
                onChange={handleChange}
                sx={{ height: 30 }}
              >
                <MenuItem value={0}>Tenants</MenuItem>
                <MenuItem value={1}>Common</MenuItem>
                <MenuItem value={2}>All</MenuItem>
              </Select>
            ) : (
              <CustomTabParent
                value={value}
                onChange={handleChange}
                variant="standard"
                sx={{ height: 30 }}
              >
                <CustomTab
                  value={0}
                  onClick={() => setValue(0)}
                  icon={<Persons />}
                  label="Tenants"
                  sx={{
                    bgcolor: value === 0 ? "white" : "transparent",
                    border: value === 0 ? "none" : "0.5px solid gray",
                    color: value === 0 ? "rgba(17, 17, 17, 0.6)" : "black",
                    borderBottom:
                      value === 0
                        ? "2px solid rgba(12, 35, 77, 1)"
                        : "0.5px solid gray",
                  }}
                />
                <CustomTab
                  value={1}
                  onClick={() => setValue(1)}
                  icon={<House />}
                  label="Common"
                  sx={{
                    bgcolor: value === 1 ? "white" : "transparent",
                    border: value === 1 ? "none" : "0.5px solid gray",
                  }}
                />
                <CustomTab
                  value={2}
                  onClick={() => setValue(2)}
                  label="All"
                  sx={{
                    minWidth: 100,
                    bgcolor: value === 2 ? "white" : "transparent",
                    border: value === 2 ? "none" : "0.5px solid gray",
                  }}
                />
              </CustomTabParent>
            )}
            {/* Render content based on selected value */}
            {value === 0 && (
              <div>
                <p></p>
              </div>
            )}
            {value === 1 && (
              <div>
                <p></p>
              </div>
            )}
            {value === 2 && (
              <div>
                <p></p>
              </div>
            )}
          </Grid>
        </Grid>
      )}
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          p: { xs: 1, md: 2 },
          mb: 4,
          borderRadius: 5,
        }}
      >
        <Box sx={{ p: 0 }} maxWidth="xl">
          <Grid
            container
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 2, flexWrap: { xs: "wrap", md: "nowrap" } }}
          >
            <Grid
              item
              xs={12}
              lg={10}
              sx={{ display: { xs: "contents", md: "flex" } }}
            >
              {buttonsData.map((button, index) => (
                <CustomButton key={index}>
                  <Typography>{button.icon}</Typography>
                  <Typography>{button.label}</Typography>
                </CustomButton>
              ))}
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  width: 230,
                  fontSize: 14,
                  fontWeight: 400,
                  textTransform: "none",
                }}
              >
                Compare building utilities{" "}
              </Button>
            </Grid>
          </Grid>
          <Divider />
          {isLoading ? (
            <MediaButtonsAndDatePickerSkeleton />
          ) : (
            <Box
              display="flex"
              sx={{ overflowX: { xs: "auto", md: "none" } }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ display: "flex", flexGrow: 1, gap: 1 }}>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 14,
                    color: "rgba(17, 17, 17, 0.6)",
                    fontFamily: "Poppins",
                  }}
                >
                  View:
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 16,
                    color: "rgba(17, 17, 17, 0.6)",
                    fontFamily: "Poppins",
                  }}
                >
                  <PurpleBox /> Torshavn 04/16
                </Typography>
              </Typography>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                {buttonLabels.map((label, index) => (
                  <DateButton key={index}>{label}</DateButton>
                ))}
                <TextField
                  type="date"
                  defaultValue="2020-04-16"
                  sx={{ width: "fit-content", mt: 1 }}
                />
              </Box>
            </Box>
          )}
          {isLoading ? <MediaGraphSkeleton /> : <Graph data={data} />}
        </Box>
      </Box>
      <InspectionHistory />
    </>
  );
};

export default MediaConsumption;
const CustomTabParent = styled(Tabs)(({ theme }) => ({
  minHeight: 64,
  "& .css-1aquho2-MuiTabs-indicator": {
    backgroundColor: "rgba(12, 35, 77, 1) !important",
  },
}));

const CustomTab = styled(Tab)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 12,
  minWidth: 180,
  minHeight: 64,
  display: "flex",
  "&.Mui-selected": {
    color: "rgba(17, 17, 17, 1)",
  },

  color: "rgba(17, 17, 17, 1)",
  flexDirection: "row",
  p: "0px 26px",
  gap: 6,
  fontFamily: "'Poppins', sans-serif",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  fontWeight: 400,
  background: "none",
  display: "flex",
  // flexDirection:'row',
  padding: "6px 4px",
  fontSize: { xs: 12, md: 16 },
  color: "rgba(17, 17, 17, 0.6)",
  fontFamily: "Poppins",
  textTransform: "none",
  gap: { xs: "5px", md: "8px" },
}));
const DateButton = styled(Button)(({ theme }) => ({
  border: "1px solid gray",
  background: "none",
  width: "60px",
  height: "30px",
  color: "gray",
}));
