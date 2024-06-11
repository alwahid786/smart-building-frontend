import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { MenuItem, Menu, Button, Box, TableContainer } from "@mui/material";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import FilterIcon from "../asset/svgs/FilterIcon";
import MagnifineGlassIcon from "../asset/svgs/MagnifineGlassIcon";
import DownArrowWhite from "../asset/svgs/DownArrowWhite";

const DynamicTable = ({ columns, rows, title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 1)",
        p: 1,
        width: "100%",
        overflowX: "auto",
        overflowY: "auto",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          paddingX: { xs: "0", sm: "1rem" },
          pl: { xs: "15px", md: "0" },
          marginLeft: { xs: "-1rem", sm: "0" },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              display: { sm: "flex" },
              width: { xs: "none", md: 150 },
              fontWeight: 600,
              fontSize: { xs: 12, md: 14 },
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            alignItems: "center",
            gap: 1,
            width: "100%",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <TextField
            id="input-with-icon-textfield"
            sx={{ width: { xs: "100%", md: "25%" } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MagnifineGlassIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Type to search"
            variant="standard"
          />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          >
            <FilterIcon />
          </Box>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            size={window.innerWidth < 600 ? "large" : "medium"}
            onClick={handleClick}
            endIcon={<DownArrowWhite />}
            sx={{
              backgroundColor: "#7B42F6",
              width: { xs: "100%", md: "auto" },
              mt: { xs: 1, md: 0 },
              borderRadius: "8px",
              color: "white",
              "&:hover": {
                backgroundColor: "#7B42F6",
              },
              "& .MuiButton-endIcon": {
                marginLeft: 2,
              },
            }}
          >
            Export
          </Button>
          <Menu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "customized-button",
            }}
            PaperProps={{
              style: {
                backgroundColor: "#7B42F6",
              },
            }}
          >
            <MenuItem onClick={handleClose} value="option1">
              Option 1
            </MenuItem>
            <MenuItem onClick={handleClose} value="option2">
              Option 2
            </MenuItem>
            <MenuItem onClick={handleClose} value="option3">
              Option 3
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Divider sx={{ marginTop: "10px", marginBottom: "10px" }}></Divider>
      <TableContainer
        sx={{
          height: "500px",
          overflow: "auto",
          overflowY: "auto",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            backgroundColor: "#D9D9D9",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#D9D9D9",
          },
        }}
      >
        <Table>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: "#D8DADB",
                color: "#111111",
                font: "Poppins",
                fontWeight: "100",
                fontSize: "16px",
                alignItems: "center",
              }}
            ></TableCell>
            {columns.map((column, index) => (
              <TableCell
                key={column.id}
                sx={{
                  p: 0,
                  backgroundColor: "rgba(216, 218, 219, 1)",
                  color: "#111111ab",
                  font: "Poppins",
                  fontSize: "14px",
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
          <TableBody>
            {rows.map((row, i) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                  <TableCell padding="checkbox">
                    <Checkbox sx={{ color: grey[300] }} />
                  </TableCell>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        sx={{
                          color:
                            column.id === "status" && value === "Executed"
                              ? "#329C82"
                              : "gray",
                        }}
                        key={column.id}
                      >
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DynamicTable;
