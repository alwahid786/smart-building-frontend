import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  Box,
  Tab,
  Tabs,
  Select,
  MenuItem,
  useMediaQuery,
  FormControl,
} from "@mui/material"; // Import useTheme
import { useTheme } from "@mui/material/styles"; // Import useTheme

import Dashboard from "../dashboard";
import InspectionDashboard from "../inspection/InspectionDashboard";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: { xs: 1, md: 1 } }}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const GeneralTabs = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (value === 0) {
      setIndicatorStyle({
        width: "65px",
        marginLeft: "20px",
        height: "1px",
        backgroundColor: "rgba(123, 66, 246, 1)",
        boxShadow: "0 0 0 4px rgba(123, 66, 246, 1)",
      });
    } else if (value === 1) {
      setIndicatorStyle({
        width: "115px",
        marginLeft: "20px",
        height: "1px",
        backgroundColor: "rgba(123, 66, 246, 1)",
        boxShadow: "0 0 0 4px rgba(123, 66, 246, 1)",
      });
    }
  }, [value]);
  return (
    <Box sx={{ width: "100%", p: { xs: 1, md: 1 }, mt: 1 }}>
      <Box sx={{ borderBottom: "", borderColor: "" }}>
        {isSmallScreen ? (
          <FormControl sx={{ mt: { xs: 3, md: 0 } }} fullWidth>
            <Select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={0}>Dashboard</MenuItem>
              <MenuItem value={1}>Inspection Building</MenuItem>
            </Select>
          </FormControl>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{ style: indicatorStyle }}
          >
            <Tab
              label="Dashboard"
              {...a11yProps(0)}
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="Inspection Building"
              {...a11yProps(1)}
              sx={{ textTransform: "none" }}
            />
          </Tabs>
        )}
      </Box>
      <TabPanel value={value} index={0}>
        <Dashboard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InspectionDashboard />
      </TabPanel>
    </Box>
  );
};

export default GeneralTabs;
