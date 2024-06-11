import React from "react";
import { Tabs, Tab } from "@mui/material";
import { styled, Select, MenuItem } from "@mui/material";

const StyledTab = styled(Tab)({
  minWidth: "auto",
  width: "80px",
  height: "52px",
  marginRight: 12,
  background: "white",
  textTransform: "none",
  fontWeight: "normal",
  fontSize: "1rem",
  color: "rgba(17, 17, 17, 0.6)",
  borderRadius: "8px",
});

const StyledTabs = styled(Tabs)({
  "& .css-17wd77y-MuiButtonBase-root-MuiTab-root.Mui-selected": {
    color: "black",
    fontWeight: 400,
    fontSize: 16,
    fontFamily: "Poppins",
  },
});
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
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <React.Fragment>
      {collapsed ? (
        <Select
          value={value}
          onChange={(event) => setValue(event.target.value)}
          sx={{ width: { xs: "-webkit-fill-available", md: "auto" } }}
          aria-label="styled tabs example"
        >
          {["All", "Lighting", "Ventilation", "Heating", "Lifts"].map(
            (label, index) => (
              <MenuItem key={label} value={index}>
                {label}
              </MenuItem>
            )
          )}
        </Select>
      ) : (
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          {["All", "Lighting", "Ventilation", "Heating", "Lifts"].map(
            (label, index) => (
              <StyledTab
                key={label}
                label={label}
                isSelected={value === index}
              />
            )
          )}
        </StyledTabs>
      )}
    </React.Fragment>
  );
};

export default SelfTabs;
