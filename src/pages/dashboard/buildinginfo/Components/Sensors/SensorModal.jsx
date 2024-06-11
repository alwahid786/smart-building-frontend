import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReportIcon from "@mui/icons-material/Report";

function SensorModal({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <IconButton
          sx={{ position: "absolute", right: 8, top: 8 }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Heating Sensor
        </Typography>
        <TableContainer component={Paper} variant="outlined" sx={{ mb: 2 }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>ID sensor</TableCell>
                <TableCell>15415667215</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>Error</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Localization sensor</TableCell>
                <TableCell>Staircase 1B - Floor 2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Last Inspection</TableCell>
                <TableCell>
                  29-06-2019{" "}
                  <IconButton size="small">
                    <ReportIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Error code
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          U84323453 - Damage to the AP425 transducer
        </Typography>
        <Typography variant="subtitle1">History</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          12-05-2020 - An attempt to start the sensor has failed
          <br />
          05-02-2020 - The sensor has been turned off due to a power outage
          <br />
          21-03-2020 - Scheduled sensor reset at 3:00 pm
        </Typography>
        <Button variant="contained">Schedule sensor checks</Button>
      </Box>
    </Modal>
  );
}

export default SensorModal;
