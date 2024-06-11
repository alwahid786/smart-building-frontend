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
import { MenuItem, Menu, Button, Box } from "@mui/material";
import FilterIcon from "../../../../../asset/svgs/FilterIcon";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import MagnifineGlassIcon from "../../../../../asset/svgs/MagnifineGlassIcon";
import DownArrowWhite from "../../../../../asset/svgs/DownArrowWhite";
import TickIcon from "../../../../../asset/svgs/TickIcon";
import SettingIcon from "../../../../../asset/svgs/SettingIcon2";
import { InspectionHistorySkeleton } from "../../../../../components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../../features/loading/loadingSlice";
import VantilationErrorIcon from "../../../../../asset/svgs/VantilationErrorIcon";
import SensorModal from "./SensorModal";
import DynamicTable from "../../../../../components/Table";

const columns = [
  { id: "sensor1", label: "Id Sensor", minWidth: 120 },
  { id: "sensor2", label: "Id Sensor", minWidth: 120 },
  {
    id: "inspection",
    label: "Last Inspection",
    // minWidth: 120,
    align: "right",
  },
  {
    id: "status",
    label: "Status",
    // minWidth: 170,
    align: "right",
  },
  {
    id: "setting",
    label: "Setting",
    // minWidth: 150,
    align: "right",
  },
  {
    id: "report",
    label: "Report",
    // minWidth: 150,
    align: "right",
  },
];

function createData(sensor1, sensor2, inspection, status, setting, report) {
  return { sensor1, sensor2, inspection, status, setting, report };
}

const InspectionHistory = () => {
  const [openModal, setOpenModal] = useState(false);
  console.log("openModal", openModal);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleRowClick = (row) => {
    console.log("Row clicked:", row);
    handleOpenModal();
    // You can perform any action here, e.g., open a modal, navigate, or fetch more details
  };
  const rows = [
    createData(
      "1234567899",
      "1521381212",
      "29-06-200",
      <VantilationErrorIcon onClick={() => handleOpenModal()} />,
      <SettingIcon />,
      <CopyIcon />
    ),
    createData(
      "1234567899",
      "1521381212",
      "29-06-200",
      <TickIcon />,
      <SettingIcon />,
      <CopyIcon />
    ),
    createData(
      "1234567899",
      "1521381212",
      "29-06-200",
      <TickIcon />,
      <SettingIcon />,
      <CopyIcon />
    ),

    createData(
      "1234567899",
      "1521381212",
      "29-06-200",
      <TickIcon />,
      <SettingIcon />,
      <CopyIcon />
    ),
    createData(
      "1234567899",
      "1521381212",
      "29-06-200",
      <TickIcon />,
      <SettingIcon />,
      <CopyIcon />
    ),
    createData(
      "1234567899",
      "1521381212",
      "29-06-200",
      <TickIcon />,
      <SettingIcon />,
      <CopyIcon />
    ),
    createData(
      "1234567899",
      "1521381212",
      "29-06-200",
      <TickIcon />,
      <SettingIcon />,
      <CopyIcon />
    ),
    createData(
      "1234567899",
      "1521381212",
      "29-06-200",
      <TickIcon />,
      <SettingIcon />,
      <CopyIcon />
    ),
    createData(
      "1234567899",
      "1521381212",
      "29-06-200",
      <TickIcon />,
      <SettingIcon />,
      <CopyIcon />
    ),
  ];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);
  return (
    <>
      {openModal && (
        <SensorModal open={openModal} handleClose={handleCloseModal} />
      )}
      {isLoading ? (
        <InspectionHistorySkeleton columns={columns} />
      ) : (
        <Box
          sx={{
            background: "rgba(255, 255, 255, 1)",
            p: 1,
            mt: { xs: 3, md: 0 },
            borderRadius: "10px",
          }}
        >
          <DynamicTable columns={columns} rows={rows} title="List of Sensors" />
        </Box>
      )}
    </>
  );
};
export default InspectionHistory;
