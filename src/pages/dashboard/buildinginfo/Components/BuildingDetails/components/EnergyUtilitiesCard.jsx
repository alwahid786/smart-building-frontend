import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MyAreaLineChart from "./MyAreaLineChart";
import Car from "../../../../../../asset/svgs/buildingdetails/BuildingMedia/Car";
import { BuildingCustomCardSkeleton } from "../../../../../../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../../../features/loading/loadingSlice";

const data = [
  { time: "07:00", value: 100 },
  { time: "08:00", value: 200 },
  { time: "03:00", value: 150 },
  { time: "04:00", value: 170 },
  { time: "09:00", value: 300, max: true },
  { time: "11:00", value: 260 },
  { time: "12:00", value: 350 },
  { time: "13:00", value: 200 },
];
function EnergyUtilitiesCard() {
  const [tenant, setTenant] = React.useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);
  const handleChange = (event) => {
    setTenant(event.target.value);
  };
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
        <CustomCard>
          <TitleContainer>
            <Typography sx={{ fontSize: { sx: 12, md: 16 }, fontWeight: 600 }}>
              Energy utilities
            </Typography>
            <Select
              value={tenant}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ mb: 1, width: 180, height: 40 }}
            >
              <MenuItem value="">
                <em sx={{ color: "rgba(17, 17, 17, 0.6)" }}>
                  {" "}
                  <Car /> Car Chargers
                </em>
              </MenuItem>
              <MenuItem value="1">Tenant 1</MenuItem>
              <MenuItem value="2">Tenant 2</MenuItem>
            </Select>
          </TitleContainer>
          <GraphContent>
            <MyAreaLineChart data={data} />
          </GraphContent>
          <CardContent>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
              <Button variant="contained" sx={{ ml: "auto" }}>
                See full report
              </Button>
            </Box>
          </CardContent>
        </CustomCard>
      )}
    </>
  );
}

export default EnergyUtilitiesCard;
const CustomCard = styled(Card)(({ theme }) => ({
  // maxWidth: 485,
  maxHeight: "355px",
  borderRadius: "16px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
}));

const TitleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
}));

const GraphContent = styled(CardContent)(({ theme }) => ({
  padding: 0,
  // maxHeight: '150px',
  width: "auto",
}));
