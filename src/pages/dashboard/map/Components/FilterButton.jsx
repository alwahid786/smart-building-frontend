import React, { useState, useRef, useEffect } from "react";

import {
  Button,
  Popover,
  Divider,
  styled,
  Box,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Switch,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";

const FilterButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const buttonRef = useRef(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(buttonRef.current);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const handleResize = () => {
      if (anchorEl) {
        setAnchorEl(buttonRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [anchorEl]);
  const checkboxData = [
    { label: "House", key: "house" },
    { label: "Tenement", key: "tenement" },
    { label: "Cottage", key: "cottage" },
    { label: "Tenement", key: "tenement" },
    { label: "Cottage", key: "cottage" },
    { label: "Tenement", key: "tenement" },
  ];
  const switchesData = [
    { id: 1, label: "Car chargers", checked: false },
    { id: 2, label: "Car chargers", checked: true },
  ];
  const [switches, setSwitches] = useState(switchesData);

  const handleToggle = (id) => {
    setSwitches((switches) =>
      switches.map((switchItem) =>
        switchItem.id === id
          ? { ...switchItem, checked: !switchItem.checked }
          : switchItem
      )
    );
  };
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };
  // Assuming you want to split them into rows of two
  const rows = checkboxData.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <>
      <Button
        color="primary"
        ref={buttonRef}
        aria-label="filter"
        style={{
          position: "absolute",
          top: "40px",
          right: "40px",
          zIndex: 1,
          width: "120px",
          whiteSpace: "nowrap",
          color: "white",
        }}
        onClick={handleClick}
      >
        Filters <FilterListIcon />
      </Button>
      <Popover
        id="simple-popover"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
          <Box>Filters </Box>
          <Typography sx={{ color: "rgb(167,36,253)" }}>Clear All</Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2, width: { xs: "100%", md: "400px" } }}>
          <Typography>Address</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ width: "60%" }}>
              <Field
                autoFocus
                margin="dense"
                id="city"
                label="City"
                type="text"
              />
            </Box>
            <Box sx={{ width: "40%" }}>
              <Field
                autoFocus
                margin="dense"
                id="postcode"
                label="Post Code"
                type="text"
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ width: "60%" }}>
              <Field
                autoFocus
                margin="dense"
                id="street"
                label="Street"
                type="text"
                fullWidth
              />
            </Box>
            <Box sx={{ width: "40%" }}>
              <Field
                autoFocus
                margin="dense"
                id="number"
                label="Number"
                type="text"
              />
            </Box>
          </Box>
          <Typography sx={{ py: 0.5 }}>Building Id</Typography>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Box sx={{ width: "90%" }}>
              <Field
                autoFocus
                margin="dense"
                id="street"
                label="Street"
                type="text"
                fullWidth
              />
            </Box>
          </Box>
          <Typography sx={{ py: 0.5 }}>Type Of Building</Typography>
          <FormGroup>
            {rows.map((row, idx) => (
              <Box
                key={idx}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                {row.map((checkbox) => (
                  <FormControlLabel
                    key={checkbox.key}
                    control={<Checkbox />}
                    label={checkbox.label}
                  />
                ))}
              </Box>
            ))}
          </FormGroup>
          <Typography>The rest Includes:</Typography>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}
          >
            {switches.map((switchItem) => (
              <Box
                key={switchItem.id}
                sx={{
                  backgroundColor: switchItem.checked
                    ? "rgb(123,66,246)"
                    : "rgb(245, 247, 251)",
                  p: 1,
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <FormControlLabel
                  label={switchItem.label}
                  labelPlacement="start"
                  control={
                    <Switch
                      checked={switchItem.checked}
                      onChange={() => handleToggle(switchItem.id)}
                      sx={{
                        "& .MuiSwitch-track": {
                          backgroundColor: switchItem.checked
                            ? "#FFFFFF"
                            : "grey.400",
                        },
                        "& .MuiSwitch-thumb": {
                          backgroundColor: switchItem.checked
                            ? "rgb(123,66,246)"
                            : "grey.400",
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                          {
                            backgroundColor: switchItem.checked
                              ? "#FFFFFF"
                              : "grey.400",
                          },
                      }}
                    />
                  }
                  sx={{
                    marginLeft: 0,
                    ".MuiFormControlLabel-label": {
                      color: switchItem.checked
                        ? "#fff"
                        : "rgba(0, 0, 0, 0.87)",
                      fontSize: 14,
                    },
                    "& .MuiSwitch-track": {
                      bgcolor: switchItem.checked
                        ? "rgb(255,255,255)"
                        : "grey.400",
                    },
                    "& .MuiSwitch-thumb": {
                      bgcolor: switchItem.checked
                        ? "rgb(123,66,246)"
                        : "grey.400",
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default FilterButton;

const Field = styled(TextField)({
  "& .MuiInputBase-root": {
    height: 45,
  },
  "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    border: "1px solid rgb(213,213,213)",
    borderRadius: 10,
  },
});
const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "rgba(0, 0, 0, 0.87)",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "(255, 255, 255)",
  },
}));
