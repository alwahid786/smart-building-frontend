import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { BuildingCustomCardSkeleton } from "../../../../../../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../../../features/loading/loadingSlice";

const FinancialProjection = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <BuildingCustomCardSkeleton />
      ) : (
        <Card sx={{ minWidth: 275, boxShadow: 3, borderRadius: 2 }}>
          <CardContent sx={{ padding: 2 }}>
            <Typography
              sx={{
                fontSize: { xs: 12, md: 16 },
                fontWeight: 600,
                color: "rgba(17, 17, 17, 1)",
              }}
              gutterBottom
            >
              Financial projections
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography
                  variant="h5"
                  color="text.primary"
                  sx={{ fontWeight: "bold" }}
                >
                  <Box
                    component="span"
                    sx={{ fontSize: { xs: 12, md: 14 }, fontWeight: 500 }}
                  >
                    approx.
                  </Box>{" "}
                  <Box
                    component="span"
                    sx={{ fontSize: { xs: 16, md: 24 }, fontWeight: 700 }}
                  >
                    13 mln
                  </Box>{" "}
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: 12, md: 14 },
                      fontWeight: 500,
                      color: "rgba(17, 17, 17, 0.6)",
                    }}
                  >
                    / years 2020
                  </Box>
                </Typography>
                <Typography color="text.secondary"></Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1.5,
                    color: "rgba(17, 17, 17, 0.6)",
                    fontSize: { xs: 12, md: 14 },
                    fontWeight: 500,
                  }}
                >
                  Building renovation
                </Typography>
              </Grid>
              <Grid item xs={4} md={2}>
                <Typography variant="body2" color="text.secondary">
                  Roof
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  -5 mln
                </Typography>
              </Grid>
              <Grid item xs={4} md={2}>
                <Typography variant="body2" color="text.secondary">
                  Elevator
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  -5 mln
                </Typography>
              </Grid>
              <Grid item xs={4} md={2}>
                <Typography variant="body2" color="text.secondary">
                  Energy
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  -3 mln
                </Typography>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: 1, margin: 1 }}
                >
                  View more
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FinancialProjection;
