import { Box, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import StatusBar from "./StatusBar";
// import CurrentInspection from "./CurrentInspection";
// import InspectionHistory from "./InspectionHistory";
// import MaterialUse from "./MaterialUse";
// import MediaSuppliers from "./MediaSuppliers";
import InspectionBuilding from "./InspectionBuilding";
import { useState } from "react";

const InspectionDashboard = () => {
  const [watchingNow, setWatchingNow] = useState("all");

  const handleChange = (event) => {
    setWatchingNow(event.target.value);
  };

  return (
    <Box
      maxWidth="xxl"
      sx={{
        opacity: 0,
        transform: "translateY(20px)",
        animation: "fadeInUp 2s ease forwards",
        "@keyframes fadeInUp": {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    >
      {/* <Box display="flex" alignItems="center">
      <Typography sx={{fontWeight:500, fontSize:16}} component="span">
        Watching now:
      </Typography>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
        <Select
          value={watchingNow}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          input={<BootstrapInput />} 
          IconComponent={ArrowDropDownIcon} 
          sx={{ 
            '& .MuiSelect-select': {
              display: 'flex',
              alignItems: 'center'
            },
            '& .MuiSvgIcon-root': {
              marginLeft: 1
            }
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
      <Grid item xs={12} md={8} container sx={{height:'max-content', gap:'20px'}}>
        <StatusBar />
      
        <Box width="100%" sx={{display:{xs:'block', md:'flex'}}} gap='5px'>
         <Box sx={{width:{xs:'100%', md:'50%'}, mb:{xs:1, md:0}}}>
<MediaSuppliers />
         </Box>
         <Box sx={{width:{xs:'100%', md:'50%'}}}>
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
    </Grid> */}
      <Box>
        <InspectionBuilding />
      </Box>
    </Box>
  );
};
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "none",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
  },
}));
export default InspectionDashboard;
