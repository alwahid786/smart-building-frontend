import React from "react";
import { Tabs, Tab, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import MlSuggestions from "./mlsuggestions";
import Lighting from "./lighthning";

// Styled components
const StyledTab = styled(Tab)({
  minWidth: "auto",
  width: "180px",
  height: "52px",
  marginRight: 12,
  textTransform: "none",
  fontWeight: "normal",
  fontSize: "1rem",
  color: "rgba(17, 17, 17, 0.6)",
  background: "white",
  borderRadius: "8px",
  border: "0px, 0px, 0px, 4px",
});

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    borderRadius: "30px 0 30px 0",
    border: "2px solid rgba(123, 66, 246, 1)",
    left: 0,
    width: "4px !important",
    height: "100%",
  },
  "& .css-l680r0-MuiButtonBase-root-MuiTab-root.Mui-selected": {
    color: "rgba(17, 17, 17, 1)",
    fontWeight: 400,
    fontSize: "1rem",
  },
});

const Ventilation = () => <div>Ventilation Content</div>;
const Heating = () => <div>Heating Content</div>;
const Lifts = () => <div>Lifts Content</div>;

const tabComponents = [
  <MlSuggestions />,
  <Lighting />,
  <Ventilation />,
  <Heating />,
  <Lifts />,
];

// Main component
const SelfTabs = () => {
  const [value, setValue] = React.useState(0);
  const [collapsed, setCollapsed] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial screen size
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      {collapsed ? (
        <React.Fragment>
          <Select
            fullWidth
            value={value}
            onChange={(event) => setValue(event.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "styled tabs example" }}
          >
            {[
              "MI Suggestion",
              "Lighting",
              "Ventilation",
              "Heating",
              "Lifts",
            ].map((label, index) => (
              <MenuItem key={label} value={index}>
                {label}
              </MenuItem>
            ))}
          </Select>
          {tabComponents[value]}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            {[
              "MI Suggestion",
              "Lighting",
              "Ventilation",
              "Heating",
              "Lifts",
            ].map((label, index) => (
              <StyledTab key={label} label={label} />
            ))}
          </StyledTabs>
          {tabComponents[value]}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default SelfTabs;
