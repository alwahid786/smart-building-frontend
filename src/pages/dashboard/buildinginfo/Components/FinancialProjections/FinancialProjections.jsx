import React, { useRef, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  styled,
  TableRow,
  useMediaQuery,
  useTheme,
  Checkbox,
  Button,
} from "@mui/material";
import FinancialGraph from "./FinancialGraph";
import ReportIcon from "../../../../../asset/svgs/ReportIcon";
import {
  FinancialCardSkeleton,
  FinancialGraphSkeleton,
  FinancialTableSkeleton,
} from "../../../../../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../../features/loading/loadingSlice";

const CardData = [
  {
    title: "Previous year 2019",
    subTitle: "NOK",
    mainText: "13 MLN",
    sideText: "Building renovation",
  },
  {
    title: "Previous year 2019",
    subTitle: "NOK",
    mainText: "13 MLN",
    sideText: "Building renovation",
  },
  {
    title: "Next year 2024",
    subTitle: "NOK",
    mainText: "13 MLN",
    sideText: "Building renovation",
  },
];
const data = [
  {
    name: "Current",
    admin: "Alberto Amango",
    tenants: "22 MLN NOK",
    TotalCost: "22 MLN NOK",
    icon: <ReportIcon />,
  },
  {
    name: "2020",
    admin: "Alberto Amango",
    tenants: "22 MLN NOK",
    TotalCost: "22 MLN NOK",
    icon: <ReportIcon />,
  },
  {
    name: "2019",
    admin: "Alberto Amango",
    tenants: "22 MLN NOK",
    TotalCost: "22 MLN NOK",
    icon: <ReportIcon />,
  },
];
const Chartdata = [
  { name: "January", uv: 4000 },
  { name: "February", uv: 3000 },
  { name: "March", uv: 2000 },
  { name: "April", uv: 2780 },
  { name: "May", uv: 1890 },
  { name: "June", uv: 2390 },
  { name: "July", uv: 3490 },
  { name: "August", uv: 2000 },
  { name: "September", uv: 2780 },
  { name: "October", uv: 1890 },
  { name: "November", uv: 3578 },
  { name: "December", uv: 2378 },
];

const FinancialProjections = () => {
  const d3Container = useRef(null);
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);

  return (
    <>
      <Box color="text.primary" sx={{ p: { sx: 0, md: 0, lg: 0, xl: 1 } }}>
        <Box mx="auto">
          {isLoading ? (
            <FinancialCardSkeleton />
          ) : (
            <Box
              display="grid"
              gridTemplateColumns={{
                xs: "1fr",
                sm: "1fr",
                md: "repeat(3, 1fr)",
              }}
              gap={{ xs: 2, md: 4 }}
              mb={2}
              p={0}
            >
              {CardData.map((item, index) => (
                <Card key={index} elevation={0}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <TitleText>{item.title}</TitleText>
                    <Box sx={{ width: "100%", mt: "auto" }}>
                      <Box>
                        <SubTitleText>{item.subTitle}</SubTitleText>
                      </Box>
                      <MainTextParent>
                        <MainText>{item.mainText}</MainText>
                        <SideText>{item.sideText}</SideText>
                      </MainTextParent>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
          {isLoading ? (
            <FinancialGraphSkeleton />
          ) : (
            <Card elevation={1} mb={2}>
              <CardContent
                ref={d3Container}
                style={{
                  width: "100%",
                  overflowX: isXSmall ? "auto" : "hidden",
                  overflowY: "hidden",
                }}
              >
                <FinancialGraph data={Chartdata} />
              </CardContent>
            </Card>
          )}

          {isLoading ? (
            <FinancialTableSkeleton />
          ) : (
            <Card elevation={1}>
              <CardContent>
                <Box overflow="auto">
                  <Table
                    stickyHeader
                    aria-label="sticky table"
                    sx={{
                      minWidth: { sx: 200, xl: "100%" },
                      overflowX: isXSmall ? "auto" : "hidden",
                    }}
                  >
                    <TableHead>
                      <TableRow
                        sx={{ backgroundColor: "rgba(216, 218, 219, 1)" }}
                      >
                        <HeaderCell> </HeaderCell>
                        <HeaderCell>Renovation Costs</HeaderCell>
                        <HeaderCell>Admin</HeaderCell>
                        <HeaderCell>Tenants</HeaderCell>
                        <HeaderCell>Total Cost</HeaderCell>
                        <HeaderCell>Report</HeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((item, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            fontSize: index === 0 ? "12px" : "14px",
                            fontWeight: index === 0 ? "400" : "normal",
                          }}
                        >
                          <TableCell>
                            <Checkbox color="primary" />
                          </TableCell>

                          <TableCell
                            sx={{
                              color:
                                item.name === "Current"
                                  ? "rgba(12, 35, 77, 1)"
                                  : "rgba(17, 17, 17, 0.6)",
                            }}
                          >
                            {item.name}
                          </TableCell>
                          <TableCell sx={{ color: "rgba(17, 17, 17, 0.6)" }}>
                            {item.admin}
                          </TableCell>
                          <TableCell sx={{ color: "rgba(17, 17, 17, 0.6)" }}>
                            {item.tenants}
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "rgba(17, 17, 17, 0.6)",
                              fontSize: { sx: 6, md: 12, lg: 12 },
                            }}
                          >
                            {item.TotalCost}
                          </TableCell>
                          <TableCell>{item.icon}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </CardContent>
            </Card>
          )}
        </Box>
      </Box>
    </>
  );
};

export default FinancialProjections;
const TitleText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "12px",
  color: "rgba(17, 17, 17, 0.4)",
  [theme.breakpoints.down("md")]: {
    fontSize: "10px",
  },
}));
const SubTitleText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginTop: "10px",
  fontSize: "14px",
  color: "rgba(17, 17, 17, 1)",
  [theme.breakpoints.down("md")]: {
    fontSize: "8px",
  },
}));

const MainTextParent = styled(Typography)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const MainText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "14px",
  color: "rgba(17, 17, 17, 1)",
  [theme.breakpoints.down("md")]: {
    fontSize: "10px",
  },
}));

const SideText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "12px",
  color: "rgba(17, 17, 17, 0.4)",
  [theme.breakpoints.down("md")]: {
    fontSize: "10px",
  },
}));

const HeaderCell = styled(TableCell)(({ theme }) => ({
  p: "8px",
  fontWeight: 400,
  fontSize: "14px",
  color: "rgba(17, 17, 17, 0.6)",
  [theme.breakpoints.down("md")]: {
    fontSize: "8px",
  },
}));
