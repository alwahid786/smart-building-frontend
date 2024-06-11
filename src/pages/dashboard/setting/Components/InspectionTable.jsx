import React from "react";
import {
  Grid,
  Typography,
  Box,
  Stack,
  Divider,
  styled,
  CardMedia,
  Card,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ReportIcon from "./../../../../asset/svgs/ReportIcon";
import Rectangle from "../../../../asset/Images/renovation/Rectangle.png";
const rows = [
  {
    image: Rectangle,
    name: "Torshov 0476",
    description: "Estate building sp z.o.o.",
    date: "29-06-2020",
    type: "Gas Inspection",
    icon: ReportIcon,
  },
  {
    image: Rectangle,
    name: "Torshov 0476",
    description: "Estate building sp z.o.o.",
    date: "29-06-2020",
    type: "Gas Inspection",
    icon: ReportIcon,
  },
  {
    image: Rectangle,
    name: "Torshov 0476",
    description: "Estate building sp z.o.o.",
    date: "29-06-2020",
    type: "Gas Inspection",
    icon: ReportIcon,
  },
  {
    image: Rectangle,
    name: "Torshov 0476",
    description: "Estate building sp z.o.o.",
    date: "29-06-2020",
    type: "Gas Inspection",
    icon: ReportIcon,
  },
  {
    image: Rectangle,
    name: "Torshov 0476",
    description: "Estate building sp z.o.o.",
    date: "29-06-2020",
    type: "Gas Inspection",
    icon: ReportIcon,
  },
];

const InspectionTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log("rows", rows);
  return (
    <>
      <Card variant="outlined" sx={{ p: 0 }}>
        <Stack
          direction="row"
          justifyContent="left"
          alignItems="center"
          sx={{ p: 1 }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 14,
              color: "rgba(17, 17, 17, 1)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            In Progress
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 12,
              ml: "12px",
              color: "#111111",
              fontFamily: "'Poppins', sans-serif",
              cursor: "pointer",
            }}
          >
            15 results
          </Typography>
        </Stack>
        <Divider sx={{ my: 1 }} />

        {rows.map((row, index) => (
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              justifyContent: "space-between",
              // gap:2,
              padding: theme.spacing(0.5),
              backgroundColor: "none",
              gap: isMobile ? 2 : 1,
            }}
            key={index}
          >
            {/* <Card > */}
            <Box
              sx={{
                display: "flex",
                flex: 1,
                background: "#F5F7FB",
                alignItems: "center",
                padding: "10px 0px 10px 10px",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 48,
                  height: 48,
                  marginRight: 2,
                  borderRadius: "50%",
                }}
                image={row.image}
                alt={row.name}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {row.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {row.description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", flex: 1, gap: 1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#F5F7FB",
                  alignItems: "flex-start",
                  padding: {
                    xs: "14px 23px 10px 10px",
                    md: "14px 56px 13px 12px",
                  },
                }}
              >
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Date
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: 10, md: 14 },
                    color: "#111111",
                  }}
                >
                  {row.date}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#F5F7FB",
                  padding: {
                    xs: "14px 23px 10px 10px",
                    md: "14px 56px 13px 12px",
                  },
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Type
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: 10, md: 14 },
                    color: "#111111",
                  }}
                >
                  {row.type}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {row.icon && <row.icon />}
                </Typography>
              </Box>
            </Box>
            {/* </Card> */}
          </Grid>
        ))}
      </Card>
    </>
  );
};
const CustomText = styled(Typography)(({ theme }) => ({
  width: 150,
  height: 24,
  backgroundColor: "#F5F7FB",
  display: "flex",
  alignItems: "center",
  marginBottom: "4px",
}));
export default InspectionTable;
