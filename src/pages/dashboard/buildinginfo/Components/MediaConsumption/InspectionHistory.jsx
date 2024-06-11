import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import CopyIcon from "../../../../../asset/svgs/CopyIcon";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { MenuItem, Button, Menu, Box } from "@mui/material";
import FilterIcon from "../../../../../asset/svgs/FilterIcon";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import MagnifineGlassIcon from "../../../../../asset/svgs/MagnifineGlassIcon";
import DownArrowWhite from "../../../../../asset/svgs/DownArrowWhite";
import { InspectionHistorySkeleton } from "../../../../../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../../features/loading/loadingSlice";
import DynamicTable from "../../../../../components/Table";
const columns = [
  { id: "number", label: "Id number", minWidth: 120 },
  // { id: 'charges', label: 'Id charges', minWidth: 120 },
  {
    id: "date",
    label: "Date",
    minWidth: 120,
    align: "right",
  },
  {
    id: "type",
    label: "Type",
    minWidth: 170,
    align: "right",
  },
  {
    id: "payments",
    label: "Payments",
    minWidth: 150,
    align: "right",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 150,
    align: "right",
  },
  {
    id: "report",
    label: "Report",
    minWidth: 150,
    align: "right",
  },
];

function createData(number, date, type, contact, payments, status, report) {
  return { number, date, type, contact, payments, status, report };
}

const rows = [
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "200$",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "200$",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "200$",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "200$",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "200$",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "200$",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "200$",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "200$",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "200$",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "200$",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "29-06-2019",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
];
const InspectionHistory = () => {
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);
  const open = Boolean(anchorEl);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {isLoading ? (
        <InspectionHistorySkeleton columns={columns} />
      ) : (
        <DynamicTable
          rows={rows}
          columns={columns}
          title="Inspection History"
        />
      )}
    </>
  );
};
export default InspectionHistory;
