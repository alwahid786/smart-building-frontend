import React from "react";
import Dashboard from "../renovation/Components/Dashboard";
import { Box } from "@mui/material";
const index = () => {
  return (
    <>
      <Box sx={{ p: 0, mt: 1, backgroundColor: "#F5F7FB", height: "auto" }}>
        <Dashboard />
      </Box>
    </>
  );
};

export default index;
