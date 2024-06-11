import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
  LinearProgress,
  styled,
  Grid,
  Box,
  Button,
  Divider,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Day 0", value: 2900 },
  { name: "Day 1", value: 3000 },
  { name: "Day 2", value: 2800 },
  { name: "Day 3", value: 3500 },
  { name: "Day 4", value: 3000 },
  { name: "Day 5", value: 3200 },
  { name: "Day 6", value: 4100 },
  { name: "Day 7", value: 3000 },
];
const data1 = [
  { lighting: "Lightning", mwh: "1016 Mwh", checked: false },
  { lighting: "Ventilation", mwh: "1020 Mwh", checked: true },
  { lighting: "Heating", mwh: "1030 Mwh", checked: true },
  { lighting: "Lifts", mwh: "1040 Mwh", checked: true },
];
const UtilityCard = () => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 1,
        }}
      >
        <Typography sx={{ fontSize: 12, fontWeight: 400 }}>
          Standard control
        </Typography>
        <Button sx={{ background: "none", color: "#0C234D", fontSize: "12px" }}>
          See full report
        </Button>
      </Box>
      <Divider />

      <CardContent sx={{ p: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 10,
              color: "rgba(17, 17, 17, 0.6)",
              fontWeight: "bold",
            }}
          >
            Total use <br />{" "}
            <Box
              component="span"
              sx={{
                fontSize: 12,
                color: "rgba(17, 17, 17, 1)",
                fontWeight: "bold",
              }}
            >
              110 Mwh
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: 10,
              color: "text.secondary",
              border: "1px solid #ccc",
              borderRadius: "4px",
              paddingX: "4px",
              //   width: '80%',
              boxSizing: "border-box",
            }}
          >
            Dec 29, 2019 - Jan 04, 2020
          </Typography>
        </Box>

        <Typography sx={{ fontSize: 12, color: "rgba(17, 17, 17, 0.6)" }}>
          The result includes:
        </Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {data1.map((item, index) => (
            <Grid item xs={6} key={index}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="start"
                sx={{ background: "#F5F7FB", p: 1, height: 63 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{ fontSize: 12, color: "rgba(17, 17, 17, 0.6)" }}
                  >
                    {item.lighting}
                  </Typography>
                  <AntSwitch defaultChecked={item.checked} />
                </Box>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "rgba(17, 17, 17, 1)",
                  }}
                >
                  {item.mwh}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={data}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <Typography sx={{ fontSize: 12, color: "rgba(17, 17, 17, 0.6)" }}>
          Comparison:
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: 12, color: "rgba(17, 17, 17, 0.8)" }}>
              Previous Month
            </Typography>
            <Typography sx={{ fontSize: 12, color: "rgba(17, 17, 17, 0.8)" }}>
              1180 Mwh <span style={{ color: "red" }}>▲ 0.15%</span>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: 12, color: "rgba(17, 17, 17, 0.8)" }}>
              Previous Year
            </Typography>
            <Typography sx={{ fontSize: 12, color: "rgba(17, 17, 17, 0.8)" }}>
              1180 Mwh <span style={{ color: "red" }}>▲ 0.15%</span>
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UtilityCard;
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "rgba(12, 35, 77, 1)",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
