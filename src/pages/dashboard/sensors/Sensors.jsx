import {
  Box,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import AddIcon from '../../../asset/svgs/AddIcon';
import { useGetAllSensorsQuery,  useCreateSensorMutation } from '../../../redux/api/sensorApi';
import AddSensor from './AddSensor';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, useMatch } from 'react-router-dom';
import ViewSensor from './ViewSensor';


const Sensors = () => {
  const match = useMatch('/dashboard/sensors/view-sensor');
  const [checked, setChecked] = useState(true);
  const { data: sensors, refetch } = useGetAllSensorsQuery();
  const [createSensor] = useCreateSensorMutation();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleAddSensor = async (newSensor) => {
    try {
      await createSensor(newSensor).unwrap();
      refetch(); // Refresh the sensor list after adding a new sensor
      handleClose();
    } catch (err) {
      console.error('Failed to add sensor:', err);
    }
  };

  return !match ? (
    <Box
      sx={{
        height: '100vh',
        background: '#FFFFFF',
        borderRadius: '14px',
        p: { lg: 2, xl: 4 },
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'fadeInUp 2s ease forwards',
        '@keyframes fadeInUp': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        <Typography
          sx={{ fontWeight: '600', fontSize: '20px', lineHeight: '32px' }}
        >
          All Sensors
        </Typography>
        <Box onClick={handleOpen} sx={{ cursor: 'pointer' }}>
          <AddIcon />
        </Box>
      </Box>
      <AddSensor open={open} handleClose={handleClose} onAddSensor={handleAddSensor} />
      <Box>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Sensor Name</b>
                </TableCell>
                <TableCell align="left">
                  <b>IP</b>
                </TableCell>
                <TableCell align="left">
                  <b>uniqueId</b>
                </TableCell>
                <TableCell align="left">
                  <b>Port</b>
                </TableCell>
                <TableCell align="left">
                  <b>Type</b>
                </TableCell>
                <TableCell align="left">
                  <b>Status</b>
                </TableCell>
                <TableCell align="left">
                  <b>Action</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sensors?.map((row) => (
                <TableRow
                  key={row.uniqueId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">{row.sensorName}</TableCell>
                  <TableCell align="left">{row.ip}</TableCell>
                  <TableCell align="left">{row.uniqueId}</TableCell>
                  <TableCell align="left">{row.port}</TableCell>
                  <TableCell align="left">{row.sensorType}</TableCell>
                  <TableCell align="left">
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                      <Link to="/dashboard/sensors/view-sensor">
                        <VisibilityIcon
                          sx={{ color: '#7B42F6', cursor: 'pointer' }}
                        />
                      </Link>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  ) : (
    <ViewSensor />
  );
};

export default Sensors;
