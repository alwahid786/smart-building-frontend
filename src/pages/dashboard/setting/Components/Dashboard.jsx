import React, { useState } from "react";
import {
  Box,
  Select,
  MenuItem,
  InputBase,
  FormControl,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StatusBar from "./StatusBar";
import CurrentInspection from "./CurrentInspection";
import InspectionTable from "./InspectionTable";
import InspectionHistory from "./InspectionHistory";
import MediaUse from "./MediaUse";
import MaterialUse from "./MaterialUse";

const Dashboard = () => {
  const [watchingNow, setWatchingNow] = useState("all");

  const handleChange = (event) => {
    setWatchingNow(event.target.value);
  };

  return (
    <Container maxWidth="xxl">
      <Box display="flex" alignItems="center">
        <Typography sx={{ fontWeight: 500, fontSize: 16 }} component="span">
          Watching now:
        </Typography>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
          <Select
            value={watchingNow}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            input={<BootstrapInput />}
            IconComponent={ArrowDropDownIcon}
            sx={{
              "& .MuiSelect-select": {
                paddingLeft: 1,
                paddingRight: 1,
                display: "flex",
                alignItems: "center",
              },
              "& .MuiSvgIcon-root": {
                marginLeft: 1,
              },
            }}
          >
            <MenuItem value="all">
              <Typography variant="subtitle1">All</Typography>
            </MenuItem>
            <MenuItem value="in-progress">In Progress</MenuItem>
            <MenuItem value="planned">Planned</MenuItem>
            <MenuItem value="done">Done</MenuItem>
            <MenuItem value="on-hold">On Hold</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          md={8}
          container
          sx={{ height: "max-content", gap: "20px" }}
        >
          <StatusBar />

          <Box
            width="100%"
            sx={{ display: { xs: "block", md: "flex" } }}
            gap="5px"
          >
            <Box
              sx={{ width: { xs: "100%", md: "50%" }, mb: { xs: 1, md: 0 } }}
            >
              <MediaUse />
            </Box>
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <MaterialUse />
            </Box>
          </Box>
          <Box width="100%">
            <InspectionHistory />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <CurrentInspection />
        </Grid>
      </Grid>
    </Container>
  );
};
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    //   backgroundColor: theme.palette.background.paper,
    border: "none",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    //   transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ],
    //   .join(','),
    //   '&:focus': {
    //     borderRadius: 4,
    //     borderColor: '#80bdff',
    //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    //   },
  },
}));
export default Dashboard;
