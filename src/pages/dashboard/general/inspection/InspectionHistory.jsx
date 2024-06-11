// import React, { useState } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Checkbox from "@mui/material/Checkbox";
// import CopyIcon from "../../../../asset/svgs/CopyIcon";
// import { grey } from "@mui/material/colors";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import { MenuItem, Button, Menu, Box } from "@mui/material";
// import FilterIcon from "../../../../asset/svgs/FilterIcon";
// import Divider from "@mui/material/Divider";
// import InputAdornment from "@mui/material/InputAdornment";
// import MagnifineGlassIcon from "../../../../asset/svgs/MagnifineGlassIcon";
// import DownArrowWhite from "../../../../asset/svgs/DownArrowWhite";
// const columns = [
//   { id: "number", label: "Id number", minWidth: 120 },
//   // { id: 'charges', label: 'Id charges', minWidth: 120 },
//   {
//     id: "date",
//     label: "Date",
//     minWidth: 120,
//     align: "right",
//   },
//   {
//     id: "type",
//     label: "Type",
//     minWidth: 170,
//     align: "right",
//   },
//   {
//     id: "payments",
//     label: "Payments",
//     minWidth: 150,
//     align: "right",
//   },
//   {
//     id: "status",
//     label: "Status",
//     minWidth: 150,
//     align: "right",
//   },
//   {
//     id: "report",
//     label: "Report",
//     minWidth: 150,
//     align: "right",
//   },
// ];

// function createData(number, date, type, contact, payments, status, report) {
//   return { number, date, type, contact, payments, status, report };
// }

// const rows = [
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "200$",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "200$",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "200$",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "200$",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "200$",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "200$",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "200$",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "200$",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "200$",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "200$",
//     "Executed",
//     <CopyIcon />
//   ),
//   createData(
//     "1234567899",
//     "29-06-2019",
//     "Car chargers",
//     "+47 1523 152 1123",
//     "Free",
//     "Executed",
//     <CopyIcon />
//   ),
// ];
// const InspectionHistory = () => {
//   // const [page, setPage] = React.useState(0);
//   // const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <>
//       {/* Search Bar and Filter */}
//       <Box sx={{ backgroundColor: "#FFFFFF", p: 2, borderRadius: "8px" }}>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             gap: 1,
//             flexDirection: { xs: "column", sm: "row" },
//             paddingX: { xs: "0", sm: "1rem" },
//             marginLeft: { xs: "-1rem", sm: "0" },
//             marginRight: { xs: "-1rem", sm: "0" },
//           }}
//         >
//           <Box sx={{ display: "flex" }}>
//             <Typography
//               sx={{
//                 display: { xs: "none", sm: "flex" },
//                 width: 150,
//                 fontWeight: 600,
//                 fontSize: 14,
//               }}
//             >
//               Inspection history
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//               width: "100%",
//               justifyContent: "flex-end",
//             }}
//           >
//             <TextField
//               id="input-with-icon-textfield"
//               sx={{ width: "25%" }}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <MagnifineGlassIcon />
//                   </InputAdornment>
//                 ),
//               }}
//               placeholder="Type to search"
//               variant="standard"
//             />
//             <FilterIcon />
//             <Button
//               aria-controls="customized-menu"
//               aria-haspopup="true"
//               variant="contained"
//               size="medium"
//               onClick={handleClick}
//               endIcon={<DownArrowWhite />}
//               sx={{
//                 backgroundColor: "#7B42F6",
//                 borderRadius: "8px",
//                 color: "white",
//                 "&:hover": {
//                   backgroundColor: "#7B42F6",
//                 },
//                 "& .MuiButton-endIcon": {
//                   marginLeft: 2,
//                 },
//               }}
//             >
//               Export
//             </Button>
//             <Menu
//               id="customized-menu"
//               anchorEl={anchorEl}
//               keepMounted
//               open={open}
//               onClose={handleClose}
//               MenuListProps={{
//                 "aria-labelledby": "customized-button",
//               }}
//               PaperProps={{
//                 style: {
//                   backgroundColor: "#7B42F6",
//                 },
//               }}
//             >
//               <MenuItem onClick={handleClose} value="option1">
//                 Option 1
//               </MenuItem>
//               <MenuItem onClick={handleClose} value="option2">
//                 Option 2
//               </MenuItem>
//               <MenuItem onClick={handleClose} value="option3">
//                 Option 3
//               </MenuItem>
//             </Menu>
//             <Typography
//               sx={{
//                 display: { xs: "none", sm: "block" },
//                 fontWeight: 400,
//                 fontSize: 14,
//               }}
//             >
//               See full history
//             </Typography>
//           </Box>
//         </Box>

//         <Divider sx={{ marginTop: "20px", marginBottom: "20px" }}></Divider>
//         <TableContainer
//           sx={{
//             height: "500px",
//             "&::-webkit-scrollbar": { width: "6px" },
//             "&::-webkit-scrollbar-thumb": {
//               borderRadius: "10px",
//               backgroundColor: "#D9D9D9",
//             },
//             "&::-webkit-scrollbar-thumb:hover": { backgroundColor: "#D9D9D9" },
//           }}
//         >
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell
//                   sx={{
//                     backgroundColor: "#D8DADB",
//                     color: "#111111",
//                     font: "Poppins",
//                     fontWeight: "100",
//                     fontSize: "19px",
//                   }}
//                 ></TableCell>
//                 {columns.map((column, index) => (
//                   <TableCell
//                     key={column.id}
//                     // align={column.align}
//                     sx={{
//                       p: 0,
//                       backgroundColor: "rgba(216, 218, 219, 1)",
//                       color: "#111111ab",
//                       font: "Poppins",
//                       fontSize: "14px",
//                     }}
//                   >
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row, i) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={i}>
//                     <TableCell padding="checkbox">
//                       <Checkbox sx={{ color: grey[300] }} />
//                     </TableCell>
//                     {columns.map((column) => {
//                       console.log("column", row);
//                       const value = row[column.id];
//                       return (
//                         <TableCell
//                           sx={{
//                             color:
//                               column.id === "status" && value === "Executed"
//                                 ? "#329C82"
//                                 : "gray",
//                           }}
//                           key={column.id}
//                         >
//                           {column.format && typeof value === "number"
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </>
//   );
// };
// export default InspectionHistory;
