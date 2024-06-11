import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  borderRadius: "10px",
  justifyContent: "space-between",
  alignItems: "center",
  flexGrow: 1,
  transition: "border-bottom 0.1s ease-in-out",
  "&:hover": {
    borderBottom: "4px solid #7B42F6",
  },
}));

const statuses = [
  { title: "Renovation", status: "In progress", number: 5 },
  { title: "Renovation", status: "Planned", number: 10 },
  { title: "Renovation", status: "Done", number: 15 },
  { title: "Renovation", status: "On hold", number: 30 },
];

const StatusGrid = () => (
  <Grid container spacing={2} sx={{ height: { md: "100%", lg: "85px" } }}>
    {statuses.map((status, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Item>
          <Box>
            <Typography
              sx={{ fontWeight: 400, fontSize: 12, color: "gray" }}
              component="div"
            >
              {status.title}
            </Typography>
            <Typography
              sx={{ fontWeight: 500, fontSize: 14, color: "#111111" }}
            >
              {status.status}
            </Typography>
          </Box>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              backgroundColor: "#F5F7FB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "500", color: "#000000" }}
              component="span"
            >
              {status.number}
            </Typography>
          </Box>
        </Item>
      </Grid>
    ))}
  </Grid>
);

export default StatusGrid;
