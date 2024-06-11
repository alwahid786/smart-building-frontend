import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch
import CopyIcon from "../../../../../asset/svgs/CopyIcon";
import { grey } from "@mui/material/colors";
import { InspectionHistorySkeleton } from "../../../../../components/Skeleton";
import { setLoading } from "../../../../../features/loading/loadingSlice";
import DynamicTable from "../../../../../components/Table";

const columns = [
  { id: "number", label: "Id number" },
  { id: "charges", label: "Id charges" },
  {
    id: "type",
    label: "Type",
    align: "right",
  },
  {
    id: "contact",
    label: "Contact",
    align: "right",
  },
  {
    id: "payments",
    label: "Payments",
    align: "right",
  },
  {
    id: "status",
    label: "Status",
    align: "right",
  },
  {
    id: "report",
    label: "Report",
    align: "right",
  },
];

function createData(number, charges, type, contact, payments, status, report) {
  return { number, charges, type, contact, payments, status, report };
}

const rows = [
  createData(
    "1234567899",
    "1521381212",
    "Bike chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "1521381212",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "1521381212",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "1521381212",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "1521381212",
    "Car chargers",
    "+47 1523 152 1123",
    "200$",
    "Executed",
    <CopyIcon />
  ),
  createData(
    "1234567899",
    "1521381212",
    "Car chargers",
    "+47 1523 152 1123",
    "Free",
    "Executed",
    <CopyIcon />
  ),
];

export default function InspectionHistory() {
  const dispatch = useDispatch(); // Correct useDispatch hook
  const { isLoading } = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(setLoading(true)); // Start loading
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <InspectionHistorySkeleton columns={columns} />
      ) : (
        <DynamicTable
          columns={columns}
          rows={rows}
          title="Inspection History"
        />
      )}
    </>
  );
}
